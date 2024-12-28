import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    toggleGPTSearchValue: false,
    gptMovieResult: null,
  },
  reducers: {
    addClickGPTSearch: (state) => {
      state.toggleGPTSearchValue = !state.toggleGPTSearchValue;
    },
    addGPTMovieResult: (state, action) => {
      state.gptMovieResult = action.payload;
    }
  },
});

export const { addClickGPTSearch, addGPTMovieResult } = gptSlice.actions;

export default gptSlice.reducer;
