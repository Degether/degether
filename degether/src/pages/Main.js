import Card from "../components/Card";
import styled from "styled-components";

function Main() {
  return (
    <>
      <CardGrid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </CardGrid>
    </>
  );
}
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 218px);
  gap: 16px;
`;
export default Main;
