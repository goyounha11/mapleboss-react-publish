import React from "react";
import styled from "styled-components";

const DivContainer = styled.div`
  background-color: #2b2b36;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const DivCreateParty = styled.div`
  display: flex;
  align-items: center;
  width: 290px;
  height: 150px;
  background-color: #f7f8fa;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-right: 5px;
  margin-left: 5px;
  padding: 10px;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
`;

const PCreateParty = styled.p`
  margin-left: 7px;
`;

const DivContentListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const DivPartyList = styled.div`
  width: 290px;
  height: 150px;
  background-color: #ffffff;
  margin: 10px;
  margin-right: 5px;
  margin-left: 5px;
  padding: 10px;
  position: relative;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
`;

const H1PartyTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 12px;
`;

const PPartyDesc = styled.p`
  font-size: 15px;
  font-weight: lighter;
  color: lightgrey;
  margin-top: 10px;
  //margin-bottom: 20px;
`;

const DivKeynote = styled.div`
  font-weight: bold;
  position: absolute;
  bottom: 20px;
  left: 10px;
`;

const Div = styled.div`
  text-align: center;
  height: 30px;
  padding-bottom: 20px;
  color: grey;
`;

const PartyMain = () => {
  return (
    <DivContainer className="container">
      <Header>
        <DivHeaderWrapper className="header_wrapper">
          <Nav>
            <div className="header_logo">
              <a href="#">
                <img src="images/logo.png" alt="??????????????????_??????" />
              </a>
            </div>
            <div className="header_gnb">
              <Ahref href="http://www.google.com">??????</Ahref>
              <Ahref href="http://www.google.com">??????</Ahref>
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
        <div className="party_main">
          <DivContentWrapper className="content_wrapper">
            <div className="content_title">
              <P>??????</P>
            </div>
            <div className="content_list">
              <DivContentListWrapper className="content_list_wrapper">
                <div className="add_list">
                  <DivCreateParty className="create_party">
                    <img src="images/i-plus.png" alt="" />
                    <PCreateParty>????????????</PCreateParty>
                  </DivCreateParty>
                </div>
                <DivPartyList className="party_list">
                  <H1PartyTitle className="party_title">
                    ?????? ?????? ??????
                  </H1PartyTitle>
                  <PPartyDesc className="party_desc">
                    ????????? ?????? ????????? ??????????????????.
                    <br />??? ?????? ?????? ????????? ???????????? ?????? ?????????.
                  </PPartyDesc>
                  <DivKeynote className="keynote">
                    Keynote <img src="images/i-crown.png" alt="" />
                  </DivKeynote>
                </DivPartyList>
                <DivPartyList className="party_list">
                  <H1PartyTitle className="party_title">
                    ?????? ?????? ??????
                  </H1PartyTitle>
                  <PPartyDesc className="party_desc">
                    ????????? ?????? ????????? ??????????????????.
                    <br />??? ?????? ?????? ????????? ???????????? ?????? ?????????.
                  </PPartyDesc>
                  <DivKeynote className="keynote">
                    Keynote <img src="images/i-crown.png" alt="" />
                  </DivKeynote>
                </DivPartyList>
                <DivPartyList className="party_list">
                  <H1PartyTitle className="party_title">
                    ?????? ?????? ??????
                  </H1PartyTitle>
                  <PPartyDesc className="party_desc">
                    ????????? ?????? ????????? ??????????????????.
                    <br />??? ?????? ?????? ????????? ???????????? ?????? ?????????.
                  </PPartyDesc>
                  <DivKeynote className="keynote">
                    Keynote <img src="images/i-crown.png" alt="" />
                  </DivKeynote>
                </DivPartyList>
                <DivPartyList className="party_list">
                  <H1PartyTitle className="party_title">
                    ?????? ?????? ??????
                  </H1PartyTitle>
                  <PPartyDesc className="party_desc">
                    ????????? ?????? ????????? ??????????????????.
                    <br />??? ?????? ?????? ????????? ???????????? ?????? ?????????.
                  </PPartyDesc>
                  <DivKeynote className="keynote">
                    Keynote <img src="images/i-crown.png" alt="" />
                  </DivKeynote>
                </DivPartyList>
                <DivPartyList className="party_list">
                  <H1PartyTitle className="party_title">
                    ?????? ?????? ??????
                  </H1PartyTitle>
                  <PPartyDesc className="party_desc">
                    ????????? ?????? ????????? ??????????????????.
                    <br />??? ?????? ?????? ????????? ???????????? ?????? ?????????.
                  </PPartyDesc>
                  <DivKeynote className="keynote">
                    Keynote <img src="images/i-crown.png" alt="" />
                  </DivKeynote>
                </DivPartyList>
              </DivContentListWrapper>
            </div>
          </DivContentWrapper>
        </div>
      </div>
      <footer>
        <Div>Copyright ???2018 FREEMOA Co., itd All rights reserved.</Div>
      </footer>
    </DivContainer>
  );
};

export default PartyMain;
