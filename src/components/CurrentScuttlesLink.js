import React from "react";
import { Link } from "react-router-dom";
import "./CurrentScuttlesLink.css";

function CurrentScuttlesLink() {
  return (
    <div className="current-scuttles-link-container">
      <Link to="/current-scuttles" className="current-scuttles-link-link">
        <h1>Scuttles</h1>
      </Link>
    </div>
  );
}

export default CurrentScuttlesLink;
