import React, { useEffect, useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, onValue, off, set } from "firebase/database";
import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import "./AccountPage.css";

function AccountPage() {
  const [userId, setUserId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const db = getDatabase();

  useEffect(() => {
    if (userId) {
      const userRef = ref(db, "users/" + userId); 
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
  }, [db, userId]); // Add userId as a dependency here
  

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
     <MainHeader />
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
