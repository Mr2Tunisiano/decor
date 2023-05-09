import { createSlice } from "@reduxjs/toolkit";

export const IsLoggedIn = createSlice({
  initialState: false,
  name: "cartSlice",
  reducers: {
    LoggedIn: (state, action) => {
      return true;
    },
    LoggedOut: (state, action) => {
      return false;
    },
  },
});

export const { LoggedIn, LoggedOut } = IsLoggedIn.actions;
export default IsLoggedIn.reducer;
