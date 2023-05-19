import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const Dataproduct = createSlice({
  name: "prince",
  initialState,
  reducers: {
      getproducts:(state,action)=>{
        state.products = state
      },
      setproducts:(state,action)=>{
        state.products = action.payload
      },
      
  },
});

export const {getproducts,setproducts} = Dataproduct.actions;
export default Dataproduct.reducer;

// state.ProductData = action.payload;
