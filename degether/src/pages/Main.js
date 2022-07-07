import styled from "styled-components";
import Card from "../components/main/Card";
import LoginContainer from "../components/login/LoginContainer";

function Main() {
  return (
    <>
      <MainContainer>
        <CardGrid>
          {Array.from({ length: 32 }, (item, idx) => {
            return <Card key={idx} />;
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
  grid-template-rows: auto;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;
export default Main;
