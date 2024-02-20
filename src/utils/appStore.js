import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice"
import moviesReducer from "../utils/movieSlice"

const userStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
    },
})

export default userStore;