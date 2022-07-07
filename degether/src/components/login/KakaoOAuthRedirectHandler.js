import React from "react";
import axios from "axios";

function KakaoOAuthRedirectHandler() {
  let code = new URL(window.location.href).searchParams.get("code");

  axios
    .post(`http://3.39.253.203/user/kakao/${code}`, {
      headers: {},
    })
    .then((response) => {
      console.log(response.headers.authorization);
      localStorage.setItem("token", response.headers.authorization);
    });

  return <div></div>;
}

export default KakaoOAuthRedirectHandler;
