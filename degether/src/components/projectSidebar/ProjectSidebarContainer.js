import React from "react";
import styled from "styled-components";

function ProjectSidebarContainer() {
  return (
    <ProjectSidebarContainerWrap>
      {/* 상단 참여 중 프로젝트 */}

      <ProjectSidebarTop>
        <span className="material-symbols-outlined">folder</span>
        <TopText>참여 중 프로젝트</TopText>
      </ProjectSidebarTop>

      {/* 프로젝트 생성 버튼 */}

      <ProjectAddBtn>
        <ProjectAddBtnText>
          <span className="material-symbols-outlined">add</span>
          <AddBtnText>프로젝트 생성</AddBtnText>
        </ProjectAddBtnText>
      </ProjectAddBtn>

      <Test>
        {/* 프로젝트 배경 이미지 */}
        <ProjectdBackgroundImg src="./images/Degether.png" />

        {/* 프로젝트 상세 정보 게시물 리스트 */}
        <ProjectList>
          <p>디게더(프로젝트 매칭 시스템)</p>
          <p>참여인원 [개발자 / 5명] [디자이너 / 1명]</p>
        </ProjectList>
      </Test>
    </ProjectSidebarContainerWrap>
  );
}

export default ProjectSidebarContainer;

const ProjectSidebarContainerWrap = styled.div`
  box-sizing: border-box;
  border-top: 0.5px solid #efefef;
  width: 453px;
  height: 898px;
  background-color: #09120e;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Test = styled.div`
  width: 421px;
`;

const ProjectSidebarTop = styled.div`
  width: 421px;
  height: 34px;
  color: white;
  display: flex;
  align-items: center;
  margin-top: 15px;
`;

const TopText = styled.p`
  margin-left: 10px;
`;

const ProjectAddBtn = styled.div`
  width: 421px;
  height: 91px;
  border: 1px solid white;
  display: flex;
  align-items: center;
  border-radius: 50px 10px 10px 10px;
  color: white;
  margin-top: 15px;
`;

const ProjectAddBtnText = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const AddBtnText = styled.p`
  margin-left: 10px;
`;

const ProjectdBackgroundImg = styled.img`
  width: 421px;
  height: 262px;
  object-fit: cover;
  box-sizing: border-box;
  border: 1px solid #efefef;
  border-radius: 10px;
  margin-top: 15px;
`;

const ProjectList = styled.div`
  width: 214px;
  height: 34px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  color: #efefef;
  float: left;
  margin-top: 15px;
`;
