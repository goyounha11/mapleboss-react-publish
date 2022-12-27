import React from "react";
import PopupWrap from "../../components/PopupWrap";
import PopupInner2 from "../../components/PopupInner2";
import InputWrap2 from "../../components/InputWrap2";
import InputType1 from "../../components/InputType1";
import InputType1Inner2a from "../../components/InputType1Inner2a";
import InputType1InnerWrap from "../../components/InputType1InnerWrap";
import ButtonWrap2 from "../../components/ButtonWrap2";
import ButtonType1 from "../../components/ButtonType1";
import ButtonType3 from "../../components/ButtonType3";
import TitleType1 from "../../components/TitleType1";
import SelectType1 from "../../components/SelectType1";
import InputP from "../../components/InputP";
import MsgType1 from "../../components/MsgType1";

const ReturnModalCreate03 = () => {
  return (
    <PopupWrap className="popup-wrap container">
      <PopupInner2 className="container_wrapper">
        <TitleType1>
          정산 생성 <span>분배율 선택</span>
        </TitleType1>
        <InputWrap2 className="input_wrapper">
          <InputType1InnerWrap>
            <InputP>이름</InputP>
            <InputType1
              type="text"
              name="name1"
              id="name1"
              placeholder="이름1"
            />
          </InputType1InnerWrap>
          <InputType1InnerWrap>
            <InputP>분배율</InputP>
            <SelectType1>
              <option>1~100% 드롭다운</option>
              <option>타입1</option>
            </SelectType1>
          </InputType1InnerWrap>
          <InputType1InnerWrap>
            <InputType1
              type="text"
              name="name1"
              id="name1"
              placeholder="이름2"
            />
          </InputType1InnerWrap>
          <InputType1InnerWrap>
            <SelectType1>
              <option>1~100% 자동결정</option>
              <option>타입1</option>
            </SelectType1>
          </InputType1InnerWrap>
        </InputWrap2>
        <MsgType1>
          총 분배율
          <span>100</span>%
        </MsgType1>
        <ButtonWrap2 className="btns_login">
          <ButtonType3>취소</ButtonType3>
          <ButtonType1>생성</ButtonType1>
        </ButtonWrap2>
      </PopupInner2>
      <footer>
        <div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</div>
      </footer>
    </PopupWrap>
  );
};

export default ReturnModalCreate03;
