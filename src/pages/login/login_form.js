import React from "react";
import PopupWrap from "../../components/PopupWrap";
import PopupInner from "../../components/PopupInner";
import InputWrap from "../../components/InputWrap";
import InputP from "../../components/InputP";
import InputType1 from "../../components/InputType1";
import ButtonWrap from "../../components/ButtonWrap";
import ButtonType1 from "../../components/ButtonType1";
import ButtonType2 from "../../components/ButtonType2";

const LoginForm = () => {
  return (
    <PopupWrap className="popup-wrap container">
      <PopupInner className="container_wrapper">
        <div className="login_title">
          <img src="images/logo.png" alt="메이플스토리_로고" />
        </div>
        <InputWrap className="input_wrapper">
          <InputP>이메일</InputP>
          <InputType1
            type="email"
            name="email"
            id="email"
            placeholder="이메일을 입력해주세요"
          />
          <InputP>비밀번호</InputP>
          <InputType1
            type="password"
            name="pw"
            id="pw"
            placeholder="비밀번호를 입력해주세요"
          />
        </InputWrap>
        <ButtonWrap className="btns_login">
          <ButtonType1 type="button">로그인</ButtonType1>
          <ButtonType2 type="button">회원가입</ButtonType2>
        </ButtonWrap>
      </PopupInner>
      <footer>
        <div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</div>
      </footer>
    </PopupWrap>
  );
};

export default LoginForm;
