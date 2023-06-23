import React, { useState } from "react";
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

  const formatPhoneNumber = (inputNumber) => {
    const cleaned = ("" + inputNumber).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "+1" + match[1] + match[2] + match[3];
    }
    return null;
  };

  const handlePhoneChange = (inputs) => {
    const phoneValue = inputs["Phone Number"];
    console.log("Phone value from Keyboard: ", phoneValue);
    setPhone(phoneValue);
  };
  
  const handleCodeChange = (inputs) => {
    const codeValue = inputs["Verification Code"];
    console.log("Code value from Keyboard: ", codeValue);
    setCode(codeValue);
  };



  const handleSubmitPhone = async (event) => {
    event.preventDefault();
    console.log("Phone before formatting: ", phone); // Add this line
    const formattedPhoneNumber = formatPhoneNumber(phone);
    if (formattedPhoneNumber) {
      if (!window.recaptchaVerifier) {
        window.recaptchaVerifier = new RecaptchaVerifier(
          "sign-in-button",
          {
            size: "invisible",
            callback: (response) => {},
          },
          getAuth(app)
        );
      }

      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(getAuth(), formattedPhoneNumber, appVerifier)
        .then((result) => {
          setConfirmationResult(result);
          setStage("verification");
        })
        .catch((error) => {
          console.log("SMS not sent", error);
        });
    } else {
      console.log("Invalid phone number");
    }
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