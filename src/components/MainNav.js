import React from "react";
import { Link } from "react-router-dom";
import homeIcon from "../images/homeIcon.svg";
import contactsIcon from "../images/contactsIcon.svg";
import startScuttleButton from "../images/startScuttleButton.svg";
import inboxIcon from "../images/inboxIcon.svg";
import accountIcon from "../images/accountIcon.svg";
import "./MainNav.css";

function MainNav() {
  return (
    <nav className="main-nav">
      <div className="left-links">
        <ul className="main-nav-list">
          <li className="main-nav-item">
            <Link to="/home" className="main-nav-link">
              <img src={homeIcon} alt="Home" className="main-nav-icon" />
            </Link>
          </li>
          <li className="main-nav-item-contacts">
            <Link to="/friends" className="main-nav-link">
              <img
                src={contactsIcon}
                alt="Contacts"
                className="main-nav-icon"
              />
            </Link>
          </li>
        </ul>
      </div>

      <Link to="/scuttle" className="main-nav-start-link">
        <div className="border" />
        <img src={startScuttleButton} alt="Start" className="start-nav-icon" />
      </Link>

      <div className="right-links">
        <ul className="main-nav-list">
          <li className="main-nav-item-inbox">
            <Link to="/current-scuttles" className="main-nav-link">
              <img src={inboxIcon} alt="Inbox" className="main-nav-icon" />
            </Link>
          </li>
          <li className="main-nav-item">
            <Link to="/account" className="main-nav-link">
              <img src={accountIcon} alt="Account" className="main-nav-icon" />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default MainNav;
