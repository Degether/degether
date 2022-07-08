import React from "react";
import styled from "styled-components";
import HomeIcon, { NoticeIcon, Profile, LoginModalBtn } from "./icon/Icon";

import SearchBar from "./icon/SearchBar";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <div>
          <img src="img/logo.svg" />
        </div>
      </HeaderContainer>
      <MenuContainer>
        <MenuBar>
          <SearchBar />
          <IconContainer>
            <HomeIcon />
            {/* <NoticeIcon /> */}
            <Profile />
            <LoginModalBtn />
          </IconContainer>
        </MenuBar>
      </MenuContainer>
    </>
  );
};
const HeaderContainer = styled.div`
  width: 1888px;
  height: 62px;
  top: 0px;
  background: #2f4a3b;
  margin: 0 auto;
  div {
    width: 1888px;
    height: 62px;
    display: flex;
    align-items: center;
    margin: 0 auto;
  }
  img {
    margin-left: 33px;
  }
`;
const MenuContainer = styled.div`
  width: 1888px;
  height: 120px;
  margin: 0 auto;
  top: 62px;
  background: #09120e;
  display: flex;
  align-items: center;
  div {
    display: flex;
    align-items: center;
    gap: 16px;
  }
`;
const MenuBar = styled.div`
  width: 1888px;
  position: relative;
  margin: 0 auto;
`;
const IconContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 40px;
`;

export default Header;
