import styled from "styled-components";
import Header from "../components/Header";
import Card from "../components/main/Card";
import ProjectCreateModal from "../components/main/ProjectCreateModal";
import LoginContainer from "../components/login/LoginContainer";
import ProjectSidebarContainer from "../components/projectSidebar/ProjectSidebarContainer";
import { useState } from "react";

function Main() {
  const [createModal, setCreateModal] = useState(true);

  return (
    <>
      <Header />
      <MainContainer>
        {createModal === true ? <ProjectCreateModal /> : null}
        <CardGrid>
          {Array.from({ length: 20 }, (item, idx) => {
            return (
              <div key={idx}>
                <Card />
              </div>
            );
          })}
        </CardGrid>
        <ProjectSidebarContainer />
        {/* <LoginContainer /> */}
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
  min-width: 1435px;
  margin-top: 215px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(6, 218px);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;
export default Main;
