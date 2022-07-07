import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage";
import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import ProjectIntroduceModalContainer from "./components/ProjectIntroduceModal/ProjectIntroduceModalContainer";
import ProjectDocument from "./pages/ProjectDocument";
import ProjectAdmin from "./pages/ProjectAdmin";

// 소셜로그인
import KakaoOAuthRedirectHandler from "./components/login/KakaoOAuthRedirectHandler";
import NaverOAuthRedirectHandler from "./components/login/NaverOAuthRedirectHandler";
import GoogleOAuthRedirectHandler from "./components/login/GoogleOAuthRedirectHandler";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/projectdocument" element={<ProjectDocument />} />
        <Route path="/projectadmin" element={<ProjectAdmin />} />
        <Route
          path="/auth/kakao/callback"
          element={<KakaoOAuthRedirectHandler />}
        />
        <Route
          path="/auth/naver/callback"
          element={<NaverOAuthRedirectHandler />}
        />
        <Route
          path="/auth/google/callback"
          element={<GoogleOAuthRedirectHandler />}
        />
      </Routes>
    </div>
  );
}

export default App;
