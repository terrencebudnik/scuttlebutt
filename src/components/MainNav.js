import React from "react";
import { Link } from "react-router-dom";
import accountIcon from "../images/accountIcon.svg"
import homeIcon from "../images/homeIcon.svg"
import contactsIcon from "../images/contactsIcon.svg"
import groupsIcon from "../images/groupsIcon.svg"
import "./MainNav.css";

function MainNav() {
    return (
        <nav className="main-nav">
            <ul className="main-nav-list">
                <li className="main-nav-item">
                    <Link to="/home" className="main-nav-link">
                        <img src={homeIcon} alt="Home" className="main-nav-icon" />
                        
                    </Link>
                </li>
                <li className="main-nav-item">
                    <Link to="/friends" className="main-nav-link">
                        <img src={contactsIcon} alt="Contacts" className="main-nav-icon" />
                       
                    </Link>
                </li>
                <li className="main-nav-item">
                    <Link to="/groups" className="main-nav-link">
                        <img src={groupsIcon} alt="Groups" className="main-nav-icon" />
                       
                    </Link>
                </li>
                <li className="main-nav-item">
                    <Link to="/account" className="main-nav-link">
                        <img src={accountIcon} alt="Account" className="main-nav-icon" />
                        
                    </Link>
                </li>
            </ul>

        </nav>
    );
}

export default MainNav;