const router = require("express").Router();
const admin = require("firebase-admin");

router.get("/", (req, res) => {
  return res.send("hello guys my name is prince");
});

router.get("/jwtTokenverification", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500).send({ msg: "token not found" });
  }

  const token = req.headers.authorization.split(" ")[1];
  //   return res.status(200).send({ token: token });
  try {
    const decodevalue = await admin.auth().verifyIdToken(token);
  
    if (!decodevalue) {
      return res.status(500).json({
        success: false,
        msg: `Unauthorize access : ${err}`,
      });
    }
    return res.status(200).json({ success: true, data: decodevalue });
  } catch (error) {
    return res.send({
      success: false,
      msg: `Error in Extracting the token : ${error}`,
    });
  }
});

module.exports = router;
