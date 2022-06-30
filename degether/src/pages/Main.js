import Card from "../components/Card";
import styled from "styled-components";

function Main() {
  return (
    <>
      <CardGrid>
        {Array.from({ length: 16 }, (item, idx) => {
          return <Card key={idx} />;
        })}
      </CardGrid>
    </>
  );
}
const CardGrid = styled.div`
  margin-top: 215px;
  display: grid;
  grid-template-columns: repeat(8, 218px);
  grid-column-gap: 16px;
  grid-row-gap: 16px;
`;
export default Main;
