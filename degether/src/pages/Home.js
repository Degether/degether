import React from "react";
import LoginContainer from "../components/login/LoginContainer";
import ProjectSidebarContainer from "../components/projectSidebar/ProjectSidebarContainer";
import styled from "styled-components";

function Home() {
  return (
    <div>
      <LoginContainer />
      <ProjectSidebarContainer />
    </div>
  );
}

export default Home;
