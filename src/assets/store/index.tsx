import { configureStore } from "@reduxjs/toolkit";
import GameReducer from "../features/GameSlice";

const store = configureStore({
  reducer: {
    game: GameReducer
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
