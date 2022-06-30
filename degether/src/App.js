import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage";
import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
