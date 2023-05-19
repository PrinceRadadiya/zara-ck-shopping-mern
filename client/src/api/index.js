import axios from "axios";

// export const baseURL ="http://localhost:5001/prince-store-c2efd/us-central1/app";

export const validatuser = async (token) => {
  try {
    // const res = await axios.get(`${baseURL}/api/user/jwtTokenverification`, {
    const res = await axios.get(
      `http://localhost:5001/prince-store-c2efd/us-central1/app/api/user/jwtTokenverification`,
      {
        headers: { Authorization: "Bearer " + token },
      }
    );
    // console.log(res);
    return res.data.data;
  } catch (error) {
    console.log("first", error);
  }
};

export const newProduct = async (data) => {
  try {
    const res = await axios.post(
      `http://localhost:5001/prince-store-c2efd/us-central1/app/api/products/create`,
      { ...data }
    );
    console.log("respose", res);
    return res.data.data;
  } catch (error) {
    return null;
  }
};

// GET All Product
export const getAllproducs = async () => {
  try {
    const res = await axios.get(
      `http://localhost:5001/prince-store-c2efd/us-central1/app/api/products/all`
    );
    return res.data.data;
  } catch (error) {
    return null;
  }
};

export const deleteproducs = async (Product_id) => {
  try {
    const res = await axios.delete(
      `http://localhost:5001/prince-store-c2efd/us-central1/app/api/products/delete/${Product_id}`
    );
    return res.data.data;
  } catch (error) {
    return null;
  }
};
