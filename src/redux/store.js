import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./slices/authSlices"


const store = configureStore({
    reducer: {
        auth: authReducer
    },
    devTools: true
});

export default store;