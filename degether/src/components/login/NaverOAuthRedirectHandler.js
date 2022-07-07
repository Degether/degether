import React from "react";
import axios from "axios";

function NaverOAuthRedirectHandler() {
  let code = new URL(window.location.href).searchParams.get("code");

  console.log(code, process.env.REACT_APP_NAVER_STATE);
  axios
    .post(
      `http://3.39.253.203/user/naver/${code}/${process.env.REACT_APP_NAVER_STATE}`,
      {
        headers: {},
      }
    )
    .then((response) => {
      console.log(response.headers.authorization);
      localStorage.setItem("token", response.headers.authorization);
    });

  return <div></div>;
}

export default NaverOAuthRedirectHandler;
