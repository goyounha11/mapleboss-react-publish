import styled from "styled-components";

const InputWrap2 = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0;
  > * {
    width: calc(50% - 5px) !important;
  }
`;

export default InputWrap2;
