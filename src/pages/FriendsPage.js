import React, { useContext } from "react";
import { AuthContext } from "../AuthProvider";
import AddFriends from "../components/AddFriends";
import FriendsList from "../components/FriendsList";
import "./FriendsPage.css";

function FriendsPage() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="friends-page">
      <AddFriends />
      {currentUser && <FriendsList userId={currentUser.uid} />}
    </div>
  );
}

export default FriendsPage;
