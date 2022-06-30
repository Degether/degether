import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
      <MenuBar></MenuBar>
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
`;

export default Header;
