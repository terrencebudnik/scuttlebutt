import React from "react";
import { app } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";

import "./FriendsComponent.css";

function FriendsComponent() {
  const auth = getAuth(app);
   const handleLog = () => {
    console.log(auth.currentUser.uid); 
   }


  return (
    <div className="add-friends-component-container">
      <div className="add-friends-component-card">
        <Link to="/friends">
                    <button onClick={handleLog} type="click" className="add-friends-component-button">
            Friends
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FriendsComponent;
