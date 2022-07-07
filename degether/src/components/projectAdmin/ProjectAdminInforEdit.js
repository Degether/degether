import React from "react";
import styled from "styled-components";

function ProjectAdminInforEdit() {
  const projectGenreList = [
    { id: 0, name: "웹" },
    { id: 1, name: "앱" },
    { id: 2, name: "게임" },
    { id: 3, name: "메타버스" },
    { id: 4, name: "데이터베이스" },
    { id: 5, name: "임베디드" },
  ];

  const projectStatus = [
    { id: 0, name: "기획" },
    { id: 1, name: "개발" },
    { id: 2, name: "배포" },
    { id: 3, name: "유지보수" },
  ];

  const backendLanguageList = [
    { id: 0, name: "Kotlin" },
    { id: 1, name: "CSS" },
    { id: 2, name: "TypeScript" },
    { id: 3, name: "Java" },
    { id: 4, name: "Shell" },
    { id: 5, name: "Javascript" },
    { id: 6, name: "Python" },
    { id: 7, name: "HTML" },
  ];

  return (
    <ProjectAdminContainer>
      <InforWrap>
        <InforCategory>프로젝트 명칭</InforCategory>

        <ProjectTitleInforBox />
      </InforWrap>

      <InforWrap>
        <ProjectGenre>
          <InforCategory>프로젝트 장르</InforCategory>
          <ProjectGenreListBox>
            {projectGenreList.map((genre, index) => {
              return (
                <label>
                  <input type="checkbox" value={genre.name} key={genre.name} />
                  {genre.name}
                </label>
              );
            })}
          </ProjectGenreListBox>
        </ProjectGenre>
        <ProjectStatus>
          <InforCategory>프로젝트 현황</InforCategory>
          <ProjectStatusListBox>
            {projectStatus.map((status, index) => {
              return (
                <label>
                  <input
                    type="checkbox"
                    value={status.name}
                    key={status.name}
                  />
                  {status.name}
                </label>
              );
            })}
          </ProjectStatusListBox>
        </ProjectStatus>
      </InforWrap>

      <InforWrap>
        <InforCategory>백엔드 개발언어</InforCategory>
        <ProjectBackendLanguage>
          {backendLanguageList.map((language, index) => {
            return (
              <label>
                <input
                  type="checkbox"
                  value={language.name}
                  key={language.name}
                />
                {language.name}
              </label>
            );
          })}
        </ProjectBackendLanguage>
      </InforWrap>
      <ProjectExplanation>
        <InforCategory>프로젝트 설명</InforCategory>
        <ProjectExplanationBox />
      </ProjectExplanation>
    </ProjectAdminContainer>
  );
}

export default ProjectAdminInforEdit;

const ProjectAdminContainer = styled.div`
  width: 947px;
  height: 409px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const InforWrap = styled.div`
  width: 843px;
  height: 45px;
  display: flex;
`;

const InforCategory = styled.p`
  width: 80px;
  height: 17px;
  font-size: 12px;
  margin-right: 20px;
`;

const ProjectTitleInforBox = styled.div`
  width: 754px;
  height: 45px;
  border: 1px solid black;
  border-radius: 10px;
`;

const ProjectGenre = styled.div`
  width: 500px;
  height: 45px;
  display: flex;
`;

const ProjectGenreListBox = styled.div`
  width: 411px;
  height: 45px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProjectStatus = styled.div`
  width: 320px;
  height: 45px;
  display: flex;
`;

const ProjectStatusListBox = styled.div`
  width: 268px;
  height: 45px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ProjectBackendLanguage = styled.div`
  width: 754px;
  height: 39px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
`;

const ProjectExplanation = styled.div`
  width: 843px;
  height: 161px;
  display: flex;
`;

const ProjectExplanationBox = styled.div`
  width: 754px;
  height: 161px;
  border: 1px solid black;
  border-radius: 10px;
`;
