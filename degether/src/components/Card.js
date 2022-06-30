import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <>
      <CardContainer>
        <CardText>
          프로젝트 스케줄러 쿱(COUP)
          <br />
          <HeadCount>모집인원</HeadCount>{" "}
          <HeadcountValue>[개발자 / 2명]</HeadcountValue>
        </CardText>
        <CardImg>
          <Dday>
            <span>D</span>-10
          </Dday>
          <img src="img/Rectangle 22.png" />
          <Pin>
            <svg
              width="7"
              height="10"
              viewBox="0 0 7 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 5.435C7 5.2 6.83 5.01 6.6 4.945C5.965 4.77 5.5 4.19 5.5 3.5V1H6C6.275 1 6.5 0.775 6.5 0.5C6.5 0.225 6.275 0 6 0H1C0.725 0 0.5 0.225 0.5 0.5C0.5 0.775 0.725 1 1 1H1.5V3.5C1.5 4.19 1.035 4.77 0.4 4.945C0.17 5.01 0 5.2 0 5.435V5.5C0 5.775 0.225 6 0.5 6H2.99L3 9.5C3 9.775 3.225 10 3.5 10C3.775 10 4 9.775 4 9.5L3.99 6H6.5C6.775 6 7 5.775 7 5.5V5.435Z"
                fill="#EB3223"
              />
            </svg>
            <PinCount>30</PinCount>
          </Pin>
        </CardImg>
      </CardContainer>
    </>
  );
};

const CardContainer = styled.div`
  width: 218px;
  border-radius: 10px;
  margin-top: 215px;
  display: flex;
  flex-direction: column;
`;
const CardText = styled.div`
  width: 206px;
  font-weight: 700;
  font-size: 12px;
  line-height: 17px;
  margin: 16px 6px 16px 6px;
`;
const HeadCount = styled.span`
  color: #2f4a3b;
`;
const HeadcountValue = styled.span`
  color: #b34301;
`;
const CardImg = styled.div`
  width: 218px;
  position: relative;
  img {
    width: 218px;
    object-fit: cover;
  }
`;
const Dday = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  height: 25px;
  background: #09120e;
  border: 1px solid #000;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 12px;
  color: #efefef;
  span {
    color: #eb3223;
  }
`;
const Pin = styled.div`
  position: absolute;
  bottom: 5px;
  left: 5px;
  width: 50px;
  height: 25px;
  margin-bottom: 5px;
  background: #efefef;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const PinCount = styled.div`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 700;
`;
export default Card;
