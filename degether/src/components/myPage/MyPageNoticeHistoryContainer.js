import React from "react";
import styled from "styled-components";

function MyPageNoticeHistoryContainer(props) {
  return (
    <>
      <MyPageNoticeHistoryContainerWrap>
        {/* 상단 날짜 및 프로젝트명 */}
        <MyPageNoticeHistoryTop>
          <p>??-??-??</p>
          <p>Degether</p>
        </MyPageNoticeHistoryTop>

        {/* 하단 프로젝트 참여 환영 인사문 */}
        <MyPageNoticeHistoryText>
          HOUSE님 프로젝트 참여를 환영 합니다.
        </MyPageNoticeHistoryText>
      </MyPageNoticeHistoryContainerWrap>

      {/* 삭제 바로가기 버튼 */}
      <DeleteNavigateBtnContainer>
        <DeleteBtn>삭제</DeleteBtn>
        <NavigateBtn>바로가기</NavigateBtn>
      </DeleteNavigateBtnContainer>
    </>
  );
}

export default MyPageNoticeHistoryContainer;

const MyPageNoticeHistoryContainerWrap = styled.div`
  width: 890px;
  height: 95px;
  margin: 16px;
  padding-bottom: 20px;
  border-bottom: 1px solid #efefef;
`;
const MyPageNoticeHistoryTop = styled.div`
  height: 17px;
  display: flex;
`;

const MyPageNoticeHistoryText = styled.div`
  padding: 16px;
  border: 1px solid #efefef;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const DeleteNavigateBtnContainer = styled.div`
  width: 890px;
  margin: 16px auto;
  display: flex;
  justify-content: flex-end;
`;
const DeleteBtn = styled.button`
  width: 86px;
  height: 28px;
  border: none;
  color: white;
  background-color: #09120e;
  border-radius: 10px;
  margin-right: 10px;
`;
const NavigateBtn = styled.button`
  width: 86px;
  height: 28px;
  border: none;
  color: white;
  background-color: #09120e;
  border-radius: 10px;
`;
