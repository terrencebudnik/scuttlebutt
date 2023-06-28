import React, { useState, useEffect } from "react";
import { app } from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import MainHeader from "../components/MainHeader";
import AddFriends from "../components/AddFriends";
import FriendsList from "../components/FriendsList";
import "./FriendsPage.css";

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
      <MainHeader />
      <AddFriends />
      {currentUser && <FriendsList userId={currentUser.uid} />}
    </div>
  );
}

export default FriendsPage;
