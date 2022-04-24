import { createSlice } from "@reduxjs/toolkit";

export const teamsSlice = createSlice({
  name: "teams",
  initialState: {
    list: [],
    current: {}
  },
  reducers: {
    setTeamList: (state, action) => {
      state.list = action.payload;
    },
    setCurrentTeam: (state, action) => {
      state.current = action.payload;
    }
  },
});

export const { setTeamList, setCurrentTeam } = teamsSlice.actions;
export default teamsSlice.reducer;
