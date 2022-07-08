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
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 0C4.47702 0 0 3.46732 0 7.74462C0 10.5288 1.89711 12.9684 4.74382 14.3336C4.53453 15.099 3.98643 17.1051 3.8766 17.5345C3.74139 18.0674 4.07605 18.0603 4.29519 17.9167C4.46718 17.8045 7.03569 16.0942 8.14381 15.3558C8.74527 15.4431 9.36538 15.4892 10 15.4892C15.523 15.4892 20 12.0214 20 7.74462C20 3.46782 15.523 0 10 0Z"
            fill="#391B1B"
          />
        </svg>
        카카오 로그인
      </KakaoLoginBtn>
      <NaverLoginBtn onClick={LoginNaver}>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.39 8.5399L4.71 0.399902H0V15.5999H4.94V7.4599L10.62 15.5999H15.33V0.399902H10.39V8.5399Z"
            fill="white"
          />
        </svg>
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
  margin-right: 24px;
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
  width: 421px;
  height: 422px;
  margin-top: 40px;
  img {
    width: 421px;
    height: 422px;
  }
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
  img {
    width: 18px;
    height: 18px;
  }
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
