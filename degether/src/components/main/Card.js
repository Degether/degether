import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getProjectPage } from "../../redux/modules/ProjectSlice";

const Card = () => {
  const dispatch = useDispatch();
  const project = useSelector((state) => state.Project.list);
  const [ref, inView] = useInView();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  // 프로젝트 리스트 받아오기
  const getList = useCallback(async () => {
    setLoading(true);
    dispatch(getProjectPage(page));
    setLoading(false);
  }, [page]);

  // getItems 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getList();
  }, [getList]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (project.length && inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);
  console.log(page);
  return (
    <>
      {project.map((list, idx) => {
        return (
          <CardContainer key={idx}>
            <CardText>
              {list.projectName}
              <br />
              <HeadCount>
                모집인원
                <span>
                  [개발자 / {list.devCount}] [디자이너 / {list.deCount}]
                </span>
              </HeadCount>
            </CardText>
            <CardImg>
              <Dday>
                <span>D</span>- {list.dDay}
              </Dday>
              <img src={list.thumbnail} alt="프로젝트썸네일" />
              <Pin>
                <svg
                  width="7"
                  height="10"
                  viewBox="0 0 7 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7 5.435C7 5.2 6.83 5.01 6.6 4.945C5.965 4.77 5.5 4.19 5.5 3.5V1H6C6.275 1 6.5 0.775 6.5 0.5C6.5 0.225 6.275 0 6 0H1C0.725 0 0.5 0.225 0.5 0.5C0.5 0.775 0.725 1 1 1H1.5V3.5C1.5 4.19 1.035 4.77 0.4 4.945C0.17 5.01 0 5.2 0 5.435V5.5C0 5.775 0.225 6 0.5 6H2.99L3 9.5C3 9.775 3.225 10 3.5 10C3.775 10 4 9.775 4 9.5L3.99 6H6.5C6.775 6 7 5.775 7 5.5V5.435Z"
                    fill="#EB3223"
                  />
                </svg>
                <PinCount>{list.zzimCount}</PinCount>
              </Pin>
            </CardImg>
          </CardContainer>
        );
      })}
      <div ref={ref}>&#8203;</div>
    </>
  );
};

const CardContainer = styled.div`
  width: 214px;
  height: 366px;
  border-radius: 10px;
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
const HeadCount = styled.div`
  color: #2f4a3b;
  span {
    color: #b34301;
    margin-left: 3px;
  }
`;
const CardImg = styled.div`
  width: 218px;
  height: 300px;
  position: relative;
  border-radius: 10px;
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
  bottom: 0px;
  left: 5px;
  width: 50px;
  height: 25px;
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
