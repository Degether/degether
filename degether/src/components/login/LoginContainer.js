import React from "react";
import styled from "styled-components";

function LoginContainer() {
  return (
    <LoginContainerWrap>
      <LoginTitle>LOGIN</LoginTitle>
      <LoginBackgroundImage>
        <img src="./images/Degether.png" />
      </LoginBackgroundImage>
      <GoogleLoginBtn></GoogleLoginBtn>
      <KakaoLoginBtn>카카로 로그인</KakaoLoginBtn>
      <NaverLoginBtn src="./images/btnG_완성형.png" />
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
  margin-top: 182px;
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
  height: 76px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: white;
`;

const NaverLoginBtn = styled.img`
  width: 421px;
  height: 76px;
  border-radius: 10px;
  margin-top: 20px;
  object-fit: cover;
`;
const KakaoLoginBtn = styled.button`
  width: 421px;
  height: 76px;
  border-radius: 10px;
  margin-top: 20px;
`;
