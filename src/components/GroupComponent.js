import React from "react";
import { Link } from "react-router-dom";
import "./GroupComponent.css";

function GroupComponent() {
  return (
    <div className="group-component-container">
      <div className="group-component-card">
        <Link to="/groups">
          <button type="click" className="group-component-button">
            Groups
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GroupComponent;
