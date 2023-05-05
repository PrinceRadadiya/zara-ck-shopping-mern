import { createSlice } from "@reduxjs/toolkit";

// const initialState = []
const usersSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setuser(state, action) {
      //   state(action.payload);
      state.user = action.payload;
    },
    userlogout(state) {
      state.user = null;
    },
  },
});
export const { setuser,userlogout } = usersSlice.actions;

export default usersSlice.reducer;
