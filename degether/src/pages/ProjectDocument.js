import React from "react";
import styled from "styled-components";

// 문서 작성 toast-ui import
import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";
import colorSyntax from "@toast-ui/editor-plugin-color-syntax";
import "prismjs/themes/prism.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import codeSyntaxHighlight from "@toast-ui/editor-plugin-code-syntax-highlight";
import Prism from "prismjs";

function ProjectDocument() {
  return (
    <>
      <ProjectHeader>
        <div>프로젝트 게시판</div>
        <div>문서</div>
        <div>진행현황</div>
        <div>프로젝트 관리</div>
      </ProjectHeader>
      <ProjectDocumentContainer>
        <FolderListBar>
          <FolderBox>폴더</FolderBox>
          <DocumentBox>문서</DocumentBox>
        </FolderListBar>
        <DocumentContainer>
          <DocumentUploadLocation>문서 업로드 장소</DocumentUploadLocation>
          <DocumentTitle>문서제목</DocumentTitle>
          <Editor
            initialValue="내용을 입력해주세요!"
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            plugins={[
              colorSyntax,
              [codeSyntaxHighlight, { highlighter: Prism }],
            ]}
          />
        </DocumentContainer>
      </ProjectDocumentContainer>
    </>
  );
}

export default ProjectDocument;

const ProjectDocumentContainer = styled.div`
  width: 1600px;
  display: flex;
`;

const ProjectHeader = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
`;

const FolderListBar = styled.div`
  width: 300px;
  height: 600px;
  background-color: gray;
`;

const FolderBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: gray;
  border-bottom: 1px solid white;
`;

const DocumentContainer = styled.div`
  width: 100%;
  height: 600px;
`;

const DocumentUploadLocation = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
`;

const DocumentBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: gray;
  border-bottom: 1px solid white;
`;

const DocumentTitle = styled.div`
  width: 100%;
  height: 50px;
`;
