import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage";
import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import ProjectMain from "./pages/ProjectMain";
import ProjectProcess from "./pages/ProjectProcess";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/project" element={<ProjectMain />} />
        <Route path="/project/process" element={<ProjectProcess />} />
      </Routes>
    </div>
  );
}

export default App;
