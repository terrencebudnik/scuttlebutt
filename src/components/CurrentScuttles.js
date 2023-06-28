import React, { useState, useEffect } from "react";
import { app } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import "./CurrentScuttles.css";

function CurrentScuttles() {
  const [scuttles, setScuttles] = useState([]);

  const auth = getAuth(app);

  const userId = auth.currentUser.uid;

  useEffect(() => {
    const db = getDatabase();
    const userScuttlesRef = ref(db, `scuttles/recipient/${userId}`);

    onValue(
      userScuttlesRef,
      (snapshot) => {
        const scuttlesObjectFromFirebase = snapshot.val();
        const scuttlesIds = Object.keys(scuttlesObjectFromFirebase || {});

        const scuttlesPromises = scuttlesIds.map((scuttleId) => {
          const scuttleRef = ref(db, `users/${scuttleId}`);
          return get(scuttleRef);
        });

        Promise.all(scuttlesPromises)
          .then((scuttlesSnapshots) => {
            const scuttles = scuttlesSnapshots.map((snapshot) =>
              snapshot.val()
            );
            setFriends(scuttles);
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
    <div className="current-scuttles-container">
      <h1 className="current-scuttles-title">Current Scuttles</h1>
      <div className="current-scuttles-list-container">

      {scuttles.map((scuttle, index) => (
          <p key={index}>{scuttle.message}</p>
          ))}
          </div>
    </div>
  );
}

export default CurrentScuttles;
