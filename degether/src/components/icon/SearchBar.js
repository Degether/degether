import React from "react";
import styled from "styled-components";

const SearchBar = () => {
  return (
    <>
      <BarContainer>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.3 0C2.83127 0 0 2.83127 0 6.3C0 9.76873 2.83127 12.6 6.3 12.6C7.8732 12.6 9.31051 12.0132 10.4168 11.0531L10.8 11.4363V12.6L16.2 18L18 16.2L12.6 10.8H11.4363L11.0531 10.4168C12.0132 9.31051 12.6 7.8732 12.6 6.3C12.6 2.83127 9.76873 0 6.3 0ZM6.3 1.8C8.79594 1.8 10.8 3.80406 10.8 6.3C10.8 8.79594 8.79594 10.8 6.3 10.8C3.80406 10.8 1.8 8.79594 1.8 6.3C1.8 3.80406 3.80406 1.8 6.3 1.8Z"
            fill="#6D8663"
          />
        </svg>
        <input type="text" placeholder="검색" />
      </BarContainer>
    </>
  );
};

const BarContainer = styled.div`
  width: 1175px;
  height: 54px;
  background: #fff;
  margin: 33px;
  border-radius: 54px;
  display: flex;
  align-items: center;
  svg {
    margin-left: 18px;
  }
  input {
    height: 22px;
    margin-left: 8px;
    font-weight: 400;
    font-size: 22px;
    color: #2f4a3b;
    border: none;
    :focus {
      outline: none;
    }
  }
  input::placeholder {
    font-weight: 400;
    font-size: 22px;
    color: #2f4a3b;
  }
`;
export default SearchBar;
