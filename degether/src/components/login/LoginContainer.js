import React from "react";
import styled from "styled-components";
import { GOOGLE_AUTH_URL } from "./OAuth";
import { KAKAO_AUTH_URL } from "./OAuth";
import { NAVER_AUTH_URL } from "./OAuth";

function LoginContainer() {
  const LoginGoogle = () => (window.location.href = GOOGLE_AUTH_URL);
  const LoginKakao = () => (window.location.href = KAKAO_AUTH_URL);
  const LoginNaver = () => (window.location.href = NAVER_AUTH_URL);
  return (
    <LoginContainerWrap>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginBackgroundImage>
        <img src="./images/Degether.png" />
      </LoginBackgroundImage>
      <GoogleLoginBtn onClick={LoginGoogle}>
        <img src="./images/GoogleIcon.png" />
        GOOGLE 계정으로 로그인
      </GoogleLoginBtn>
      <KakaoLoginBtn onClick={LoginKakao}>
        <img src="./images/KakaoIcon.png" />
        카카로 로그인
      </KakaoLoginBtn>
      <NaverLoginBtn onClick={LoginNaver}>
        <img src="./images/NaverIcon.png" />
        네이버 로그인
      </NaverLoginBtn>
    </LoginContainerWrap>
  );
}

export default LoginContainer;

const LoginContainerWrap = styled.div`
  box-sizing: border-box;
  border-top: 0.5px solid #efefef;
  width: 453px;
  height: 898px;
  background-color: #09120e;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 16px;
`;

const LoginTitle = styled.div`
  width: 125px;
  height: 22px;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  color: #ffffff;
  margin-top: 69px;
`;

const LoginBackgroundImage = styled.div`
  width: 421;
  height: 422px;
  margin-top: 40px;
`;

const GoogleLoginBtn = styled.div`
  width: 421px;
  height: 54px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const KakaoLoginBtn = styled.div`
  width: 421px;
  height: 54px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #fee500;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const NaverLoginBtn = styled.div`
  width: 421px;
  height: 54px;
  margin-top: 20px;
  border-radius: 10px;
  background-color: #03c75a;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  color: #ffffff;

  &:hover {
    cursor: pointer;
  }
`;
