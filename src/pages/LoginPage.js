import React, { useState, useEffect } from "react";
import { app } from "../firebaseConfig.js";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginHeader from "../components/LoginHeader.js";
import LoginPageWelcome from "../components/LoginPageWelcome.js";
import LoginPagePhone from "../components/LoginPagePhone.js";
import LoginPageVerify from "../components/LoginPageVerify.js";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [stage, setStage] = useState("welcome");

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleSubmitPhone = async (event) => {
    event.preventDefault();

    // Setup recaptcha if it is not already
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
            // reCAPTCHA solved - Not doing anything here
          },
        },
        getAuth(app)
      );
    }

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(getAuth(), phone, appVerifier)
      .then((result) => {
        setConfirmationResult(result);
        setStage("verification");
      })
      .catch((error) => {
        console.log("SMS not sent", error);
      });
  };

  const handleSubmitCode = async (event) => {
    event.preventDefault();
    confirmationResult
      .confirm(code)
      .then((result) => {
        console.log("User signed in", result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log("Bad verification code", error);
      });
  };

  const goToPhoneInput = () => {
    setStage("phoneInput");
    console.log(stage);
  };
  return (
    <>
      <LoginHeader />
      <div className="login-container">
      {stage === "welcome" && <LoginPageWelcome onClick={goToPhoneInput} />}
      {stage === "phoneInput" && (
        <LoginPagePhone
          phone={phone}
          handlePhoneChange={handlePhoneChange}
          handleSubmitPhone={handleSubmitPhone}
        />
      )}
      {stage === "verification" && (
        <LoginPageVerify
          code={code}
          handleCodeChange={handleCodeChange}
          handleSubmitCode={handleSubmitCode}
        />
      )}
      </div>
    </>
  );
}

export default LoginPage;
