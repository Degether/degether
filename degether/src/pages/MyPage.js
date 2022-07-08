import React from "react";
import styled from "styled-components";
import MyPageProfileSetting from "../components/myPage/MyPageProfileSetting";
// import MyPageNotice from "../components/myPage/MyPageNotice";
import MyPageParticipatedProject from "../components/myPage/MyPageParticipatedProject";
import MyPageSideBar from "../components/myPage/MyPageSideBar";
import MyPageLikedProjects from "../components/myPage/MyPageLikedProjects";

function MyPage() {
  return (
    <MyPageContainer>
      {/* 선택한 카테고리에 따라 불러오는 페이지 다르게 */}
      <MyPageInforSection>
        <MyPageProfileSetting />
        {/* <MyPageNotice /> */}
        <MyPageParticipatedProject />
        <MyPageLikedProjects />
      </MyPageInforSection>
      <MyPageSideBar />
    </MyPageContainer>
  );
}

export default MyPage;

const MyPageContainer = styled.div`
  width: 1920px;
  margin: 180px 0;
  border: 1px solid black;
  display: flex;
`;

const MyPageInforSection = styled.div`
  width: 1467px;
`;
