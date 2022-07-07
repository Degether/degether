import React from "react";
import styled from "styled-components";

function ProjectContentsInfor() {
  return (
    <ProjectContentsInforContaienr>
      <ContentsBox>
        <Contents>썸네일</Contents>
        <Contents>썸네일</Contents>
        <Contents>썸네일</Contents>
        <Contents>썸네일</Contents>
        <Contents>썸네일</Contents>
        <Contents>썸네일</Contents>
      </ContentsBox>
    </ProjectContentsInforContaienr>
  );
}

export default ProjectContentsInfor;

const ProjectContentsInforContaienr = styled.div`
  width: 997px;
  height: 30%;
  background-color: white;
`;

const ContentsBox = styled.div`
  width: 901px;
  height: 101px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

const Contents = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
