import React from "react";
import { auth } from "../firebaseConfig";
import MainNav from "../components/MainNav";
import GroupComponent from "../components/GroupComponent";
import FriendsComponent from "../components/FriendsComponent";
import StartScuttle from "../components/StartScuttle";
import "./Homepage.css";

function Homepage() {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div className="homepage-container">
      <MainNav />
      <FriendsComponent />
      <GroupComponent />
      <StartScuttle />
      <button className="btn btn-secondary btn-md" onClick={handleLogout}>
        LOGOUT
      </button>
    </div>
  );
}

export default Homepage;
