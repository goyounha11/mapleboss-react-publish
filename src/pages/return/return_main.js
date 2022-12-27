import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  background-color: #2b2b36;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 1390px;
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

const DivReturnMain = styled.div`
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
  flex-basis: 1168px; //945px;
  flex-shrink: 0;
  flex-grow: 1;
`;

const P = styled.p`
  background-color: #383854;
  margin-right: 5px;
  margin-left: 5px;
  margin-bottom: 20px;
  padding-left: 30px;
  color: white;
  border-radius: 8px;
  height: 40px;
  vertical-align: middle;
  line-height: 40px;
`;

const DivcontentListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const DivReturnList = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: white;
  width: 260px;
  padding: 20px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const H1PartyTitle = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const DivReturnTable = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #f7f8fa;
  padding: 10px;
`;

const DivPartyTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const Img = styled.img`
  object-fit: none;
`;

const Table = styled.table`
  width: 100%;
  color: #6b7684;
  font-size: 15px;
`;

const ThTable = styled.th`
  text-align: left;
  padding-bottom: 5px;
`;

const TdTable = styled.td`
  text-align: right;
  color: #333d4b;
  padding-bottom: 5px;
`;

const Div = styled.div`
  text-align: center;
  height: 30px;
  padding-bottom: 20px;
  color: white;
`;

const ReturnMain = () => {
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
              <AhrefImg href="http://www.google.com">
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
        <DivReturnMain className="return_main">
          <DivContentWrapper className="content_wrapper">
            <div className="content_title">
              <P>정산</P>
            </div>
            <div className="content_list">
              <DivcontentListWrapper className="content_list_wrapper">
                <DivReturnList className="return_list">
                  <H1PartyTitle className="party_title">
                    <DivPartyTitle>파티 이름 영역</DivPartyTitle>
                    <Img src="images/i-crown.png" alt="" />
                  </H1PartyTitle>
                  <DivReturnTable className="return_table">
                    <Table>
                      <tr>
                        <ThTable>진행중 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>확정된 정산</ThTable>
                        <TdTable>5</TdTable>
                      </tr>
                      <tr>
                        <ThTable>지금까지 지급된 정산</ThTable>
                        <TdTable>28</TdTable>
                      </tr>
                      <tr>
                        <ThTable>자동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>수동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                    </Table>
                  </DivReturnTable>
                </DivReturnList>
                <DivReturnList className="return_list">
                  <H1PartyTitle className="party_title">
                    <DivPartyTitle>파티 이름 영역</DivPartyTitle>
                    <Img src="images/i-crown.png" alt="" />
                  </H1PartyTitle>
                  <DivReturnTable className="return_table">
                    <Table>
                      <tr>
                        <ThTable>진행중 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>확정된 정산</ThTable>
                        <TdTable>5</TdTable>
                      </tr>
                      <tr>
                        <ThTable>지금까지 지급된 정산</ThTable>
                        <TdTable>28</TdTable>
                      </tr>
                      <tr>
                        <ThTable>자동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>수동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                    </Table>
                  </DivReturnTable>
                </DivReturnList>
                <DivReturnList className="return_list">
                  <H1PartyTitle className="party_title">
                    <DivPartyTitle>파티 이름 영역</DivPartyTitle>
                    <Img src="images/i-crown.png" alt="" />
                  </H1PartyTitle>
                  <DivReturnTable className="return_table">
                    <Table>
                      <tr>
                        <ThTable>진행중 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>확정된 정산</ThTable>
                        <TdTable>5</TdTable>
                      </tr>
                      <tr>
                        <ThTable>지금까지 지급된 정산</ThTable>
                        <TdTable>28</TdTable>
                      </tr>
                      <tr>
                        <ThTable>자동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>수동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                    </Table>
                  </DivReturnTable>
                </DivReturnList>
                <DivReturnList className="return_list">
                  <H1PartyTitle className="party_title">
                    <DivPartyTitle>파티 이름 영역</DivPartyTitle>
                    <Img src="images/i-crown.png" alt="" />
                  </H1PartyTitle>
                  <DivReturnTable className="return_table">
                    <Table>
                      <tr>
                        <ThTable>진행중 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>확정된 정산</ThTable>
                        <TdTable>5</TdTable>
                      </tr>
                      <tr>
                        <ThTable>지금까지 지급된 정산</ThTable>
                        <TdTable>28</TdTable>
                      </tr>
                      <tr>
                        <ThTable>자동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>수동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                    </Table>
                  </DivReturnTable>
                </DivReturnList>
                <DivReturnList className="return_list">
                  <H1PartyTitle className="party_title">
                    <DivPartyTitle>파티 이름 영역</DivPartyTitle>
                    <Img src="images/i-crown.png" alt="" />
                  </H1PartyTitle>
                  <DivReturnTable className="return_table">
                    <Table>
                      <tr>
                        <ThTable>진행중 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>확정된 정산</ThTable>
                        <TdTable>5</TdTable>
                      </tr>
                      <tr>
                        <ThTable>지금까지 지급된 정산</ThTable>
                        <TdTable>28</TdTable>
                      </tr>
                      <tr>
                        <ThTable>자동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>수동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                    </Table>
                  </DivReturnTable>
                </DivReturnList>
                <DivReturnList className="return_list">
                  <H1PartyTitle className="party_title">
                    <DivPartyTitle>파티 이름 영역</DivPartyTitle>
                    <Img src="images/i-crown.png" alt="" />
                  </H1PartyTitle>
                  <DivReturnTable className="return_table">
                    <Table>
                      <tr>
                        <ThTable>진행중 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>확정된 정산</ThTable>
                        <TdTable>5</TdTable>
                      </tr>
                      <tr>
                        <ThTable>지금까지 지급된 정산</ThTable>
                        <TdTable>28</TdTable>
                      </tr>
                      <tr>
                        <ThTable>자동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                      <tr>
                        <ThTable>수동 정산</ThTable>
                        <TdTable>1</TdTable>
                      </tr>
                    </Table>
                  </DivReturnTable>
                </DivReturnList>
              </DivcontentListWrapper>
            </div>
          </DivContentWrapper>
        </DivReturnMain>
      </div>
      <footer>
        <Div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</Div>
      </footer>
    </DivContainer>
  );
};

export default ReturnMain;
