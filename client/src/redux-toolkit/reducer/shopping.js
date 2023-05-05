import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  myproduct: [],
  userInfo: null,
};

export const shopping = createSlice({
  name: "prince",
  initialState,
  reducers: {
    addDataList: (state, action) => {
      const item = state.myproduct.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.myproduct.push(action.payload);
      }
    },
    deleteproduct: (state, action) => {
      state.myproduct = state.myproduct.filter(
        (item) => item.id !== action.payload
      );
    },
    increamentQuantity: (state, action) => {
      const item = state.myproduct.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.myproduct.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
  },
});

export const { addDataList,deleteproduct,increamentQuantity,decrementQuantity} = shopping.actions;
export default shopping.reducer;

// state.ProductData = action.payload;
