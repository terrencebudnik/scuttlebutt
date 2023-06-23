import React from "react";
import "./FriendsPage.css";
import AddFriends from "../components/AddFriends";
import FriendsList from "../components/FriendsList";

function FriendsPage() {
  return (
    <div className="friends-page-container">
      <div className="friends-page-card">
        <AddFriends />
        <FriendsList />
      </div>
    </div>
  );
}

export default FriendsPage;
