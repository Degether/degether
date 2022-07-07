import React from "react";
import styled from "styled-components";

function ProjectAdminStatus() {
  return (
    <ProjectAdminStatusContainer>
      <SetShowAndDateBox>
        <SetShowBox>
          갤러리 전시 설정
          <SetOnOffBox>
            <label>
              ON
              <input type="checkbox" value="on" />
            </label>
            <label>
              OFF
              <input type="checkbox" value="on" />
            </label>
          </SetOnOffBox>
        </SetShowBox>
        <SetDateBox>
          모집 마감 설정
          <SetDateInput type="date" />
        </SetDateBox>
      </SetShowAndDateBox>
      <ReferencesStatusBox>
        <ReferencesText>참고자료 업로드 현황</ReferencesText>
        <FileInputWrap>
          <FileBox>
            <FileInput />
            <EditImage src="./images/EditIcon.png" />
          </FileBox>
          <FileBox>
            <FileInput />
            <EditImage src="./images/EditIcon.png" />
          </FileBox>
        </FileInputWrap>
      </ReferencesStatusBox>
      <DepartmentStatus>
        <DepartmentNum>
          프론트
          <NumBox>2명</NumBox>
        </DepartmentNum>
        <DepartmentNum>
          백엔드
          <NumBox>1명</NumBox>
        </DepartmentNum>
        <DepartmentNum>
          디자이너
          <NumBox>1명</NumBox>
        </DepartmentNum>
      </DepartmentStatus>
    </ProjectAdminStatusContainer>
  );
}

export default ProjectAdminStatus;

const ProjectAdminStatusContainer = styled.div`
  width: 656px;
  height: 993px;
  border: 1px solid black;
`;

const SetShowAndDateBox = styled.div`
  width: 656px;
  height: 70px;
  display: flex;
  border: 1px solid black;
`;

const SetShowBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SetOnOffBox = styled.div`
  width: 157px;
  height: 36px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SetDateBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SetDateInput = styled.input`
  width: 157px;
  height: 36px;
  border: 1px solid black;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const ReferencesStatusBox = styled.div`
  width: 656px;
  height: 97px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const ReferencesText = styled.p`
  color: #d6e5d0;
`;

const FileBox = styled.div`
  width: 407px;
  height: 36px;
  display: flex;
`;

const FileInputWrap = styled.div`
  width: 407px;
`;

const FileInput = styled.div`
  width: 367px;
  height: 36px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
`;

const EditImage = styled.img`
  width: 19px;
  height: 19px;
`;

const DepartmentStatus = styled.div`
  width: 656px;
  height: 124px;
  border: 1px solid black;
  display: flex;
  justify-content: space-around;
`;

const DepartmentNum = styled.div`
  width: 164px;
  height: 45px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const NumBox = styled.div`
  width: 110px;
  height: 45px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
