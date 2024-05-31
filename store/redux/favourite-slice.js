import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mealIds: [],
};

export const favouriteSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite: (state, action) => {
      state.mealIds.push(action.payload.id);
    },
    removeFavourite: (state, action) => {
      state.mealIds.splice(state.mealIds.indexOf(action.payload.id), 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addFavourite, removeFavourite } = favouriteSlice.actions;

export default favouriteSlice.reducer;
