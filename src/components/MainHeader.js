import React from "react";
import profileImage from "../images/profileImage.svg";
import "./MainHeader.css";

function MainHeader() {
  return (
    <div className="main-nav-container">
      {/* <img src={profileImage} style={{ height: "30%" }} alt="profile" /> */}
      <div className="main-nav-header">
        <h1>Scuttlebutt</h1>
      </div>
    </div>
  );
}

export default MainHeader;
