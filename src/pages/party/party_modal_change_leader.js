import React from "react";
import PopupWrap from "../../components/PopupWrap";
import PopupInner from "../../components/PopupInner";
import InputWrap from "../../components/InputWrap";
import InputP from "../../components/InputP";
import SelectType1 from "../../components/SelectType1";
import ButtonWrap2 from "../../components/ButtonWrap2";
import ButtonType1 from "../../components/ButtonType1";
import ButtonType3 from "../../components/ButtonType3";
import TitleType1 from "../../components/TitleType1";

const PartyModalChangeLeader = () => {
  return (
    <PopupWrap className="popup-wrap container">
      <PopupInner className="container_wrapper">
        <TitleType1>리더 변경</TitleType1>
        <InputWrap className="input_wrapper">
          <InputP>리더</InputP>
          <SelectType1
            name="pt-name"
            id="pt-name"
            placeholder="파티 이름이 노출될 자리입니다."
          >
            <option value={"쩌로"}>쩌로</option>
            <option value={"2"}>2</option>
            <option value={"3"}>3</option>
          </SelectType1>
        </InputWrap>
        <ButtonWrap2 className="btns_login">
          <ButtonType3 type="button">취소</ButtonType3>
          <ButtonType1 type="button">변경</ButtonType1>
        </ButtonWrap2>
      </PopupInner>
      <footer>
        <div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</div>
      </footer>
    </PopupWrap>
  );
};

export default PartyModalChangeLeader;
