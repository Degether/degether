import React, { useState } from "react";
import styled from "styled-components";
import Card from "../components/main/Card";
import ProjectCreateModal from "../components/main/ProjectCreateModal";
import LoginContainer from "../components/login/LoginContainer";
import ProjectSidebarContainer from "../components/projectSidebar/ProjectSidebarContainer";

function Main() {
  const [createModal, setCreateModal] = useState(false);

  return (
    <>
      <MainContainer>
        {createModal === true ? <ProjectCreateModal /> : null}
        <CardGrid>
          <Card />
        </CardGrid>
        <LoginContainer />
      </MainContainer>
    </>
  );
}
const MainContainer = styled.div`
  width: 1920px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
const CardGrid = styled.div`
  min-width: 1365px;
  padding-top: 32px;
  margin-left: 32px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(6, 218px);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;
export default Main;
