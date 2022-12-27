import React from "react";
import PopupWrap from "../../components/PopupWrap";
import PopupInner from "../../components/PopupInner";
import InputWrap from "../../components/InputWrap";
import InputP from "../../components/InputP";
import InputType1Inner1 from "../../components/InputType1Inner1";
import InputType1Inner2 from "../../components/InputType1Inner2";
import InputType1InnerWrap from "../../components/InputType1InnerWrap";
import ButtonType3 from "../../components/ButtonType3";
import InputType1 from "../../components/InputType1";

const emailauthentication = () => {
  return (
    <PopupWrap className="popup-wrap container">
      <PopupInner className="container_wrapper">
        <div className="login_title">
          <img src="images/logo.png" alt="메이플스토리_로고" />
        </div>
        <InputWrap className="input_wrapper">
          <InputP>이메일</InputP>
          <InputType1InnerWrap>
            <InputType1
              type="email"
              name="email"
              id="email"
              placeholder="이메일을 입력해주세요"
            />
            <InputType1Inner1>보내기</InputType1Inner1>
          </InputType1InnerWrap>
          <InputP>비밀번호</InputP>
          <InputType1InnerWrap>
            <InputType1
              type="text"
              name="code"
              id="code"
              placeholder="인증코드를 입력해주세요"
            />
            <InputType1Inner2>00:00</InputType1Inner2>
          </InputType1InnerWrap>
        </InputWrap>
        <ButtonType3 type="button">취소</ButtonType3>
      </PopupInner>
      <footer>
        <div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</div>
      </footer>
    </PopupWrap>
  );
};

export default emailauthentication;
