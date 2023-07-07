import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import AddFriends from "../components/AddFriends";
import FriendsList from "../components/FriendsList";
import groupsIcon from "../images/groupsIcon.svg";
import "./FriendsPage.css";

function FriendsPage() {
  const { currentUser } = useContext(AuthContext);

  return (
    
    <div className="friends-page">
      <AddFriends />
      {currentUser && <FriendsList userId={currentUser.uid} />}
   
    <Link to="/groups">
            <img src={groupsIcon} alt="Groups" className="main-nav-icon" />
          </Link>
    </div>
    
    
  );
}

export default FriendsPage;
