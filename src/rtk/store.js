import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./slices/messageSlice";
import loginSlice from "./slices/loginSlice";
import projectSlice from "./slices/projectSlice";

export default configureStore({
  reducer: {
    messages: messageSlice,
    login: loginSlice,
    projects : projectSlice,
  },
})