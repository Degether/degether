import React from "react";
import styled from "styled-components";

function ProjectMemberRecruitInfor() {
  const memberCount = [
    "프론트 개발자 1/2",
    "백엔드 개발자 1/2",
    "디자이너 1/2",
  ];

  return (
    <ProjectMemberRecruitInforWrap>
      {/* 모집 마감 기간 */}
      <ProjectRecruitingPeriod>
        <p>모집 마감 기간</p>
        <ProjectRecruitingPeriodDate>
          <p>날짜 데이터 받아오기</p>
        </ProjectRecruitingPeriodDate>
      </ProjectRecruitingPeriod>

      {/* 모집 영역 */}

      <ProjectRecruitingPositionWrap>
        <ProjectRecruitingPositionBox>
          모집 영역 1
          <ProjectRecruitingPositionCount>
            테스트
          </ProjectRecruitingPositionCount>
        </ProjectRecruitingPositionBox>

        <ProjectRecruitingPositionBox>
          모집 영역 1
          <ProjectRecruitingPositionCount>
            테스트
          </ProjectRecruitingPositionCount>
        </ProjectRecruitingPositionBox>

        <ProjectRecruitingPositionBox>
          모집 영역 1
          <ProjectRecruitingPositionCount>
            테스트
          </ProjectRecruitingPositionCount>
        </ProjectRecruitingPositionBox>
      </ProjectRecruitingPositionWrap>
    </ProjectMemberRecruitInforWrap>
  );
}

export default ProjectMemberRecruitInfor;

const ProjectMemberRecruitInforWrap = styled.div`
  width: 997px;
  height: 30%;
  background-color: white;
  display: flex;
  flex-direction: column;
`;

const ProjectRecruitingPeriod = styled.div`
  width: 250px;
  height: 45px;
  display: flex;
`;

const ProjectRecruitingPeriodDate = styled.div`
  width: 161px;
  height: 45px;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
`;

const ProjectRecruitingPositionWrap = styled.div`
  width: 937px;
  height: 45px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const ProjectRecruitingPositionBox = styled.div`
  width: 299px;
  height: 45px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
`;

const ProjectRecruitingPositionCount = styled.div`
  width: 110px;
  height: 45px;
  border-radius: 10px;
`;
