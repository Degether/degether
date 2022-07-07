import React, { useState } from "react";
import styled from "styled-components";

function ProjectProcess() {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <>
      <>
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
          {/* 프로세스 : 대기중 */}
          <ProcessContainer>
            <Process>대기중</Process>
            <ToggleBox>
              <button
                onClick={() => {
                  setModal1(!modal1);
                }}
              >
                토글
              </button>
              <p>와이어프레임 제작 [PC / 모바일 버전]</p>
              <p>담당자</p>
              <p>마감일 D-01</p>
            </ToggleBox>
            {modal1 === true ? (
              <ProcessModal>
                <ModalTitle>
                  <div>작성자</div>
                  <div>생성일</div>
                  <div>대기중</div>
                </ModalTitle>
                <ModalDetail>
                  상세내용
                  <button>편집</button>
                  <button>삭제</button>
                </ModalDetail>
              </ProcessModal>
            ) : null}
          </ProcessContainer>
          {/* 프로세스 : 진행중 */}
          <ProcessContainer>
            <Process>진행중</Process>
            <ToggleBox>
              <button
                onClick={() => {
                  setModal2(!modal2);
                }}
              >
                토글
              </button>
              <p>와이어프레임 제작 [PC / 모바일 버전]</p>
              <p>담당자</p>
              <p>마감일 D-01</p>
            </ToggleBox>
            {modal2 === true ? (
              <ProcessModal>
                <ModalTitle>
                  <div>작성자</div>
                  <div>생성일</div>
                  <div>대기중</div>
                </ModalTitle>
                <ModalDetail>
                  상세내용
                  <button>편집</button>
                  <button>삭제</button>
                </ModalDetail>
              </ProcessModal>
            ) : null}
          </ProcessContainer>
          {/* 프로세스 : 완료 */}
          <ProcessContainer>
            <Process>완료</Process>
            <ToggleBox>
              <button
                onClick={() => {
                  setModal3(!modal3);
                }}
              >
                토글
              </button>
              <p>와이어프레임 제작 [PC / 모바일 버전]</p>
              <p>담당자</p>
              <p>마감일 D-01</p>
            </ToggleBox>
            {modal3 === true ? (
              <ProcessModal>
                <ModalTitle>
                  <div>작성자</div>
                  <div>생성일</div>
                  <div>대기중</div>
                </ModalTitle>
                <ModalDetail>
                  상세내용
                  <button>편집</button>
                  <button>삭제</button>
                </ModalDetail>
              </ProcessModal>
            ) : null}
          </ProcessContainer>
        </MainContainer>
      </>
    </>
  );
}
export default ProjectProcess;

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
  display: flex;
`;
const ProcessContainer = styled.div`
  width: 500px;
  margin-left: 20px;
  margin-top: 60px;
`;
const Process = styled.div`
  background: #444;
`;
const ToggleBox = styled.div`
  display: flex;
  background: #eee;
`;
const ProcessModal = styled.div`
  height: 120px;
  background: yellow;
`;
const ModalTitle = styled.div`
  display: flex;
`;
const ModalDetail = styled.div`
  display: flex;
`;
