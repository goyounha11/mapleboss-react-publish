import React from "react";
import PopupWrap from "../../components/PopupWrap";
import PopupInner2 from "../../components/PopupInner2";
import InputWrap from "../../components/InputWrap";
import InputType1 from "../../components/InputType1";
import ButtonWrap2 from "../../components/ButtonWrap2";
import ButtonType1b from "../../components/ButtonType1b";
import ButtonType3 from "../../components/ButtonType3";
import TitleType1 from "../../components/TitleType1";
import InputP2 from "../../components/InputP2";

const ReturnModalDelete = () => {
  return (
    <PopupWrap className="popup-wrap container">
      <PopupInner2 className="container_wrapper">
        <TitleType1>정산 삭제</TitleType1>
        <InputWrap className="input_wrapper">
          <InputP2>
            정산을 삭제하시려면 <span>파티 이름/정산 삭제</span>를 입력하세요.
          </InputP2>
          <InputType1
            type="text"
            name="pt-name"
            id="pt-name"
            placeholder="파티 이름/정산 삭제"
          />
        </InputWrap>
        <ButtonWrap2 className="btns_login">
          <ButtonType3 type="button">취소</ButtonType3>
          <ButtonType1b type="button">삭제</ButtonType1b>
        </ButtonWrap2>
      </PopupInner2>
      <footer>
        <div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</div>
      </footer>
    </PopupWrap>
  );
};

export default ReturnModalDelete;
