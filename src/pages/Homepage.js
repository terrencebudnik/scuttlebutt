import React from "react";
import MainHeader from "../components/MainHeader";
import CurrentScuttlesLink from "../components/CurrentScuttlesLink";
import StartScuttle from "../components/StartScuttle";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="homepage">
      <MainHeader />
      <CurrentScuttlesLink />
      <StartScuttle />
    </div>
  );
}

export default Homepage;
