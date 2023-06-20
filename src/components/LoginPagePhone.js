import React from 'react';

function LoginPagePhone({ phone, handlePhoneChange, handleSubmitPhone }) {
  return (
    <form onSubmit={handleSubmitPhone}>
      <input
        className="phone-input"
        type="text"
        placeholder="Phone number"
        value={phone}
        onChange={handlePhoneChange}
      />
      <button id="sign-in-button" type="submit" className="submit-button">
        Submit
      </button>
    </form>
  );
}

export default LoginPagePhone;
