import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import { get, child } from "firebase/database";
import { ref, set } from "firebase/database";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginPageWelcome from "../components/LoginPageWelcome.js";
import LoginPagePhone from "../components/LoginPagePhone.js";
import LoginPageVerify from "../components/LoginPageVerify.js";
import LoginPageName from "../components/LoginPageName.js";
import "./LoginPage.css";

function LoginPage() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState("");
  const [code, setCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [userId, setUserId] = useState(null);
  const [stage, setStage] = useState("welcome");

  const formatPhoneNumber = (inputNumber) => {
    const cleaned = ("" + inputNumber).replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return "+1" + match[1] + match[2] + match[3];
    }
    return null;
  };

  const handleSubmitPhone = async (recaptchaVerifier) => {
    const formattedPhoneNumber = formatPhoneNumber(phone);
    if (formattedPhoneNumber) {
      signInWithPhoneNumber(getAuth(), formattedPhoneNumber, recaptchaVerifier)
        .then((result) => {
          setConfirmationResult(result);
          setStage("verification");
          set(ref(db, `users/${result.user.uid}`), { phone: formattedPhoneNumber }); // add this line
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
        setUserId(result.user.uid);
        setStage("name");
        set(ref(db, `users/${result.user.uid}`), { phone: formatPhoneNumber(phone) }); // save the phone number
      })
      .catch((error) => {
        console.log("Bad verification code", error);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), async (user) => {
      if (user) {
        const snapshot = await get(child(ref(db), `users/${user.uid}`));
        if (
          snapshot.exists() &&
          snapshot.val().firstName &&
          snapshot.val().lastName
        ) {
          navigate("/home");
        } else {
          setUserId(user.uid);
          setStage("name");
        }
      }
    });

    return unsubscribe;
  }, [navigate, db]);

  const handleSubmitName = async (event, firstName, lastName) => {
    event.preventDefault();

    // Update the user's data with firstName and lastName
    await set(ref(db, `users/${userId}`), {
      firstName,
      lastName,
      phone: formatPhoneNumber(phone), // include the phone number
    });

    navigate("/home");
  };

  const goToPhoneInput = () => {
    setStage("phoneInput");
  };

  return (
    <div className="login-page">
      <h1 className="login-header">Scuttlebutt</h1>
      <div className="login-container">
        {stage === "welcome" && <LoginPageWelcome onClick={goToPhoneInput} />}
        {stage === "phoneInput" && (
          <LoginPagePhone
            handleSubmitPhone={handleSubmitPhone}
            setPhone={setPhone}
          />
        )}
        {stage === "verification" && (
          <LoginPageVerify
            handleSubmitCode={handleSubmitCode}
            setCode={setCode}
          />
        )}
        {stage === "name" && (
          <LoginPageName
            handleSubmitName={handleSubmitName}
            setUserId={setUserId}
            navigate={navigate}
          />
        )}
      </div>
    </div>
  );
}

export default LoginPage;
