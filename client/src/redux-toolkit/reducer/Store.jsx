import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer"
import shopping from "./shopping";
// import datareducer from "./datareducer";

const store = configureStore({
    reducer: {
        user: userSlice,
        prince: shopping,
    },
})

export default store;
// product : datareducer,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()