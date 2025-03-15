import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieNames:[],
    movieResults:[],
    loading:false,
    
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addMovieResults: (state ,action) =>{
      state.movieResults = action.payload;

    },
    addMovieNames:(state,action) => {
      state.movieNames = action.payload;
    },
    setLoadingMovies:(state, action) => {
      state.loading =action.payload;
    },
    

  },
});

export const { toggleGptSearchView, addMovieResults, addMovieNames, setLoadingMovies} = gptSlice.actions;

export default gptSlice.reducer;