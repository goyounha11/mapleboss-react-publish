import { hover } from "@testing-library/user-event/dist/hover";
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
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  margin-left: 100px;
`;

const Ahref = styled.a`
  margin-left: 60px;
  text-decoration: none;
  color: white;
  font-size: 20px;
`;

const DivHeaderToolsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const DivHeaderTools = styled.div`
  display: flex;
  align-items: center;
  margin-right: 100px;
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
  flex-basis: 1168px; //945px;
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
  margin-bottom: 20px;
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

const DivPartyDetailTop = styled.div`
  display: flex;
`;

const HrMiddle = styled.hr`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  height: 1px;
  background-color: #e5e8eb;
  border: none;
`;

const DivPartyDetailDesc = styled.div`
  margin-left: 15px;
`;

const H1PartyDetailTitle = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

const PPartyDetailDesc = styled.p`
  font-size: 10px;
  color: grey;
  width: 400px;
`;

const DivPartyDetailCards = styled.div`
  display: flex;
`;

const DivPartyDetailCard = styled.div`
  width: 200px;
  height: 100px;
  margin-left: 20px;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f7f8fa;
`;

const H2Card = styled.div`
  font-size: 25px;
  color: #5252a4;
  font-weight: bold;
`;

const DivPartyDetailBottom = styled.div`
  display: flex;
`;

const DivPartyWallet = styled.div`
  display: flex;
  align-items: center;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  margin-left: 15px;
  padding-left: 10px;
  padding-right: 20px;
  min-width: 370px;
  height: 170px;
  //position: relative;
`;

const DivPartyWalletItem = styled.div`
  &:nth-child(1) {
    align-self: center;
  }
  &:nth-child(2) {
    align-self: flex-start;
  }
  &:nth-child(3) {
    align-self: flex-end;
  }
`;

const DivPartyWalletCash = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
`;

const DivPartyWalletAddress = styled.div`
  margin-top: 30px;
`;

const DivPartyMembers = styled.div`
  display: flex;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  margin-left: 20px;
  padding: 10px;
`;

const DivPartyMembersItem = styled.div`
  &:nth-child(1) {
    align-self: flex-start;
  }
  &:nth-child(2) {
    align-self: center;
  }
  &:nth-child(3) {
    align-self: center;
  }
`;

const H3KeynoteWrapper = styled.div`
  display: flex;
  margin-top: 5px;
`;

const H3Keynote = styled.div`
  font-weight: bold;
`;

const DivPartyMemberEmail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DivBtnClick = styled.button`
  margin-right: 10px;
  width: 60px;
  height: 30px;
  background-color: white;
  color: #5252a4;
  border-radius: 10px;
  border: 1px solid #5252a4;
`;

const DivBtnClick2 = styled.button`
  margin-right: 10px;
  width: 60px;
  height: 30px;
  background-color: #e5e8eb;
  color: #8b95a1;
  border-radius: 10px;
  border: none;
`;

const H3PartyMembers = styled.div`
  font-size: 17px;
  color: #5252a4;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 20px;
  min-width: 60px;
`;

const DivPartyMember = styled.div`
  height: 50px;
  width: 300px;
`;

const HrPartyMember = styled.hr`
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

const DivPartyMember2 = styled.div`
  height: 50px;
  width: 300px;
  margin-top: 5px;
`;

const Div = styled.div`
  text-align: center;
  height: 30px;
  padding-bottom: 20px;
  color: white;
`;

const PartyDetail = () => {
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
              <P>파티 상세</P>
              <div className="btns_party_title">
                <DivButton type="button">수정</DivButton>
                <DivButton type="button">리더변경</DivButton>
                <DivButton type="button">탈퇴</DivButton>
              </div>
            </DivContentTitle>
            <div className="party_detail_info">
              <div className="party_detail_info_wrapper">
                <DivPartyDetailTop className="party_detail_top">
                  <DivPartyDetailDesc className="party_detail_desc">
                    <H1PartyDetailTitle className="party_detail_title">
                      파티이름이즈뭔들
                    </H1PartyDetailTitle>
                    <PPartyDetailDesc>
                      파티에 대한 설명을 작성해서 넣어주세요. 내용은 어느정도가
                      들어갈까요? <br />
                      메이플 스토리의 확률형 아이템의 실제 확률을 확인해 보세요.
                    </PPartyDetailDesc>
                  </DivPartyDetailDesc>
                  <DivPartyDetailCards className="party_detail_cards">
                    <DivPartyDetailCard className="party_detail_card">
                      <p>파티장</p>
                      <H2Card>쩌로</H2Card>
                    </DivPartyDetailCard>
                    <DivPartyDetailCard className="party_detail_card">
                      <p>파티원</p>
                      <H2Card>1/6</H2Card>
                    </DivPartyDetailCard>
                    <DivPartyDetailCard className="party_detail_card">
                      <p>정산수</p>
                      <H2Card>5</H2Card>
                    </DivPartyDetailCard>
                  </DivPartyDetailCards>
                </DivPartyDetailTop>
                <HrMiddle />
                <DivPartyDetailBottom className="party_detail_bottom">
                  <DivPartyWallet className="party_wallet">
                    <DivPartyWalletItem>
                      <div className="party_wallet_photo">
                        <img src="images/login_char_community 1.png" alt="" />
                      </div>
                    </DivPartyWalletItem>
                    <DivPartyWalletItem>
                      <DivPartyWalletAddress className="party_wallet_address">
                        <h3>파티지갑</h3>
                        <p>주소를 입력해주세요</p>
                      </DivPartyWalletAddress>
                    </DivPartyWalletItem>
                    <DivPartyWalletItem>
                      <DivPartyWalletCash className="party_wallet_cash">
                        <p>200,000,000</p>
                        <img src="images/cash.png" alt="" />
                      </DivPartyWalletCash>
                    </DivPartyWalletItem>
                  </DivPartyWallet>
                  <DivPartyMembers className="party_members">
                    <DivPartyMembersItem>
                      <H3PartyMembers>파티원</H3PartyMembers>
                    </DivPartyMembersItem>
                    <DivPartyMembersItem>
                      <div className="party_members_list">
                        <DivPartyMember className="party_member">
                          <H3KeynoteWrapper>
                            <H3Keynote>Keynote</H3Keynote>
                            <img src="images/i-crown.png" alt="" />
                          </H3KeynoteWrapper>
                          <p>test@gmail.com</p>
                        </DivPartyMember>
                        <HrPartyMember />
                        <DivPartyMember2 className="party_member">
                          <DivPartyMemberEmail className="party_member_email">
                            <div>
                              <H3Keynote>Keynote</H3Keynote>
                              <p>test@gmail.com</p>
                            </div>
                            <DivBtnClick>취소</DivBtnClick>
                          </DivPartyMemberEmail>
                        </DivPartyMember2>
                      </div>
                    </DivPartyMembersItem>
                    <DivPartyMembersItem>
                      <div className="party_members_list">
                        <DivPartyMember2 className="party_member">
                          <DivPartyMemberEmail className="party_member_email">
                            <div>
                              <H3Keynote>Keynote</H3Keynote>
                              <p>test@gmail.com</p>
                            </div>
                            <DivBtnClick2>강퇴</DivBtnClick2>
                          </DivPartyMemberEmail>
                        </DivPartyMember2>
                        <HrPartyMember />
                        <DivPartyMember2 className="party_member">
                          <DivPartyMemberEmail className="party_member_email">
                            <div>
                              <H3Keynote>Keynote</H3Keynote>
                              <p>test@gmail.com</p>
                            </div>
                            <DivBtnClick2>강퇴</DivBtnClick2>
                          </DivPartyMemberEmail>
                        </DivPartyMember2>
                      </div>
                    </DivPartyMembersItem>
                  </DivPartyMembers>
                </DivPartyDetailBottom>
              </div>
            </div>
          </DivContentWrapper>
        </DivPartyDetail>
      </div>
      <footer>
        <Div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</Div>
      </footer>
    </DivContainer>
  );
};

export default PartyDetail;
