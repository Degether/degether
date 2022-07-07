import { configureStore } from "@reduxjs/toolkit";
import ProjectSlice from "../redux/modules/ProjectSlice";

const store = configureStore({
  reducer: {
    Project: ProjectSlice,
  },
});

export default store;
