import React from "react";
import styled from "styled-components";

const HomeIcon = () => {
  return (
    <>
      <Home>
        <svg
          width="45"
          height="40"
          viewBox="0 0 45 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2869 37.5983V25.5899H26.8937V37.5983C26.8937 38.9192 27.9744 40 29.2953 40H36.5004C37.8213 40 38.9021 38.9192 38.9021 37.5983V20.7866H42.9849C44.0897 20.7866 44.6181 19.4176 43.7775 18.6971L23.6994 0.612429C22.7868 -0.204143 21.3938 -0.204143 20.4812 0.612429L0.403127 18.6971C-0.413445 19.4176 0.0909082 20.7866 1.19568 20.7866H5.27854V37.5983C5.27854 38.9192 6.3593 40 7.68022 40H14.8853C16.2062 40 17.2869 38.9192 17.2869 37.5983Z"
            fill="white"
          />
        </svg>
      </Home>
    </>
  );
};
const NoticeIcon = () => {
  return (
    <>
      <Notice>
        <svg
          width="32"
          height="40"
          viewBox="0 0 32 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.7533 40C18.0097 40 19.8559 38.1538 19.8559 35.8974H11.6507C11.6507 38.1538 13.4764 40 15.7533 40ZM28.061 27.6923V17.4359C28.061 11.1385 24.6969 5.86667 18.8302 4.47179V3.07692C18.8302 1.37436 17.4559 0 15.7533 0C14.0507 0 12.6764 1.37436 12.6764 3.07692V4.47179C6.78919 5.86667 3.4456 11.1179 3.4456 17.4359V27.6923L0.799443 30.3385C-0.492865 31.6308 0.409699 33.8462 2.23534 33.8462H29.2507C31.0764 33.8462 31.9994 31.6308 30.7071 30.3385L28.061 27.6923Z"
            fill="white"
          />
        </svg>
      </Notice>
    </>
  );
};
const Profile = () => {
  return (
    <>
      <ProfileImg></ProfileImg>
    </>
  );
};

const Home = styled.div`
  width: 44px;
  height: 40px;
  :hover {
    cursor: pointer;
  }
`;
const Notice = styled.div`
  :hover {
    cursor: pointer;
  }
`;
const ProfileImg = styled.div`
  width: 40px;
  height: 40px;
  background: #444;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;
export default HomeIcon;
export { NoticeIcon, Profile };
