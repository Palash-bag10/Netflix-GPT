import { createSlice } from "@reduxjs/toolkit";


const gptSlice = createSlice({
    name: "gpt",
    initialState: {
       showGptSearch: false, 
       movieResults: null,
       movieNames: null,
    } ,
    reducers: {
        toggleGptSearch: (state, action) => {
            state.showGptSearch = !state.showGptSearch
        },
        gptSearchMovieResult: (state, action) => {
            const {movieNames, movieResults} = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }

})

export const {toggleGptSearch, gptSearchMovieResult} = gptSlice.actions;

export default gptSlice.reducer;