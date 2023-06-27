import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, get } from "firebase/database";
import "./FriendsList.css";

function FriendsList({ userId }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const db = getDatabase();
    const userFriendsRef = ref(db, `users/${userId}/friends`);

    onValue(
      userFriendsRef,
      (snapshot) => {
        const friendsObjectFromFirebase = snapshot.val();
        const friendIds = Object.keys(friendsObjectFromFirebase || {});

        const friendsPromises = friendIds.map((friendId) => {
          const friendRef = ref(db, `users/${friendId}`);
          return get(friendRef);
        });

        Promise.all(friendsPromises)
          .then((friendsSnapshots) => {
            const friends = friendsSnapshots.map((snapshot) => snapshot.val());
            setFriends(friends);
          })
          .catch((error) => {
            console.error("Error: ", error);
          });
      },
      (error) => {
        console.error("Error: ", error);
      }
    );
  }, [userId]);

  return (
    <div className="friends-list-container">
      <h1>Friends List</h1>
      {friends.map((friend, index) => (
        <p key={index}>
          {friend.firstName} {friend.lastName}
        </p>
      ))}
    </div>
  );
}

export default FriendsList;
