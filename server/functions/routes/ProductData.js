const router = require("express").Router();
const admin = require("firebase-admin");
const db = admin.firestore();
db.settings({ ignoreUndefinedProperties: true });

router.post("/create", async (req, res) => {
  try {
    const id = Date.now();
    const data = {
      Product_id: id,
      Product_name: req.body.Product_name,
      Product_price: req.body.Product_price,
      Product_Allimage: req.body.Product_Allimage,
    };
    const response = await db
      .collection("ProductData")
      .doc(`/${id}/`)
      .set(data);
    return res.status(200).send({ success: true, data: response });
  } catch (error) {
    return res.send({ success: false, msg: `Error:${er}` });
    // console.log("error",error);
  }
});

router.get("/all", async (req, res) => {
  (async () => {
    try {
      let query = db.collection("ProductData");
      let response = [];
      await query.get().then((querysnap) => {
        let docs = querysnap.docs;
        docs.map((doc) => {
          response.push({ ...doc.data() });
        });
        return response;
      });
      return res.status(200).send({ success: true, data: response });
    } catch (error) {
      console.log(error);
    }
  })();
});

router.delete("/delete/:Product_id", async (req, res) => {
  const Product_id = req.params.Product_id;
  try {
    await db
      .collection("ProductData")
      .doc(`/${Product_id}/`)
      .delete()
      .then((result) => {
        return res.status(200).send({ success: true, data: result });
      });
  } catch (er) {
    return res.send({ success: false, msg: `Error:${er}` });
  }
});

module.exports = router;
