import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import FriendsPage from "./pages/FriendsPage";
import GroupsPage from "./pages/GroupsPage";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import { db } from "./firebaseConfig";
import { get, ref } from "firebase/database";
import "./App.css";

function App() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (user) {
      get(ref(db, `users/${user.uid}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserData(snapshot.val());
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [user]);

  useEffect(() => {
    if (!loading) {
      setIsLoaded(true);
    }
  }, [loading]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={userData && userData.firstName ? <Homepage /> : <LoginPage />}
          />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/groups" element={<GroupsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;