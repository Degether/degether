import React, { useRef, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addProject } from "../../redux/modules/ProjectSlice";

const ProjectCreateModal = () => {
  const dispatch = useDispatch();

  // 장르
  const [genre, setGenre] = useState("");
  const handleChange = (e) => {
    setGenre([e.target.value]);
  };

  // 프로젝트 썸네일 이미지
  const [imageSrc, setImageSrc] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const thumbnailUpload = (e) => {
    setThumbnail(e);
  };

  // 썸네일 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  // 프로젝트 소개 자료
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const handleUpload = (e) => {
    e.preventDefault();
    setFile1(e.target.files[0]);
    setFile2(e.target.files[1]);
    console.log(file1, file2);
  };

  // 프로젝트명
  const projectName = useRef();

  // 진행단계
  const [step, setStep] = useState("");
  const handleStep = (e) => {
    setStep(e.target.value);
  };

  // 프로젝트 설명
  const projectDescription = useRef();

  // 인원
  const feCount = useRef();
  const beCount = useRef();
  const deCount = useRef();

  // 링크
  const github = useRef();
  const figma = useRef();

  // 마감일
  const deadLine = useRef();
  let today = new Date();
  today = today.toISOString();
  today = today.substring(0, 10);

  function submit() {
    // 개발언어
    let result = [];
    const query = 'input[name="language"]:checked';
    const selectedEls = document.querySelectorAll(query);
    // 선택된 목록에서 value 찾기
    selectedEls.forEach((el) => {
      // result += el.value + " ";
      let a = result.push(el.value);
    });

    // 프로젝트 작성 리스트
    const projectRequestDto = {
      projectName: projectName.current.value,
      projectDescription: projectDescription.current.value,
      feCount: parseInt(feCount.current.value),
      beCount: parseInt(beCount.current.value),
      deCount: parseInt(deCount.current.value),
      github: github.current.value,
      figma: figma.current.value,
      deadLine: deadLine.current.value,
      language: result,
      genre: genre,
      step: step,
    };
    console.log(genre);
    console.log(projectRequestDto);
    const formData = new FormData();
    formData.append(
      "projectRequestDto",
      new Blob(
        [
          JSON.stringify(projectRequestDto, {
            contentType: "application/json",
          }),
        ],
        {
          type: "application/json",
        }
      )
    );
    formData.append("thumbnail", thumbnail);
    formData.append("infoFiles", file1);
    formData.append("infoFiles", file2);
    console.log(file1, file2);
    console.log(genre);
    dispatch(addProject(formData));
  }

  return (
    <>
      <Modal>
        <ModalContainer>
          <ModalTop>
            <ProjectName>
              프로젝트명 <input ref={projectName} maxLength="25" />
            </ProjectName>
            {/* 진행 단계(라디오버튼) : 기획, 개발, 배포, 유지보수 */}
            <Step>
              프로젝트 진행 단계
              <div>
                <input
                  type="radio"
                  value="기획"
                  name="step"
                  onChange={handleStep}
                />
                기획
              </div>
              <div>
                <input
                  type="radio"
                  value="개발"
                  name="step"
                  onChange={handleStep}
                />
                개발
              </div>
              <div>
                <input
                  type="radio"
                  value="배포"
                  name="step"
                  onChange={handleStep}
                />
                배포
              </div>
            </Step>
          </ModalTop>
          {/* 드롭다운 : 모바일 앱, 웹 프로그램, 게임, 메타버스 ,블록체인, 임베디드, 데이터베이스 */}
          <ModalTop>
            <DropDownContainer>
              <label>프로젝트 장르</label>
              <DropDown onChange={(e) => handleChange(e)}>
                <option>선택</option>
                <option value="모바일 앱">모바일 앱</option>
                <option value="웹 프로그램">웹 프로그램</option>
                <option value="게임">게임</option>
                <option value="메타버스">메타버스</option>
                <option value="블록체인">블록체인</option>
                <option value="임베디드">임베디드</option>
                <option value="데이터베이스">데이터베이스</option>
              </DropDown>
            </DropDownContainer>
            <InputLang>
              <label>개발 언어</label>
              <div>
                <input type="checkbox" value="Java" name="language" />
                Java
              </div>
              <div>
                <input type="checkbox" value="Shell" name="language" />
                Shell
              </div>
              <div>
                <input type="checkbox" value="JavaScript" name="language" />
                JavaScript
              </div>
              <div>
                <input type="checkbox" value="Python" name="language" />
                Python
              </div>
              <div>
                <input type="checkbox" value="HTML" name="language" />
                HTML
              </div>
              <div>
                <input type="checkbox" value="Kotlin" name="language" />
                Kotlin
              </div>
              <div>
                <input type="checkbox" value="CSS" name="language" />
                CSS
              </div>
              <div>
                <input type="checkbox" value="TypeScript" name="language" />
                TypeScript
              </div>
            </InputLang>
          </ModalTop>
          <ModalTop>
            <div>프로젝트 설명</div>
            <Description ref={projectDescription} maxLength="100"></Description>
          </ModalTop>
          <ModalBottom>
            <ModalLeft>
              이미지 업로드 영역
              <input
                type="file"
                onChange={(e) => {
                  encodeFileToBase64(e.target.files[0]);
                  thumbnailUpload(e.target.files[0]);
                }}
              />
              <Preview>
                {imageSrc && <img src={imageSrc} alt="preview-image" />}
              </Preview>
            </ModalLeft>
            <ModalRight>
              <p>프로젝트 자료 링크</p>
              <div>
                깃허브 주소 <input ref={github} />
              </div>
              <div>
                피그마 주소 <input ref={figma} />
              </div>
              <div>
                모집 마감일 <input type="date" ref={deadLine} min={today} />
              </div>
              <InputHeadcount>
                <div>
                  프론트엔드 <input type="number" ref={feCount} min="0" />
                </div>
                <div>
                  백엔드 <input type="number" ref={beCount} min="0" />
                </div>
                <div>
                  디자이너 <input type="number" ref={deCount} min="0" />
                </div>
              </InputHeadcount>
              <div>
                프로젝트 소개 자료{" "}
                <input type="file" onChange={handleUpload} multiple />
              </div>
              <button onClick={submit}>등록</button>
              <button>취소</button>
            </ModalRight>
          </ModalBottom>
        </ModalContainer>
      </Modal>
    </>
  );
};
export default ProjectCreateModal;
const Modal = styled.div`
  width: 1500px;
  height: 900px;
  background: #444;
  z-index: 1;
  position: absolute;
  margin: 300px auto;
`;
const ModalContainer = styled.div`
  width: 1400px;
  height: 800px;
  margin: 50px auto;
  background: white;
`;
const ModalTop = styled.div`
  width: 1360px;
  /* background: yellow; */
  display: flex;
  padding: 20px;
  align-items: center;
  div {
    margin-left: 40px;
  }
`;
const ProjectName = styled.div`
  input {
    width: 700px;
  }
`;
const Step = styled.div`
  display: flex;
`;
const DropDownContainer = styled.div`
  display: flex;
  label {
    width: 100px;
  }
`;
const DropDown = styled.select`
  width: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #444;
  background: #fff;
  margin-left: 40px;
`;
const InputLang = styled.div`
  display: flex;
  padding-left: 80px;
`;
const Description = styled.textarea`
  width: 1100px;
  height: 100px;
  resize: none;
`;
const ModalBottom = styled.div`
  display: flex;
`;
const ModalLeft = styled.div`
  width: 750px;
  /* background: yellow; */
`;
const Preview = styled.div`
  width: 218px;
  height: 300px;
  border: 1px solid #444;
  img {
    width: 218px;
    height: 300px;
  }
`;
const ModalRight = styled.div`
  width: 750px;
  /* background: yellow; */
  div {
    padding: 10px;
  }
`;
const InputHeadcount = styled.div`
  display: flex;
`;
