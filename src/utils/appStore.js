import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"

const userStore = configureStore({
    reducer: {
        user: userReducer,
    },
})

export default userStore;