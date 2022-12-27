import React from "react";
import PopupWrap from "../../components/PopupWrap";
import PopupInner2 from "../../components/PopupInner2";
import InputWrap3 from "../../components/InputWrap3";
import InputType1 from "../../components/InputType1";
import InputType1Search2 from "../../components/InputType1Search2";
import InputType1Num from "../../components/InputType1Num";
import InputType1Inner2a from "../../components/InputType1Inner2a";
import InputType1InnerWrap from "../../components/InputType1InnerWrap";
import ButtonWrap2 from "../../components/ButtonWrap2";
import ButtonType1 from "../../components/ButtonType1";
import ButtonType3 from "../../components/ButtonType3";
import TitleType1 from "../../components/TitleType1";
import InputP from "../../components/InputP";
import MsgType1 from "../../components/MsgType1";

const ReturnModalCreate02 = () => {
  return (
    <PopupWrap className="popup-wrap container">
      <PopupInner2 className="container_wrapper">
        <TitleType1>
          정산 생성 <span>아이템 선택</span>
        </TitleType1>
        <InputWrap3 className="input_wrapper">
          <InputType1InnerWrap>
            <InputP>이름</InputP>
            <InputType1Search2
              type="text"
              name="item-name"
              id="item-name"
              placeholder="아이템 입력"
            />
            <ol>
              <li>아이템 1</li>
              <li>아이템 2</li>
              <li>아이템 3</li>
            </ol>
            <InputType1Inner2a>
              <img src="images/icon1.png" alt="검색" />
            </InputType1Inner2a>
          </InputType1InnerWrap>
          <InputType1InnerWrap>
            <InputP>수량</InputP>
            <InputType1Num
              type="number"
              name="num1"
              id="num1"
              placeholder={1}
              min={0}
            />
          </InputType1InnerWrap>
          <InputType1InnerWrap>
            <InputP>메소</InputP>
            <InputType1
              type="number"
              name="money1"
              id="money1"
              placeholder="100,000,000"
            />
          </InputType1InnerWrap>
        </InputWrap3>
        <MsgType1>
          총 메소
          <span>100,000,000</span>
        </MsgType1>
        <ButtonWrap2 className="btns_login">
          <ButtonType3 type="button">취소</ButtonType3>
          <ButtonType1 type="button">다음</ButtonType1>
        </ButtonWrap2>
      </PopupInner2>
      <footer>
        <div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</div>
      </footer>
    </PopupWrap>
  );
};

export default ReturnModalCreate02;
