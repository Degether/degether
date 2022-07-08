import React from "react";
import styled from "styled-components";
import ProjectMemberRecruitInfor from "./ProjectMemberRecruitInfor";
import ProjectDetails from "./ProjectDetails";
import ProjectContentsInfor from "./ProjectContentsInfor";

//  메인페이지에서 프로젝트 클릭하였을때 보여주는 소개 모달창
function ProjectIntroduceModalContainer() {
  return (
    <ProjectIntroduceModalOuter>
      <ProjectIntroduceModalWrap>
        <ProjectView>프로젝트 소개 VIEW</ProjectView>
        <ProejctInforContainer>
          {/* 모집 마감 기간 , 모집 영역 */}
          <ProjectMemberRecruitInfor />
          {/* 프로젝트 명칭, 프로젝트 장르, 개발 언어, 프로젝트 현황, 프로젝트 설명 */}
          <ProjectDetails />
          {/* 프로젝트 썸네일, 프로젝트 소개 */}
          <ProjectContentsInfor />
        </ProejctInforContainer>
      </ProjectIntroduceModalWrap>
    </ProjectIntroduceModalOuter>
  );
}

export default ProjectIntroduceModalContainer;

const ProjectIntroduceModalOuter = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgb(0, 0, 0, 0.5);
  z-index: 100;
`;

const ProjectIntroduceModalWrap = styled.div`
  width: 1522px;
  height: 752px;
  box-sizing: border-box;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: gray;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
`;

const ProjectView = styled.div`
  width: 441px;
  height: 100%;
  background-color: green;
`;

const ProejctInforContainer = styled.div`
  width: 1012px;
  height: 100%;
`;
