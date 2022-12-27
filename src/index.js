import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import EmailAuthentication from "./pages/login/email_authentication";
import LoginAlert from "./pages/login/login_alert";
import LoginForm from "./pages/login/login_form";
import HeaderPopup from "./pages/party/header_popup";
import PartyDetail from "./pages/party/party_detail";
import PartyMain from "./pages/party/party_main";
import PartyModalChangeLeader from "./pages/party/party_modal_change_leader";
import PartyModalCorrection from "./pages/party/party_modal_correction";
import PartyModalCreate from "./pages/party/party_modal_create";
import PartyModalResign from "./pages/party/party_modal_resign";
import ReturnDetail01 from "./pages/return/return_detail01";
import ReturnDetail02 from "./pages/return/return_detail02";
import ReturnMain from "./pages/return/return_main";
import ReturnModalCreate01 from "./pages/return/return_modal_create01";
import ReturnModalCreate02 from "./pages/return/return_modal_create02";
import ReturnModalCreate03 from "./pages/return/return_modal_create03";
import ReturnModalDelete from "./pages/return/return_modal_delete";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginForm />,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/email",
    element: <EmailAuthentication />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
