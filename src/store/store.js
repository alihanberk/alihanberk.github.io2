import { configureStore, combineReducers } from "@reduxjs/toolkit";
import paginationSlice from "./slices/pagination";
import teamsSlice from "./slices/teams";
import stickersSlice from "./slices/stickers";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const reducers = combineReducers({
  pagination: paginationSlice,
  teams: teamsSlice,
  stickers: stickersSlice
});

const persistConfig = {
  key: 'root',
  storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})