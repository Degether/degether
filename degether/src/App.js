import "./App.css";
import { Routes, Route } from "react-router-dom";
import MyPage from "./pages/MyPage";
import React from "react";
import Header from "./components/Header";
import Main from "./pages/Main";
import ProjectMain from "./pages/ProjectMain";
import ProjectProcess from "./pages/ProjectProcess";
import ProjectIntroduceModalContainer from "./components/ProjectIntroduceModal/ProjectIntroduceModalContainer";
import ProjectDocument from "./pages/ProjectDocument";
import ProjectAdmin from "./pages/ProjectAdmin";
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
        <Route path="/project" element={<ProjectMain />} />
        <Route path="/project/process" element={<ProjectProcess />} />
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
