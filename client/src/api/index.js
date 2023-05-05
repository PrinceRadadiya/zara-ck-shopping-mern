import axios from "axios";

// export const baseURL =
//   "http://localhost:5001/prince-store-c2efd/us-central1/app";

export const validatuser = async (token) => {
  try {
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

