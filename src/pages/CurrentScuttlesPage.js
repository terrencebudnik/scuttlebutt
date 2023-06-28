import React from "react";
import MainHeader from "../components/MainHeader";
import CurrentScuttles from "../components/CurrentScuttles";
import "./CurrentScuttlesPage.css";


function CurrentScuttlesPage() {
    return (
        <div className="current-scuttles-page">
            <MainHeader />
            <CurrentScuttles />
           
        </div>
    );
}

export default CurrentScuttlesPage;