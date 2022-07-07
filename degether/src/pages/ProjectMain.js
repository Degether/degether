import React, { useState } from "react";
import styled from "styled-components";

function ProjectMain() {
  const [notice, setNotice] = useState(false);
  const [todo, setTodo] = useState(false);
  return (
    <ProjectMainContainer>
      <Header>디게더 로고</Header>
      <MenuBar>
        <div>프로젝트 게시판</div>
        <div>문서</div>
        <div>진행현황</div>
        <div>프로젝트 관리</div>
        <ButtonWrap>
          <button>홈버튼</button>
          <button>알림버튼</button>
          <button>마이페이지 이동버튼</button>
          <button>채팅창온오프버튼</button>
        </ButtonWrap>
      </MenuBar>
      <MainContainer>
        <LeftContainer>
          <NoticeWrap>
            {/* 공지사항 */}
            <NoticeContainer>
              <NoticeTitle>공지사항</NoticeTitle>
              <Title>
                <button
                  onClick={() => {
                    setNotice(!notice);
                  }}
                >
                  토글
                </button>
                <p>공지제목</p>
                <p>2022-07-05</p>
              </Title>
              {notice === true ? (
                <NoticeModal>공지내용 모달</NoticeModal>
              ) : null}
            </NoticeContainer>
            {/* 투두리스트 */}
            <NoticeContainer>
              <NoticeTitle>투두리스트</NoticeTitle>
              <Title>
                <button
                  onClick={() => {
                    setTodo(!todo);
                  }}
                >
                  토글
                </button>
                <p>문서제목</p>
                <p>담당자</p>
                <p>마감일 D-01</p>
              </Title>
              {todo === true ? (
                <NoticeModal>
                  <NoticeInfo>
                    <p>작성자</p>
                    <p>진행상황</p>
                  </NoticeInfo>
                  <div>상세내용</div>
                </NoticeModal>
              ) : null}
            </NoticeContainer>
          </NoticeWrap>
          {/* 프로젝트 정보 */}
          <InfoContainer>
            <InfoTitle>프로젝트 정보</InfoTitle>
            <InfoWrap>
              <InfoTab>
                <div>프로젝트 설명</div>
                <div>캘린더</div>
              </InfoTab>
              <InfoBox>탭에 따라 바뀌는 구역</InfoBox>
            </InfoWrap>
          </InfoContainer>
        </LeftContainer>
      </MainContainer>
    </ProjectMainContainer>
  );
}
export default ProjectMain;
const ProjectMainContainer = styled.div``;
const Header = styled.div`
  width: 100%;
  background: #ddd;
  height: 50px;
`;
const MenuBar = styled.div`
  width: 100%;
  background: #ddd;
  display: flex;
  height: 50px;
  div {
    margin-left: 10px;
    width: 600px;
    background: #444;
  }
`;
const ButtonWrap = styled.div`
  margin-left: 20px;
  display: flex;

  button {
    margin-left: 10px;
  }
`;
const MainContainer = styled.div`
  position: relative;
`;
const LeftContainer = styled.div``;
const NoticeWrap = styled.div`
  display: flex;
  height: 500px;
`;
const NoticeContainer = styled.div`
  width: 40%;
  background: #eee;
  overflow-y: scroll;
`;
const NoticeTitle = styled.div`
  background: #666;
  height: 40px;
`;
const Title = styled.div`
  display: flex;
  p {
    margin-left: 10px;
    margin-right: 70px;
  }
`;
const NoticeModal = styled.div`
  height: 120px;
  background: orange;
`;
const NoticeInfo = styled.div`
  display: flex;
  background: green;
`;

const InfoContainer = styled.div`
  width: 80%;
`;
const InfoTitle = styled.div`
  display: flex;
  justify-content: center;
  background: #666;
  height: 40px;
`;
const InfoWrap = styled.div`
  display: flex;
`;
const InfoTab = styled.div`
  width: 20%;
  height: 600px;
  background: orange;
`;
const InfoBox = styled.div`
  width: 80%;
  background: #eee;
`;
