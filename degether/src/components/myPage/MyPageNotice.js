import React from "react";
import styled from "styled-components";
import MyPageNoticeHistoryContainer from "./MyPageNoticeHistoryContainer";

function MyPageNotice() {
  return (
    <MyPageNoticeWrap>
      {/* 마이페이지 헤더 아래부분 알림 텍스트 영역 */}

      <MyPageNoticeTop>알림</MyPageNoticeTop>
      {/* 편지 모얌 */}

      {/* 마이페이지 알림 내용 부분 감싸는 컨테이너 */}
      <MyPageNoticeContentContainer>
        {/* 좌측 편지 이미지 부분 */}
        <MyPageNoticeLetter>
          <MyPageNoticeLetterImg src="./images/Letter.png" alt="" />
        </MyPageNoticeLetter>

        {/* 오른쪽 환영 인사문 영역 */}
        <MyPageNoticeHistory>
          <MyPageNoticeHistoryContainer />
          <MyPageNoticeHistoryContainer />
          <MyPageNoticeHistoryContainer />
          <MyPageNoticeHistoryContainer />
          <MyPageNoticeHistoryContainer />
        </MyPageNoticeHistory>
      </MyPageNoticeContentContainer>
    </MyPageNoticeWrap>
  );
}

export default MyPageNotice;

const MyPageNoticeWrap = styled.div`
  width: 1371px;
  margin: 0 16px;
`;

const MyPageNoticeTop = styled.div`
  font-weight: 700;
  font-size: 22px;
  margin: 32px 0;
`;

const MyPageNoticeContentContainer = styled.div`
  width: 100%;
  height: 431px;
  display: flex;
  border: 1px solid #efefef;
`;

const MyPageNoticeLetter = styled.div`
  width: 431px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
`;

const MyPageNoticeLetterImg = styled.img`
  width: 80px;
  height: 64px;
`;

const MyPageNoticeHistory = styled.div`
  width: 940px;
  height: 100%;
  border: 1px solid #efefef;
  overflow-y: auto;
`;
