import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = "http://3.39.253.203";

// 프로젝트 생성
export const addProject = createAsyncThunk(
  "ADD/addProject",
  async (formData) => {
    const response = await axios.post(`${SERVER_URL}/api/project`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("access_token"),
      },
    });
    return response.data;
  }
);
const ProjectSlice = createSlice({
  name: "ProjectSlice",
  initialState: {
    list: {},
  },
  reducers: {},
  extraReducers: {
    [addProject.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = action.payload;
    },
  },
});
export default ProjectSlice.reducer;
