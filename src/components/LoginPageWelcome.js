import React from "react";
import "./LoginPageWelcome.css";

function LoginPageWelcome({ onClick }) {
    return (
      <div className="login-welcome-container">
           <button className="login-welcome-button" onClick={onClick} >What's the Scuttlebutt?</button>
        </div>
    );
}

export default LoginPageWelcome;