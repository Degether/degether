import React from "react";
import styled from "styled-components";

function MyPageInforContainer(props) {
  return (
    <MyPageInforContainerWrap>
      <MyPageInforCategory>{props.category}</MyPageInforCategory>
      <MyPageInforInput></MyPageInforInput>
    </MyPageInforContainerWrap>
  );
}

export default MyPageInforContainer;

const MyPageInforContainerWrap = styled.div`
  width: 500px;
  margin-left: 15px;
  margin-top: 10px;
`;
const MyPageInforCategory = styled.p``;
const MyPageInforInput = styled.input`
  display: flex;
  flex-direction: flex-start;
  box-sizing: border-box;
  border: 1px solid #efefef;
  border-radius: 10px;
  padding: 16px;
  width: 500px;
`;
