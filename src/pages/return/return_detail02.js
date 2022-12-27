import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  background-color: #2b2b36;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1450px; //1390px;
`;

const DivHeaderWrapper = styled.div`
  display: flex;
  //background-color: grey;
  //justify-content: flex-start;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 100px;
  //height: 200px;
`;

const Ahref = styled.a`
  margin-left: 60px;
  text-decoration: none;
  color: white;
  font-size: 20px;
`;

const DivHeaderToolsWrapper = styled.div`
  display: flex;
  //justify-content: flex-end;
  //margin-right: 100px;
  align-items: center;
`;

const DivHeaderTools = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
  //height: 200px;
`;

const AhrefImg = styled.a`
  margin-left: 30px;
`;

const DivPartyDetail = styled.div`
  display: flex;
`;

const DivContentWrapper = styled.div`
  background-color: white;
  padding-top: 20px;
  padding-bottom: 15px;
  padding-left: 10px;
  padding-right: 10px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 40px;
  margin-bottom: 100px;
  border-radius: 16px;
  flex-basis: 1220px; //945px;
  flex-shrink: 0;
  flex-grow: 1;
`;

const DivContentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #383854;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
  color: white;
  border-radius: 8px;
  height: 40px;
  vertical-align: middle;
  line-height: 40px;
`;

const P = styled.div`
  font-size: 20px;
`;

const DivButton = styled.button`
  margin-left: 15px;
  background-color: #383854;
  color: white;
  border: none;
  padding: 8px;
  &:hover {
    background-color: purple;
  }
  border-radius: 5px;
`;

const DivReturnDetailContent = styled.div`
  display: flex;
`;

const DivBtnsReturnDetail = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const DivContentListWrapper = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #f7f8fa;
`;

const DivContentListWrapper1 = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #f7f8fa;
  width: 220px;
  height: 300px;
  margin-left: 5px;
  padding: 15px;
  padding-bottom: 22px;
`;

const DivContentListWrapper2 = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #f7f8fa;
  width: 515px; //470px;
  margin-left: 10px;
  padding: 15px;
`;

const DivContentListWrapper3 = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #f7f8fa;
  width: 365px; //465px;
  margin-left: 10px;
  padding: 15px;
  margin-right: 5px;
`;

const DivReturnTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const H3ReturnTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
`;

const DivBtnsPartyTitle = styled.div`
  display: flex;
  align-items: center;
`;

const SpanReturnTitle = styled.div`
  font-size: 15px;
  font-weight: bold;
  color: #5252a4;
  margin-right: 5px;
`;

const Table1 = styled.table`
  margin-top: 15px;
  width: 220px;
`;

const Table2 = styled.table`
  margin-top: 15px;
  width: 485px; //470px;
`;

const Table3 = styled.table`
  margin-top: 15px;
  width: 340px;
`;

const H1ReturnDetailTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
`;

const DivTitle = styled.div`
  display: flex;
  align-items: center;
`;

const DivKeynote = styled.div`
  margin-right: 5px;
`;

const TdReturnInfo = styled.td`
  display: flex;
  align-items: center;
`;

const TdReturnInfo1 = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 10px;
  border: none;
  font-size: 13px;
  margin-bottom: 6px;
`;

const TdReturnInfo2 = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 10px;
  border: none;
  font-size: 13px;
  margin-bottom: 6px;
`;

const TdReturnInfo3 = styled.td`
  //display: flex;
  //align-items: center;
  //justify-content: flex-start;
  //border: none;
  font-size: 15px;
  margin-bottom: 3px;
  width: 30px;
`;

const TdReturnInfo4 = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 10px;
  border: none;
  font-size: 13px;
  margin-bottom: 3px;
`;

const TdReturnInfo5 = styled.td`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background-color: #ffffff;
  padding: 10px;
  border: none;
  font-size: 13px;
  margin-bottom: 3px;
`;

const TdInput1 = styled.input`
  width: 240px; //195px;
  height: 37px;
  margin-right: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #ffffff;
  padding-left: 5px;
`;

const TdInput2 = styled.input`
  width: 50px;
  height: 37px;
  margin-right: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #ffffff;
  text-align: center;
`;

const TdInput3 = styled.input`
  width: 195px;
  height: 37px;
  margin-right: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #ffffff;
  padding-left: 5px;
`;

const TdInput4 = styled.input`
  width: 155px;
  height: 37px;
  margin-right: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #ffffff;
  padding-left: 5px;
`;

const TdInput5 = styled.input`
  width: 190px;
  height: 37px;
  margin-right: 5px;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #ffffff;
  padding-left: 5px;
`;

const H3Div1 = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-right: 10px;
`;

const DivReturnDetailTags = styled.div`
  font-size: 10px;
  background-color: rgba(18, 172, 121, 0.1);
  color: #12ac79;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 99px;
`;

const DivReturnDetailTags2 = styled.div`
  font-size: 10px;
  background-color: rgba(67, 152, 236, 0.1);
  color: #4398ec;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 99px;
`;

const DivReturnDetailTags3 = styled.div`
  font-size: 10px;
  background-color: rgba(82, 82, 164, 0.1);
  color: #5252a4;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 99px;
`;

const ButtonReturnDetail = styled.button`
  width: 120px;
  //margin-top: 10px;
  height: 40px;
  background-color: #f7f8fa;
  border: none;
  border-radius: 8px;
  color: black;
  margin-left: 4px;
  margin-right: 4px;
  &:hover {
    background-color: #5252a4;
    color: white;
  }
`;

const Div = styled.div`
  text-align: center;
  height: 40px;
  padding-bottom: 20px;
  color: white;
`;

const ReturnDetail02 = () => {
  return (
    <DivContainer className="container">
      <Header>
        <DivHeaderWrapper className="header_wrapper">
          <Nav>
            <div className="header_logo">
              <a href="#">
                <img src="images/logo.png" alt="메이플스토리_로고" />
              </a>
            </div>
            <div className="header_gnb">
              <Ahref href="#">파티</Ahref>
              <Ahref href="#">정산</Ahref>
            </div>
          </Nav>
        </DivHeaderWrapper>
        <DivHeaderToolsWrapper>
          <DivHeaderTools className="header_tools">
            <div className="header_setting">
              <AhrefImg href="#">
                <img src="images/i-setting.png" />
              </AhrefImg>
            </div>
            <div className="header_alarm">
              <AhrefImg href="#">
                <img src="images/i-alarm.png" />
              </AhrefImg>
            </div>
          </DivHeaderTools>
        </DivHeaderToolsWrapper>
      </Header>
      <div className="container_wrapper">
        <DivPartyDetail className="party_detail">
          <DivContentWrapper className="content_wrapper">
            <DivContentTitle className="content_title">
              <P>정산 상세</P>
              <div className="btns_party_title">
                <DivButton type="button">확정</DivButton>
                <DivButton type="button">삭제</DivButton>
              </div>
            </DivContentTitle>
            <DivReturnDetailContent className="return_detail_content">
              <div className="content_list">
                <DivContentListWrapper1 className="content_list_wrapper">
                  <DivReturnTitle className="return_title">
                    <H1ReturnDetailTitle className="return_detail_title">
                      파티 이름
                    </H1ReturnDetailTitle>
                    <DivTitle>
                      <DivKeynote className="keynote">Keynote</DivKeynote>
                      <img src="images/i-crown.png" alt="" />
                    </DivTitle>
                  </DivReturnTitle>
                  <div className="return_info">
                    <Table1>
                      <tr>
                        <TdReturnInfo1>
                          <H3Div1>월</H3Div1>
                          <DivReturnDetailTags className="return_detail_tags">
                            <span>이자</span>
                          </DivReturnDetailTags>
                        </TdReturnInfo1>
                      </tr>
                      <tr>
                        <TdReturnInfo2>
                          <h5>생성일시</h5>
                          <p>2022.05.26 16:20:35</p>
                        </TdReturnInfo2>
                      </tr>
                      <tr>
                        <TdReturnInfo2>
                          <h5>상태</h5>
                          <DivReturnDetailTags2 className="return_detail_tags">
                            <span>IN-PROGRESS</span>
                          </DivReturnDetailTags2>
                        </TdReturnInfo2>
                      </tr>
                      <tr>
                        <TdReturnInfo2>
                          <h5>타입</h5>
                          <DivReturnDetailTags3 className="return_detail_tags">
                            <span>AUTO</span>
                          </DivReturnDetailTags3>
                        </TdReturnInfo2>
                      </tr>
                      <tr>
                        <TdReturnInfo2>
                          <h5>확정일시</h5>
                          <p>2022.05.26 16:20:35</p>
                        </TdReturnInfo2>
                      </tr>
                      <tr>
                        <TdReturnInfo2>
                          <h5>이전 정산</h5>
                          <p>5</p>
                        </TdReturnInfo2>
                      </tr>
                    </Table1>
                  </div>
                </DivContentListWrapper1>
              </div>
              <div className="content_list">
                <DivContentListWrapper2 className="content_list_wrapper">
                  <DivReturnTitle className="return_title">
                    <H3ReturnTitle>아이템</H3ReturnTitle>
                    <div className="btns_party_title">
                      <button>
                        <img src="images/pencil.png" alt="" />
                        수정
                      </button>
                    </div>
                  </DivReturnTitle>
                  <div className="return_info">
                    <Table2>
                      <thead>
                        <tr>
                          <TdReturnInfo3>이름</TdReturnInfo3>
                          <TdReturnInfo3>수량</TdReturnInfo3>
                          <TdReturnInfo3>메소</TdReturnInfo3>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <TdInput1 type="text" placeholder="아이템이름" />
                          </td>
                          <td>
                            <TdInput2 type="number" placeholder="1" />
                          </td>
                          <td>
                            <TdInput3 type="number" placeholder="100000000" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <TdInput1 type="text" placeholder="아이템이름" />
                          </td>
                          <td>
                            <TdInput2 type="number" placeholder="1" />
                          </td>
                          <td>
                            <TdInput3 type="number" placeholder="100000000" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <TdInput1 type="text" placeholder="아이템이름" />
                          </td>
                          <td>
                            <TdInput2 type="number" placeholder="1" />
                          </td>
                          <td>
                            <TdInput3 type="number" placeholder="100000000" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <TdInput1 type="text" placeholder="아이템이름" />
                          </td>
                          <td>
                            <TdInput2 type="number" placeholder="1" />
                          </td>
                          <td>
                            <TdInput3 type="number" placeholder="100000000" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <TdInput1 type="text" placeholder="아이템이름" />
                          </td>
                          <td>
                            <TdInput2 type="number" placeholder="1" />
                          </td>
                          <td>
                            <TdInput3 type="number" placeholder="100000000" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <TdInput1 type="text" placeholder="아이템이름" />
                          </td>
                          <td>
                            <TdInput2 type="number" placeholder="1" />
                          </td>
                          <td>
                            <TdInput3 type="number" placeholder="100000000" />
                          </td>
                        </tr>
                      </tbody>
                    </Table2>
                  </div>
                </DivContentListWrapper2>
              </div>
              <div className="content_list">
                <DivContentListWrapper3 className="content_list_wrapper">
                  <DivReturnTitle className="return_title">
                    <H3ReturnTitle>분배율</H3ReturnTitle>
                    <DivBtnsPartyTitle className="btns_party_title">
                      <SpanReturnTitle>총 분배율 100%</SpanReturnTitle>
                      <button>
                        <img src="images/pencil.png" alt="" />
                        수정
                      </button>
                    </DivBtnsPartyTitle>
                  </DivReturnTitle>
                  <div className="return_info">
                    <Table3>
                      <thead>
                        <tr>
                          <TdReturnInfo3>이름</TdReturnInfo3>
                          <TdReturnInfo3>분배율</TdReturnInfo3>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <TdInput4 type="text" placeholder="멤버 아이디" />
                          </td>
                          <td>
                            <TdInput5 type="text" placeholder="16.6%" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <TdInput4 type="text" placeholder="멤버 아이디" />
                          </td>
                          <td>
                            <TdInput5 type="text" placeholder="16.6%" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <TdInput4 type="text" placeholder="멤버 아이디" />
                          </td>
                          <td>
                            <TdInput5 type="text" placeholder="16.6%" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <TdInput4 type="text" placeholder="멤버 아이디" />
                          </td>
                          <td>
                            <TdInput5 type="text" placeholder="16.6%" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <TdInput4 type="text" placeholder="멤버 아이디" />
                          </td>
                          <td>
                            <TdInput5 type="text" placeholder="16.6%" />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <TdInput4 type="text" placeholder="멤버 아이디" />
                          </td>
                          <td>
                            <TdInput5 type="text" placeholder="16.6%" />
                          </td>
                        </tr>
                      </tbody>
                    </Table3>
                  </div>
                </DivContentListWrapper3>
              </div>
            </DivReturnDetailContent>
            <DivBtnsReturnDetail className="btns_return_detail">
              <ButtonReturnDetail>취소</ButtonReturnDetail>
              <ButtonReturnDetail>저장</ButtonReturnDetail>
            </DivBtnsReturnDetail>
          </DivContentWrapper>
        </DivPartyDetail>
      </div>
      <footer>
        <Div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</Div>
      </footer>
    </DivContainer>
  );
};

export default ReturnDetail02;
