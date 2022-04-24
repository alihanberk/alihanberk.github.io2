import { createSlice } from "@reduxjs/toolkit";

export const stickersSlice = createSlice({
  name: "stickers",
  initialState: {
    openedPersonIds: [],
    dailyAvailableStickerCount: 3,
    lastOpenedDate: null,
  },
  reducers: {
    setOpenedPersonIds: (state, action) => {

      const
        currentDate = new Date(),
        currentDateString = currentDate.toDateString(),
        isAvailableDay = state.lastOpenedDate === null || state.lastOpenedDate >= currentDateString;

      if (isAvailableDay && state.dailyAvailableStickerCount > 0) {

        if (state.dailyAvailableStickerCount === 3)
          state.lastOpenedDate = currentDateString;

        state.dailyAvailableStickerCount--;

        if (state.dailyAvailableStickerCount === 0) {
          state.dailyAvailableStickerCount = 3;
          state.lastOpenedDate = new Date(currentDate.setDate(currentDate.getDate() + 1)).toDateString();
        }

        state.openedPersonIds = [...state.openedPersonIds, ...action.payload].filter((value, index, self) => self.indexOf(value) === index);
      }
    },
  },
});

export const { setOpenedPersonIds } = stickersSlice.actions;
export default stickersSlice.reducer;
