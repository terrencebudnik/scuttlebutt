import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from "firebase/auth";
import "./App.css";

function App() {
  const auth = getAuth();
  const [user, loading] = useAuthState(auth);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!loading) {
      setIsLoaded(true);
    }
  }, [loading]);

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user ? <Homepage /> : <LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
