import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useCallback } from "react";

const SERVER_URL = "http://3.39.253.203";

// 프로젝트 생성하기
export const addProject = createAsyncThunk(
  "ADD/addProject",
  async (formData) => {
    const res = await axios.post(`${SERVER_URL}/api/project`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
    });

    return res.data;
  }
);
// 프로젝트 리스트 처음 받아오기
export const getProject = createAsyncThunk("GET/getProject", async () => {
  return await axios
    .get(`${SERVER_URL}/api/projects`)
    .then((res) => res.data.result.list)
    .catch((e) => console.log(e));
});
// // 프로젝트 리스트 무한스크롤
export const getProjectPage = createAsyncThunk(
  "GET/getProjectPage",
  async (page) => {
    return await axios
      .get(`${SERVER_URL}/api/projects?`, {
        params: {
          page: Number(page),
          sorted: "createdDate",
        },
      })
      .then((res) => res.data.result.list)
      .catch((e) => console.log(e));
  }
);

const ProjectSlice = createSlice({
  name: "ProjectSlice",
  initialState: {
    list: [],
  },
  reducers: {},
  extraReducers: {
    [addProject.fulfilled]: (state, action) => {
      console.log("ok");
    },
    [getProject.fulfilled]: (state, action) => {
      state.list = [...action.payload];
      console.log("getProject");
    },
    [getProjectPage.fulfilled]: (state, action) => {
      console.log(state.list);
      state.list = [...state.list, ...action.payload];
      console.log("getProjectPage");
    },
  },
});
export default ProjectSlice.reducer;
