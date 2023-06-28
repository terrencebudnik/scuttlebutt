import React from "react";
import MainHeader from "../components/MainHeader";
import SendScuttle from "../components/SendScuttle";
import "./ScuttleMainPage.css";

function ScuttleMainPage() {
  return (
    <div className="scuttle-main-page">
      <MainHeader />
      <SendScuttle />
    </div>
  );
}

export default ScuttleMainPage;
