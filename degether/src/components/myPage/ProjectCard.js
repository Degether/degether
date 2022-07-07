import React from "react";
import styled from "styled-components";

function ProjectCard() {
  return (
    <ProjectCardContainer>
      <CardTextBox>
        <ProjectTitle>프로젝트 Degether</ProjectTitle>
        <ParticipatedNum>
          참여인원
          <ParticipatedStatusText>
            [개발자 / 5명] [디자이너1명]
          </ParticipatedStatusText>
        </ParticipatedNum>
      </CardTextBox>
      <CardImgBox>
        <CardImg src="./images/Degether.png" />
      </CardImgBox>
    </ProjectCardContainer>
  );
}

export default ProjectCard;

const ProjectCardContainer = styled.div`
  width: 214px;
  height: 366px;
  margin-top: 10px;
  margin-left: 20px;
`;

const CardTextBox = styled.div`
  width: 192px;
  height: 34px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
`;

const CardImgBox = styled.div`
  width: 214px;
  height: 300px;
  border-radius: 10px;
  margin-top: 10px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;

const ProjectTitle = styled.div`
  width: 192px;
  height: 17px;
`;

const ParticipatedNum = styled.div`
  width: 192px;
  height: 17px;
  display: flex;
`;

const ParticipatedStatusText = styled.div`
  color: #b34301; ;
`;
