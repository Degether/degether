import styled from "styled-components";
import Card, { Card2 } from "../components/main/Card";
import LoginContainer from "../components/login/LoginContainer";
import { useState } from "react";

function Main() {
  const [firstRow, setFirstRow] = useState([Card, Card2]);
  return (
    <>
      <MainContainer>
        <CardGrid>
          {Array.from({ length: 6 }, (item, idx) => {
            return (
              <>
                {Array.from({ length: 1 }, (item, idx) => {
                  return (
                    <div key={idx}>
                      <Card />
                      <Card2 />
                    </div>
                  );
                })}
                {Array.from({ length: 1 }, (item, idx) => {
                  return (
                    <div key={idx}>
                      <Card2 />
                      <Card />
                    </div>
                  );
                })}
              </>
            );
          })}
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
  min-width: 1435px;
  margin-top: 215px;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(6, 218px);
  grid-template-rows: repeat(2, 284px, 466px);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;
export default Main;
