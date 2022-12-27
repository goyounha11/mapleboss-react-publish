import React from "react";
import PopupWrap from "../../components/PopupWrap";
import PopupInner from "../../components/PopupInner";
import InputWrap from "../../components/InputWrap";
import InputP from "../../components/InputP";
import InputType1 from "../../components/InputType1";
import ButtonWrap2 from "../../components/ButtonWrap2";
import ButtonType1 from "../../components/ButtonType1";
import ButtonType3 from "../../components/ButtonType3";
import DlType1 from "../../components/DlType1";
import TitleType1 from "../../components/TitleType1";

const PartyModalCreate = () => {
  return (
    <PopupWrap className="popup-wrap container">
      <PopupInner className="container_wrapper">
        <TitleType1>파티 생성</TitleType1>
        <InputWrap className="input_wrapper">
          <InputP>파티 이름</InputP>
          <InputType1
            type="text"
            name="pt-name"
            id="pt-name"
            placeholder="파티 이름을 입력해주세요"
          />
          <InputP>파티 설명</InputP>
          <InputType1
            type="text"
            name="pt-desc"
            id="pt-desc"
            placeholder="파티 설명을 입력해주세요"
          />
        </InputWrap>
        <DlType1>
          <dt>파티장</dt>
          <dd>쩌로</dd>
        </DlType1>
        <ButtonWrap2 className="btns_login">
          <ButtonType3 type="button">취소</ButtonType3>
          <ButtonType1 type="button">생성</ButtonType1>
        </ButtonWrap2>
      </PopupInner>
      <footer>
        <div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</div>
      </footer>
    </PopupWrap>
  );
};

export default PartyModalCreate;
