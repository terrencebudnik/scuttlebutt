import React from "react";
import MainHeader from "../components/MainHeader";
import StartScuttle from "../components/StartScuttle";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <MainHeader />
      <StartScuttle />
    </div>
  );
}

export default Homepage;
