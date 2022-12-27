import styled from "styled-components";

const InputWrap2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  > div:nth-of-type(1) {
    width: 50% !important;
  }
  > div:nth-of-type(2) {
    width: 50px !important;
  }
  > div:nth-of-type(3) {
    width: auto !important;
  }
`;

export default InputWrap2;
