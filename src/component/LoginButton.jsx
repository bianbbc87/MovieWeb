import React, { useState, useEffect } from "react";
import axios from "axios";
import { S } from "./LoginStye";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

export default function LoginButton() {
  const navigate = useNavigate();

  const [iderrorMsg, setidErrorMsg] = useState("");
  const [pwerrorMsg, setpwErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
  });

  // 이메일 검증 - 이메일 양식입니까?
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  // 비밀번호 검증 - 영문, 숫자, 특수문자 포함 8자 이상
  const validatePassword = (password) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return re.test(String(password));
  };

  // 입력값 변경 핸들러
  const handleUserInfoChange = (e, field) => {
    const newValue = e.target.value;
    setUserInfo({ ...userInfo, [field]: e.target.value });

    if (field === "id") {
      setidErrorMsg(
        validateEmail(newValue) ? "" : "올바른 이메일 주소를 입력해주세요."
      );
    }

    if (field === "pw") {
      setpwErrorMsg(
        validatePassword(newValue)
          ? ""
          : "비밀번호는 영문, 숫자, 특수문자를 포함한 8자 이상이어야 합니다."
      );
    }
  };

  const getData = async (e) => {
    e.preventDefault();
    // id, pw 중 값이 하나라도 없다면 경고
    if (!userInfo.id || !userInfo.pw) {
      alert("아이디와 비밀번호를 모두 입력해주세요.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:8000/user/login`,
        userInfo
      );

      if (response.status === 200) {
        console.log("성공 : ", response.status);
      }

      localStorage.setItem("token", response.data.result.AccessToken);
      setStatus(response.status);

      // getToken();

      // 통신 종료 후, 1.5초 후 로딩 상태 종료
      setTimeout(() => {
        setLoading(false);
        navigate("/");
      }, 1000);
    } catch (error) {
      console.log("error : ", error.response.status);

      if (error.response.status === 400) {
        console.log("body 값이 비어있음", error.response.status);
      } else if (error.response.status === 404) {
        console.log("id 혹은 pw가 틀림");
      } else {
        console.log("알 수 없는 에러");
      }
    } finally {
    }
  };

  return (
    <S.Container>
      {loading ? <Loading /> : <></>}
      <S.Title>
        이메일과 비밀번호를
        <br />
        입력해주세요
      </S.Title>

      <S.Lable top="205px">이메일 주소</S.Lable>
      <S.Input
        type="text"
        value={userInfo.id}
        top="230px"
        placeholder="이메일을 입력해주세요."
        onChange={(e) => handleUserInfoChange(e, "id")}
      />
      <S.ErrorMessage top="294px">{iderrorMsg}</S.ErrorMessage>

      <S.Lable top="325px">비밀번호</S.Lable>
      <S.Input
        type="password"
        value={userInfo.pw}
        top="350px"
        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
        onChange={(e) => handleUserInfoChange(e, "pw")}
      />
      <S.ErrorMessage top="414px">{pwerrorMsg}</S.ErrorMessage>
      <S.LoginBtn type="submit" onClick={getData}>
        확인
      </S.LoginBtn>
    </S.Container>
  );
}
