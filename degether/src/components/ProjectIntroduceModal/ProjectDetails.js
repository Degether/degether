import React from "react";
import styled from "styled-components";

function ProjectDetails() {
  return (
    <ProjectDetailsContainer>
      {/* 프로젝트 명칭*/}
      <ProjectDetailsRowBox>
        <ProjectDetailCategoryText>프로젝트 명칭</ProjectDetailCategoryText>
        <ProjectDetailsBox boxWidth="600px" />
      </ProjectDetailsRowBox>

      {/* 프로젝트 장르 / 개발언어 */}
      <ProjectDetailsRowBox>
        <ProjectDetailCategoryText>프로젝트 장르</ProjectDetailCategoryText>
        <ProjectDetailsBox boxWidth="300px" />
        <ProjectDetailCategoryText>
          프로젝트 개발 언어
        </ProjectDetailCategoryText>
        <ProjectDetailsBox boxWidth="300px" />
      </ProjectDetailsRowBox>

      {/* 프로젝트 현황 */}
      <ProjectDetailsRowBox>
        <ProjectDetailCategoryText>프로젝트 현황</ProjectDetailCategoryText>
        <ProjectDetailsBox boxWidth="200px" />
        <ProjectDetailsBox boxWidth="200px" />
        <ProjectDetailsBox boxWidth="200px" />
        <ProjectDetailsBox boxWidth="200px" />
      </ProjectDetailsRowBox>

      {/* 프로젝트 설명 */}
      <ProjectDetailsRowBox>
        <ProjectDetailCategoryText>프로젝트 설명</ProjectDetailCategoryText>
        <ProjectDetailsBox boxWidth="600px" />
      </ProjectDetailsRowBox>
    </ProjectDetailsContainer>
  );
}

export default ProjectDetails;

const ProjectDetailsContainer = styled.div`
  width: 997px;
  height: 40%;
  background-color: white;
`;

const ProjectDetailsRowBox = styled.div`
  width: 951px;
  height: 45px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProjectDetailsBox = styled.div`
  width: ${(props) => props.boxWidth};
  height: 45px;
  border: 1px solid black;
  border-radius: 10px;
  margin-right: 10px;
`;

const ProjectDetailCategoryText = styled.p`
  margin-right: 10px;
`;
