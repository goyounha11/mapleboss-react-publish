import styled from "styled-components";

const InputType1 = styled.input`
  position: relative;
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border: 1px solid #e5e8eb !important;
  border-radius: 8px;
  margin-top: 5px;
  margin-bottom: 10px;
  & + ol {
    width: 100%;
    display: none;
    position: absolute;
    left: 0;
    top: 50px;
    list-style: none;
    padding: 10px 20px;
    background: #fff;
    border: 1px solid #e5e8eb;
    border-top: 0;
    border-radius: 0 0 8px 8px;
    li {
      padding: 5px 0;
      &:first-of-type {
        border-top: 1px solid #e5e8eb;
        padding-top: 20px;
      }
      &:hover {
        font-weight: 700;
      }
    }
  }
  &:focus,
  &:active {
    outline: none;
    border-color: #e5e8eb;
    & + ol {
      display: block;
    }
  }
`;
export default InputType1;
