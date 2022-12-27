import React from "react";

const HeaderPopup = () => {
  return (
    <div className="container">
      <div className="container_wrapper">
        <div className="header_popup1">
          <div className="popup_wrapper">
            <div className="header_user_info">
              <h5>용사1259</h5>
              <button>로그아웃</button>
            </div>
            <button>정보 변경</button>
          </div>
        </div>
        <div className="header_popup2">
          <div className="popup_wrapper">
            <div>
              <div className="notice">
                <p>ABC파티에 초대되었습니다.</p>
                <span>
                  <img src="images/check.png" />
                  읽음
                </span>
              </div>
              <div className="btns_invite">
                <button>수락</button>
                <button>거절</button>
              </div>
            </div>
            <div className="notice">
              <p>정산이 지급되었습니다.</p>
              <span>
                <img src="images/check.png" />
                읽음
              </span>
            </div>
            <div className="notice">
              <p>파티이즈뭔들파티의 리더가 쩌로 님으로 변경되었습니다.</p>
              <span>
                <img src="images/check.png" />
                읽음
              </span>
            </div>
            <div className="notice">
              <p>정산이 지급되었습니다.</p>
              <span>
                <img src="images/check.png" />
                읽음
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderPopup;
