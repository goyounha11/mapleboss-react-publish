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
  justify-content: space-between;
`;

const DivContentList = styled.div`
  display: flex;
  //flex-basis: 900px;
  //flex-shrink: 0;
  //flex-grow: 1;
  flex-wrap: wrap;
  min-width: 940px;
`;

const DivContentListWrapper = styled.div`
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  background-color: #f7f8fa;
  padding: 15px;
  margin-left: 5px;
  width: 270px;
  height: 95px;
  margin-top: 5px;
`;

const DivReturnDetailTags = styled.div`
  display: flex;
`;

const H3ReturnDetailTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 15px;
  //font: Pretendard;
`;

const Span = styled.div`
  color: #8b95a1;
  font-size: 12px;
`;

const DivSpan1 = styled.div`
  margin-right: 5px;
  font-size: 13px;
  background-color: rgba(82, 82, 164, 0.1);
  color: #5252a4;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 99px;
`;

const DivSpan2 = styled.div`
  margin-right: 5px;
  font-size: 13px;
  background-color: #e5e8eb;
  color: #8b95a1;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 99px;
`;

const DivSpan3 = styled.div`
  margin-right: 5px;
  font-size: 13px;
  background-color: rgba(193, 62, 49, 0.1);
  color: #c13e31;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 99px;
`;

const DivSpan4 = styled.div`
  margin-right: 5px;
  font-size: 13px;
  background-color: rgba(18, 172, 121, 0.1);
  color: #12ac79;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 99px;
`;

const DivPayment = styled.div`
  width: 280px;
  border: 1 solid black;
  margin-right: 5px;
  min-width: 280px;
`;

const DivPaymentTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 5px;
  align-items: center;
`;

const H2PaymentTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const SpanPaymentTitle = styled.div`
  color: #5252a4;
`;

const DivPaymentMemberTable = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 90%;
  color: #6b7684;
  font-size: 15px;
  border-style: solid;
  border-width: 1px;
  border-color: #e5e8eb;
  border-radius: 8px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-top: 15px;
  margin-left: auto;
  margin-right: auto;
`;

const ThTable = styled.th`
  text-align: left;
  padding-bottom: 5px;
  font-weight: lighter;
  font-size: 12px;
  color: #6b7684;
`;

const TdTable = styled.td`
  text-align: right;
  color: #333d4b;
  padding-bottom: 5px;
  font-size: 12px;
`;

const Table2 = styled.table`
  width: 100%;
  color: #6b7684;
  font-size: 15px;
`;

const Th1 = styled.th`
  text-align: left;
`;

const Th2 = styled.th`
  text-align: right;
`;

const DivButtonPayment = styled.button`
  width: 100%;
  margin-top: 10px;
  height: 40px;
  background-color: #5252a4;
  border: none;
  border-radius: 8px;
  color: white;
`;

const Div = styled.div`
  text-align: center;
  height: 40px;
  padding-bottom: 20px;
  color: white;
`;

const ReturnDetail01 = () => {
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
                <DivButton type="button">생성</DivButton>
              </div>
            </DivContentTitle>
            <DivReturnDetailContent className="return_detail_content">
              <DivContentList className="content_list">
                <DivContentListWrapper className="content_list_wrapper">
                  <div className="party_list">
                    <DivReturnDetailTags className="return_detail_tags">
                      <DivSpan1>AUTO</DivSpan1>
                      <DivSpan2>CONFIRMED</DivSpan2>
                      <DivSpan3>하드</DivSpan3>
                    </DivReturnDetailTags>
                    <H3ReturnDetailTitle className="return_detail_title">
                      루시드
                    </H3ReturnDetailTitle>
                    <div className="return_detail_date">
                      <Span>2022.05.26 16:20:35</Span>
                      <Span>2022.05.26 16:20:35</Span>
                    </div>
                  </div>
                </DivContentListWrapper>
                <DivContentListWrapper className="content_list_wrapper">
                  <div className="party_list">
                    <DivReturnDetailTags className="return_detail_tags">
                      <DivSpan1>AUTO</DivSpan1>
                      <DivSpan2>CONFIRMED</DivSpan2>
                      <DivSpan4>이자</DivSpan4>
                    </DivReturnDetailTags>
                    <H3ReturnDetailTitle className="return_detail_title">
                      루시드
                    </H3ReturnDetailTitle>
                    <div className="return_detail_date">
                      <Span>2022.05.26 16:20:35</Span>
                      <Span>2022.05.26 16:20:35</Span>
                    </div>
                  </div>
                </DivContentListWrapper>
                <DivContentListWrapper className="content_list_wrapper">
                  <div className="party_list">
                    <DivReturnDetailTags className="return_detail_tags">
                      <DivSpan1>AUTO</DivSpan1>
                      <DivSpan2>CONFIRMED</DivSpan2>
                      <DivSpan3>하드</DivSpan3>
                    </DivReturnDetailTags>
                    <H3ReturnDetailTitle className="return_detail_title">
                      루시드
                    </H3ReturnDetailTitle>
                    <div className="return_detail_date">
                      <Span>2022.05.26 16:20:35</Span>
                      <Span>2022.05.26 16:20:35</Span>
                    </div>
                  </div>
                </DivContentListWrapper>
                <DivContentListWrapper className="content_list_wrapper">
                  <div className="party_list">
                    <DivReturnDetailTags className="return_detail_tags">
                      <DivSpan1>AUTO</DivSpan1>
                      <DivSpan2>CONFIRMED</DivSpan2>
                      <DivSpan4>이자</DivSpan4>
                    </DivReturnDetailTags>
                    <H3ReturnDetailTitle className="return_detail_title">
                      루시드
                    </H3ReturnDetailTitle>
                    <div className="return_detail_date">
                      <Span>2022.05.26 16:20:35</Span>
                      <Span>2022.05.26 16:20:35</Span>
                    </div>
                  </div>
                </DivContentListWrapper>
                <DivContentListWrapper className="content_list_wrapper">
                  <div className="party_list">
                    <DivReturnDetailTags className="return_detail_tags">
                      <DivSpan1>AUTO</DivSpan1>
                      <DivSpan2>CONFIRMED</DivSpan2>
                      <DivSpan3>하드</DivSpan3>
                    </DivReturnDetailTags>
                    <H3ReturnDetailTitle className="return_detail_title">
                      루시드
                    </H3ReturnDetailTitle>
                    <div className="return_detail_date">
                      <Span>2022.05.26 16:20:35</Span>
                      <Span>2022.05.26 16:20:35</Span>
                    </div>
                  </div>
                </DivContentListWrapper>
                <DivContentListWrapper className="content_list_wrapper">
                  <div className="party_list">
                    <DivReturnDetailTags className="return_detail_tags">
                      <DivSpan1>AUTO</DivSpan1>
                      <DivSpan2>CONFIRMED</DivSpan2>
                      <DivSpan3>하드</DivSpan3>
                    </DivReturnDetailTags>
                    <H3ReturnDetailTitle className="return_detail_title">
                      루시드
                    </H3ReturnDetailTitle>
                    <div className="return_detail_date">
                      <Span>2022.05.26 16:20:35</Span>
                      <Span>2022.05.26 16:20:35</Span>
                    </div>
                  </div>
                </DivContentListWrapper>
                <DivContentListWrapper className="content_list_wrapper">
                  <div className="party_list">
                    <DivReturnDetailTags className="return_detail_tags">
                      <DivSpan1>AUTO</DivSpan1>
                      <DivSpan2>CONFIRMED</DivSpan2>
                      <DivSpan3>하드</DivSpan3>
                    </DivReturnDetailTags>
                    <H3ReturnDetailTitle className="return_detail_title">
                      루시드
                    </H3ReturnDetailTitle>
                    <div className="return_detail_date">
                      <Span>2022.05.26 16:20:35</Span>
                      <Span>2022.05.26 16:20:35</Span>
                    </div>
                  </div>
                </DivContentListWrapper>
              </DivContentList>
              <DivPayment className="payment">
                <DivPaymentTitle className="payment_title">
                  <H2PaymentTitle>지급 예정</H2PaymentTitle>
                  <SpanPaymentTitle>확정된 정산 수 : 5</SpanPaymentTitle>
                </DivPaymentTitle>
                <DivPaymentMemberTable className="payment_member_table">
                  <Table>
                    <tr>
                      <ThTable>첫 번째 유저</ThTable>
                      <TdTable>100,000,000</TdTable>
                    </tr>
                    <tr>
                      <ThTable>두 번째 유저</ThTable>
                      <TdTable>100,000,000</TdTable>
                    </tr>
                    <tr>
                      <ThTable>세 번째 유저</ThTable>
                      <TdTable>100,000,000</TdTable>
                    </tr>
                    <tr>
                      <ThTable>네 번째 유저</ThTable>
                      <TdTable>100,000,000</TdTable>
                    </tr>
                    <tr>
                      <ThTable>다섯 번째 유저</ThTable>
                      <TdTable>100,000,000</TdTable>
                    </tr>
                    <tr>
                      <ThTable>여섯 번째 유저</ThTable>
                      <TdTable>100,000,000</TdTable>
                    </tr>
                  </Table>
                </DivPaymentMemberTable>
                <div className="payment_total">
                  <Table2>
                    <tr>
                      <Th1>총 메소</Th1>
                      <Th2>600,000,000</Th2>
                    </tr>
                  </Table2>
                </div>
                <div className="btn_payment">
                  <DivButtonPayment>지급</DivButtonPayment>
                </div>
              </DivPayment>
            </DivReturnDetailContent>
          </DivContentWrapper>
        </DivPartyDetail>
      </div>
      <footer>
        <Div>Copyright ⓒ2018 FREEMOA Co., itd All rights reserved.</Div>
      </footer>
    </DivContainer>
  );
};

export default ReturnDetail01;
