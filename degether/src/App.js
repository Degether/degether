import "./App.css";
import { Routes, Route } from "react-router-dom";

import MyPage from "./pages/MyPage";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
