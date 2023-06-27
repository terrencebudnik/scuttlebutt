import React, { useState, useEffect } from "react";
import { app } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import "./FriendsPage.css";
import AddFriends from "../components/AddFriends";
import FriendsList from "../components/FriendsList";

function FriendsPage() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const auth = getAuth(app);
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    const userFriendsRef = ref(db, `users/${userId}/friends`);

    const fetchFriends = async () => {
      onValue(userFriendsRef, (snapshot) => {
        const friendIds = snapshot.val();
        const promises = [];
        for (let id in friendIds) {
          promises.push(onValue(ref(db, `users/${id}`), (snapshot) => {
            const user = snapshot.val();
            user.id = id;
            return user;
          }));
        }
        Promise.all(promises).then(setFriends);
      });
    };

    fetchFriends();
  }, []);

  return (
    <div className="friends-page">
      <div className="friends-page-container">
        <AddFriends />
        <FriendsList friends={friends} />
      </div>
    </div>
  );
}

export default FriendsPage;
