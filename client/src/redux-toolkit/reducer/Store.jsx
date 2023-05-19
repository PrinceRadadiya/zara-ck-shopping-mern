import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducer"
import shopping from "./shopping";
import Dataproduct  from "./allproduct";
// import datareducer from "./datareducer";

const store = configureStore({
    reducer: {
        user: userSlice,
        prince: shopping,
        datapro: Dataproduct,
    },
})
export default store;
// product : datareducer,
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()