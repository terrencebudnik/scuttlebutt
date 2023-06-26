import React from "react";
import "./LoginPagePhone.css";

function LoginPagePhone({ setPhone, handleSubmitPhone }) {
  const handleChange = (event) => {
    setPhone(event.target.value);
  };

  return (
    
      <div className="login-phone-container">
          <h1 className="login-phone-title">Enter Your Phone Number</h1>
        <form className="login-phone-form" onSubmit={handleSubmitPhone}>
        <div className="phone-input-container">
        <div className="phone-prefix">+1</div>
          <input 
            className="phone-input"
            onChange={handleChange}
            type="text" 
            />
          
          </div>
          <button id="sign-in-button" type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    
  );
}

export default LoginPagePhone;
