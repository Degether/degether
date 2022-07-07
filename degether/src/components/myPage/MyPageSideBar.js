import React from "react";
import styled from "styled-components";
import { useState } from "react";

function MyPageSideBar() {
  const [page, setPage] = useState(true);

  // 오른쪽 사이드바 카테고리 변경시 선택한 페이지 불러오기 위한 상태값 관리
  const ChangeView = () => {
    setPage(!page);
  };

  return (
    //   오른쪽 사이드바 카테고리 선택 영역
    <MyPageSideBarContainer>
      <MyPageProfileSelected onClick={ChangeView} page={page}>
        공개 프로필
      </MyPageProfileSelected>
      <MyPageNoticeSelected onClick={ChangeView} page={page}>
        알림
      </MyPageNoticeSelected>
    </MyPageSideBarContainer>
  );
}

export default MyPageSideBar;

const MyPageSideBarContainer = styled.div`
  width: 453px;
  background-color: #efefef;
  text-align: right;
`;

const MyPageProfileSelected = styled.p`
  text-decoration: ${(props) => (props.page ? "underline" : "none")};
`;
const MyPageNoticeSelected = styled.p`
  text-decoration: ${(props) => (props.page ? "none" : "underline")};
`;
