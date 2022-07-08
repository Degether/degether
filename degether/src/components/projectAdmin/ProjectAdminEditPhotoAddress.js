import React, { useCallback } from "react";
import styled from "styled-components";
import { useDropzone } from "react-dropzone";

function ProjectAdminEditPhotoAddress() {
  // 이미지 드래그 앤 드랍 업로드

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <ProjectAdminEditPhotoAddressContainer>
      <ImagePreviewBox>
        <SharedTextStyle>썸내일</SharedTextStyle>
        <SharedTextStyle>미리보기</SharedTextStyle>
      </ImagePreviewBox>
      <ImageUploadBox {...getRootProps()}>
        <UploadIcon src="./images/UploadIcon.png" />
        <SharedTextStyle>프로필 사진</SharedTextStyle>
        <SharedTextStyle>업로드 & 변경</SharedTextStyle>
      </ImageUploadBox>
      <AddressBox>
        <AddressWrap>
          노션 주소
          <AddressInputBox />
        </AddressWrap>
        <AddressWrap>
          깃허브 백엔드 주소
          <AddressInputBox />
        </AddressWrap>
        <AddressWrap>
          피그마 주소
          <AddressInputBox />
        </AddressWrap>
      </AddressBox>
    </ProjectAdminEditPhotoAddressContainer>
  );
}

export default ProjectAdminEditPhotoAddress;

const ProjectAdminEditPhotoAddressContainer = styled.div`
  width: 946px;
  height: 584px;
  border: 1px solid black;
  display: flex;
`;

const ImagePreviewBox = styled.div`
  width: 356px;
  height: 584px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageUploadBox = styled.div`
  width: 138px;
  height: 584px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const UploadIcon = styled.img`
  width: 56px;
  height: 68px;
  margin-bottom: 13px;
`;

const SharedTextStyle = styled.p`
  color: #d6e5d0;
`;

const AddressBox = styled.div`
  width: 453px;
  height: 584px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AddressWrap = styled.div`
  width: 391px;
  height: 68px;
  margin: 10px 0;
`;

const AddressInputBox = styled.div`
  width: 391px;
  height: 45px;
  border: 1px solid black;
  border-radius: 10px;
`;
