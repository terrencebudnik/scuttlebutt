import React, { useEffect, useState } from "react";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue, off, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import "./AccountPage.css";

function AccountPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();
  const db = getDatabase();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      const userRef = ref(db, "users/" + user.uid); 
      const listener = onValue(userRef, (snapshot) => {
        const userData = snapshot.val();
        if (userData) {
          setFirstName(userData.firstName);
          setLastName(userData.lastName);
         setPhone(userData.phone);
        }
      }, {
        onlyOnce: true,
      });

      return () => {
        off(userRef, 'value', listener);
      };
    }
  }, [auth, db]);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="account-page">
      <h1 className="account-page-header">Scuttlebut</h1>
      <div className="account-container">
        <h2 className="account-header">Account Details</h2>
        <h3 className="account-name">Name: {firstName} {lastName}</h3>
        <h3 className="account-phone">Phone: {phone}</h3>
        <br />
        <br />
        <br />

        <button className="logout-button" onClick={handleLogout}>
          LOGOUT
        </button>
      </div>
    </div>
  );
}

export default AccountPage;
