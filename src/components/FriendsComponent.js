import React from "react";
import { Link } from "react-router-dom";

import "./FriendsComponent.css";

function FriendsComponent() {
  return (
    <div className="add-friends-component-container">
      <div className="add-friends-component-card">
        <Link to="/friends">
          <button type="click" className="add-friends-component-button">
            Friends
          </button>
        </Link>
      </div>
    </div>
  );
}

export default FriendsComponent;
