import React from "react";
import PopupWrap from "../../components/PopupWrap";
import PopupInner from "../../components/PopupInner";
import InputWrap from "../../components/InputWrap";
import InputType1 from "../../components/InputType1";
import ButtonWrap2 from "../../components/ButtonWrap2";
import ButtonType1b from "../../components/ButtonType1b";
import ButtonType3 from "../../components/ButtonType3";
import TitleType1 from "../../components/TitleType1";
import InputP2 from "../../components/InputP2";

const PartyModalResign = () => {
  return (
    <PopupWrap className="popup-wrap container">
      <PopupInner className="container_wrapper">
        <TitleType1>탈퇴</TitleType1>
        <InputWrap className="input_wrapper">
          <InputP2>
            탈퇴를 원하시면 <span>파티 이름</span>을 입력하세요.
          </InputP2>
          <InputType1
            type="text"
            name="pt-name"
            id="pt-name"
            placeholder="파티 이름"
          />
        </InputWrap>
        <ButtonWrap2 className="btns_login">
          <ButtonType3 type="button">취소</ButtonType3>
          <ButtonType1b type="button">탈퇴</ButtonType1b>
        </ButtonWrap2>
      </PopupInner>
      <footer>
        <div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</div>
      </footer>
    </PopupWrap>
  );
};

export default PartyModalResign;
