import React, { useState, useEffect } from 'react';
import { app } from '../firebaseConfig.js';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import LoginNav from '../components/LoginNav.js';
import './LoginPage.css';

function LoginPage() {
    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [confirmationResult, setConfirmationResult] = useState(null);
    const navigate = useNavigate();  // useNavigate hook for navigation

    useEffect(() => {
        window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved - Not doing anything here
            }
        }, getAuth(app));
    }, []);

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleCodeChange = (event) => {
        setCode(event.target.value);
    }

    const handleSubmitPhone = async (event) => {
        event.preventDefault();
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(getAuth(), phone, appVerifier)
        .then((result) => {
            setConfirmationResult(result);
        })
        .catch((error) => {
            console.log("SMS not sent", error);
        });
    }

    const handleSubmitCode = async (event) => {
        event.preventDefault();
        confirmationResult.confirm(code)
        .then((result) => {
            console.log("User signed in", result.user);
            navigate("/");
        })
        .catch((error) => {
            console.log("Bad verification code", error);
        });
    }

    return (
        <div className="login-container">
            <LoginNav />
            <form onSubmit={handleSubmitPhone}>
                <input
                    className="phone-input"
                    type="text"
                    placeholder="Phone number"
                    value={phone}
                    onChange={handlePhoneChange}
                />
                <button id="sign-in-button" type="submit" className="submit-button">
                    Send Verification Code
                </button>
            </form>

            <form onSubmit={handleSubmitCode}>
                <input
                    className="code-input"
                    type="text"
                    placeholder="Verification code"
                    value={code}
                    onChange={handleCodeChange}
                />
                <button type="submit" className="submit-button">
                    Verify Code
                </button>
            </form>
        </div>
    );
}

export default LoginPage;
