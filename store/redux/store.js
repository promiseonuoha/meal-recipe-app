import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./favourite-slice";

export const store = configureStore({
  reducer: {
    favourite: favouriteSlice,
  },
});
