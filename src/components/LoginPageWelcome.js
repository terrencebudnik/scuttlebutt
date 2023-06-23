import React from "react";
import "./LoginPageWelcome.css";

function LoginPageWelcome({ onClick }) {
    return (
      <div className="login-welcome-container">
        <h1 className="login-welcome-header">What's the Scuttlebutt?</h1>
           <button className="login-welcome-button" onClick={onClick} >Find Out</button>
        </div>
    );
}

export default LoginPageWelcome;