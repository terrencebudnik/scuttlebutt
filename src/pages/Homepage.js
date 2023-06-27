import React from "react";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import MainNav from "../components/MainNav";
import GroupComponent from "../components/GroupComponent";
import FriendsComponent from "../components/FriendsComponent";
import StartScuttle from "../components/StartScuttle";
import "./Homepage.css";

function Homepage() {
  const navigate = useNavigate();
  const handleLogout = () => {
    auth.signOut();

    navigate("/");

  };

  return (
    <div className="homepage">
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
