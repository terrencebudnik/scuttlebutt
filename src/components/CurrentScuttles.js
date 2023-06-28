import React, { useState, useEffect } from "react";
import { app } from "../firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue } from "firebase/database";
import "./CurrentScuttles.css";

function CurrentScuttles() {
  const [scuttles, setScuttles] = useState([]);
  const [openedScuttleIndex, setOpenedScuttleIndex] = useState(null);
  const [userId, setUserId] = useState(null);
  const [usersData, setUsersData] = useState({});
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userId) {
      const db = getDatabase();
      const usersRef = ref(db, "users");

      onValue(usersRef, (snapshot) => {
        setUsersData(snapshot.val());
        setLoading(false);
      });
    }
  }, [userId]);

  useEffect(() => {
    if (!loading && userId) {
      const db = getDatabase();
      const scuttlesRef = ref(db, "scuttles");

      onValue(
        scuttlesRef,
        (snapshot) => {
          const scuttlesObjectFromFirebase = snapshot.val();
          if (scuttlesObjectFromFirebase) {
            const receivedScuttles = Object.values(
              scuttlesObjectFromFirebase
            ).filter((scuttle) => scuttle.recipient === userId);

            const scuttlesWithUserNames = receivedScuttles.map((scuttle) => {
              return {
                ...scuttle,
                sender: usersData[scuttle.sender]?.firstName || scuttle.sender,
              };
            });

            setScuttles(scuttlesWithUserNames);
          }
        },
        (error) => {
          console.error("Error: ", error);
        }
      );
    }
  }, [loading, userId, usersData]);

  const handleScuttleClick = (index) => {
    setOpenedScuttleIndex(index);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="current-scuttles-container">
      <h1 className="current-scuttles-title">Current Scuttles</h1>
      <div className="current-scuttles-list-container">
        {scuttles.map((scuttle, index) => (
          <p key={index} onClick={() => handleScuttleClick(index)}>
            {scuttle.sender} started a scuttlebutt...
            {openedScuttleIndex === index && <span>{scuttle.message}</span>}
          </p>
        ))}
      </div>
    </div>
  );
  
}

export default CurrentScuttles;

