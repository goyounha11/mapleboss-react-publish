import React from "react";
import PopupWrap from "../../components/PopupWrap";
import PopupInner2 from "../../components/PopupInner2";
import InputWrap2 from "../../components/InputWrap2";
import InputType1Search from "../../components/InputType1Search";
import InputType1Inner2a from "../../components/InputType1Inner2a";
import InputType1InnerWrap from "../../components/InputType1InnerWrap";
import ButtonWrap2 from "../../components/ButtonWrap2";
import ButtonType1 from "../../components/ButtonType1";
import ButtonType3 from "../../components/ButtonType3";
import TitleType1 from "../../components/TitleType1";
import SelectType1 from "../../components/SelectType1";

const ReturnModalCreate01 = () => {
  return (
    <PopupWrap className="popup-wrap container">
      <PopupInner2 className="container_wrapper">
        <TitleType1>
          정산 생성 <span>기본정보 선택</span>
        </TitleType1>
        <InputWrap2 className="input_wrapper">
          <InputType1InnerWrap>
            <InputType1Search
              type="text"
              name="boss-name"
              id="boss-name"
              placeholder="보스 검색어 입력"
            />
            <ol>
              <li>보스 1</li>
              <li>보스 2</li>
              <li>보스 3</li>
            </ol>
            <InputType1Inner2a>
              <img src="images/icon1.png" alt="검색" />
            </InputType1Inner2a>
          </InputType1InnerWrap>
          <SelectType1>
            <option disabled selected>
              정산 타입을 선택하세요
            </option>
            <option>타입1</option>
          </SelectType1>
        </InputWrap2>
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

export default ReturnModalCreate01;
