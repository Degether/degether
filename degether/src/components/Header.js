import React from "react";
import styled from "styled-components";
import HomeIcon, { NoticeIcon, Profile } from "./icon/Icon";

import SearchBar from "./icon/SearchBar";

const Header = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <MenuBar>
        <SearchBar />
        <IconContainer>
          <HomeIcon />
          <NoticeIcon />
          <Profile />
        </IconContainer>
      </MenuBar>
    </>
  );
};
const HeaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 62px;
  left: 0px;
  top: 0px;
  background: #2f4a3b;
`;
const MenuBar = styled.div`
  position: absolute;
  width: 100%;
  height: 120px;
  left: 0px;
  top: 62px;
  background: #09120e;
  display: flex;
  align-items: center;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
`;
const IconContainer = styled.div`
  position: absolute;
  right: 17px;
  top: 40px;
`;

export default Header;
