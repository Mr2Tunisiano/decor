import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProjects = createAsyncThunk(
  "projectSlice/fetchProjects",
  async () => {
    const res = await axios.get("http://localhost/decor/php/projects.php");
    return res.data; // this is action.payload
  }
);
export const editProject = createAsyncThunk("projectSlice/editProject", async (project) => {
  const res = await axios.put(`http://localhost/decor/php/projects.php`, {
    id: project.id,
    name: project.name,
    category: project.category,
    client: project.client,
    location: project.location,
    description: project.description,
  });
  return res.data; // this is action.payload
});
export const deleteProject = createAsyncThunk(
  "projectSlice/deleteProject",
  async (id) => {
    const res = await axios.delete(
      `http://localhost/decor/php/projects.php?id=${id}`
    );
    return res.data; // this is action.payload
  }
);

export const projectSlice = createSlice({
  initialState: [],
  name: "projectSlice", // this is action.type
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(editProject.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default projectSlice.reducer;
