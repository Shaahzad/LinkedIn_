import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userslice.js"

export const Store = configureStore({
    reducer:  {
        user: userReducer
    },
});


