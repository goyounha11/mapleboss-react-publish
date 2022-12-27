import React from "react";
import PopupWrap from "../../components/PopupWrap";
import PopupInner from "../../components/PopupInner";
import ButtonType1a from "../../components/ButtonType1a";
import MsgType1 from "../../components/MsgType1";
const LoginAlert = () => {
  return (
    <PopupWrap className="popup-wrap container">
      <PopupInner className="container_wrapper">
        <MsgType1>
          임시 비밀번호가 발송되었습니다.
          <br />
          이메일을 확인하세요.
        </MsgType1>
        <ButtonType1a type="button">확인</ButtonType1a>
      </PopupInner>
      <footer>
        <div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</div>
      </footer>
    </PopupWrap>
  );
};

export default LoginAlert;
