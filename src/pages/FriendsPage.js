import React, { useState, useEffect } from "react";
import { app } from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./FriendsPage.css";
import AddFriends from "../components/AddFriends";
import FriendsList from "../components/FriendsList";

function FriendsPage() {
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthReady(true);
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="friends-page">
      <div className="friends-page-container">
        <AddFriends />
        {currentUser && <FriendsList userId={currentUser.uid} />}
      </div>
    </div>
  );
}

export default FriendsPage;
