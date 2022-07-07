import React from "react";
import styled from "styled-components";
import ProjectAdminInforEdit from "../components/projectAdmin/ProjectAdminInforEdit";
import ProjectAdminEditPhotoAddress from "../components/projectAdmin/ProjectAdminEditPhotoAddress";
import ProjectAdminStatus from "../components/projectAdmin/ProjectAdminStatus";

function ProjectAdmin() {
  return (
    <ProjectAdminContainer>
      <ProjectAdminLeftContainer>
        <ProjectAdminInforEdit />
        <ProjectAdminEditPhotoAddress />
      </ProjectAdminLeftContainer>
      <ProjectAdminStatus />
    </ProjectAdminContainer>
  );
}

export default ProjectAdmin;

const ProjectAdminContainer = styled.div`
  width: 1920px;
  height: 1080px;
  margin-top: 200px;
  display: flex;
`;

const ProjectAdminLeftContainer = styled.div`
  width: 947px;
  height: 993px;
`;
