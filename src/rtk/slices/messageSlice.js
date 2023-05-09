import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMsg = createAsyncThunk("messageSlice/fetchMsg", async () => {
  const res = await axios.get("http://localhost/decor/php/messages.php");
  return res.data; // this is action.payload
});
export const editMsg = createAsyncThunk("messageSlice/editMsg", async (id) => {
  const res = await axios.put(`http://localhost/decor/php/messages.php`, {
    id: id,
  });
  return res.data; // this is action.payload
});
export const deleteMsg = createAsyncThunk(
  "messageSlice/deleteMsg",
  async (id) => {
    const res = await axios.delete(
      `http://localhost/decor/php/messages.php?id=${id}`
    );
    return res.data; // this is action.payload
  }
);

export const messageSlice = createSlice({
  initialState: [],
  name: "messageSlice", // this is action.type
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMsg.fulfilled, (state, action) => {
        return action.payload.sort((a, b) => b.id - a.id);
      })
      .addCase(editMsg.fulfilled, (state, action) => {
        return action.payload.sort((a, b) => b.id - a.id);
      })
      .addCase(deleteMsg.fulfilled, (state, action) => {
        return action.payload.sort((a, b) => b.id - a.id);
      });
  },
});

export default messageSlice.reducer;
