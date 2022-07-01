import React from "react";
import styled from "styled-components";
import MyPageInforContainer from "../components/myPage/MyPageInforContainer";

function MyPage() {
  // 우측 정보 변경란 프롭스
  const category = [
    "닉네임",
    "업무 파트",
    "깃허브 / 피그마 주소",
    "인물 소개 (사용 가능 툴 & 기타 이력 소개)",
  ];

  return (
    <MyPageContainer>
      <MyPageWrap>
        {/* 마이페이지 헤더 아래부분 공개 프로필 수정 텍스트 영역 */}
        <MyPageTop>공개 프로필 수정</MyPageTop>

        {/* 마이페이지 중앙 내용 수정 부분 */}
        <MyPageContentContainer>
          {/* 좌측 이미지 미리보기 */}
          <MyPageContentPreviewImg></MyPageContentPreviewImg>

          {/* 중앙 이미지 업로드 */}
          <MypageContentUploadImg>
            <MyPageContentUploadIcon src="./images/UploadIcon.png" />
            <p>
              프로필 사진 <br />
              업로드 & 변경
            </p>
          </MypageContentUploadImg>

          {/* 우측 정보 변경 하는 영역 */}
          <MyPageContentInfor>
            {category.map((l, index) => {
              return <MyPageInforContainer category={l} />;
            })}
          </MyPageContentInfor>
        </MyPageContentContainer>
      </MyPageWrap>

      {/* 재설정 저장 버튼 컨테이너 */}
      <ResetSaveBtnContainer>
        <ResetBtn>재설정</ResetBtn>
        <SaveBtn>저장</SaveBtn>
      </ResetSaveBtnContainer>
    </MyPageContainer>
  );
}

export default MyPage;

const MyPageContainer = styled.div`
  width: 1435px;
`;

const MyPageWrap = styled.div`
  width: 1371px;
  margin: 0 auto;
`;

const MyPageTop = styled.div`
  font-weight: 700;
  font-size: 22px;
  margin: 32px 0;
`;

const MyPageContentContainer = styled.div`
  width: 1371px;
  height: 431px;
  display: flex;
  border: 1px solid #efefef;
`;

const MyPageContentPreviewImg = styled.div`
  width: 431px;
  height: 100%;
  border: 1px solid #efefef;
`;
const MypageContentUploadImg = styled.div`
  width: 256px;
  height: 100%;
  border: 1px solid #efefef;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  color: #d6e5d0;
`;

const MyPageContentUploadIcon = styled.img`
  width: 56px;
  height: 68px;
  margin-bottom: 13px;
`;

const MyPageContentInfor = styled.div`
  width: 684px;
  height: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #efefef;
  gap: 20px;
`;

const ResetSaveBtnContainer = styled.div`
  width: 1371px;
  margin: 16px auto;
  display: flex;
  justify-content: flex-end;
`;

const ResetBtn = styled.button`
  padding: 16px 32px;
  margin-right: 10px;
  border: none;
  background-color: #09120e;
  border-radius: 10px;
  color: #f0f0f0;
`;

const SaveBtn = styled.button`
  padding: 16px 32px;
  background-color: #09120e;
  border: none;
  border-radius: 10px;
  color: #f0f0f0;
`;