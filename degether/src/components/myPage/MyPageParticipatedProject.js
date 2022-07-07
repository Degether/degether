import React from "react";
import styled from "styled-components";
import ProjectCard from "./ProjectCard";

function MyPageParticipatedProject() {
  return (
    <MyPageParticipatedProjectContainer>
      <ParticipatedProjectBox>
        <SharedText>참여</SharedText>
        <SharedText>PROJECT</SharedText>
      </ParticipatedProjectBox>
      <ProjectCardBox>
        <ProjectCard />
        <ProjectCard />
      </ProjectCardBox>
    </MyPageParticipatedProjectContainer>
  );
}

export default MyPageParticipatedProject;

const MyPageParticipatedProjectContainer = styled.div`
  width: 1371px;
  height: 431px;
  margin: 0 16px;
  display: flex;
`;

const SharedText = styled.p`
  color: #d6e5d0;
`;

const ParticipatedProjectBox = styled.div`
  width: 431px;
  height: 431px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectCardBox = styled.div`
  width: 940px;
  height: 431px;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;
