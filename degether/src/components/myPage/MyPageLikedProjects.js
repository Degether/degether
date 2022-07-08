import React from "react";
import styled from "styled-components";

function MyPageLikedProjects() {
  return (
    <MyPageLikedProjectsContainer>
      <LikedProjectsBox>
        <SharedText>관심</SharedText>
        <SharedText>PROJECT</SharedText>
      </LikedProjectsBox>
    </MyPageLikedProjectsContainer>
  );
}

export default MyPageLikedProjects;

const MyPageLikedProjectsContainer = styled.div`
  width: 1371px;
  margin: 0 16px;
`;

const LikedProjectsBox = styled.div`
  width: 431px;
  height: 430px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SharedText = styled.p`
  color: #d6e5d0;
  font-size: 40px;
`;
