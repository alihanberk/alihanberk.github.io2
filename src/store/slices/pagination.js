import { createSlice } from "@reduxjs/toolkit";

export const paginationSlice = createSlice({
  name: "pagination",
  initialState: {
    page: 0,
  },
  reducers: {
    nextPage: (state) => {
      state.page++;
    },
    prevPage: (state) => {
      if (state.page > 0)
        state.page--;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});

export const { nextPage, prevPage, setPage } = paginationSlice.actions;
export default paginationSlice.reducer;
