import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "GPT",
  initialState: {
    toggleGPTSearchValue: false,
  },
  reducers: {
    addClickGPTSearch: (state) => {
      state.toggleGPTSearchValue = !state.toggleGPTSearchValue;
    },
  },
});

export const { addClickGPTSearch } = gptSlice.actions;

export default gptSlice.reducer;
