import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./AuthProvider";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import CurrentScuttlesPage from "./pages/CurrentScuttlesPage";
import ScuttleMainPage from "./pages/ScuttleMainPage";
import FriendsPage from "./pages/FriendsPage";
import GroupsPage from "./pages/GroupsPage";
import MainNav from "./components/MainNav";
import AccountPage from "./pages/AccountPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Homepage />} />
            <Route path="/current-scuttles" element={<CurrentScuttlesPage />} />
            <Route path="/scuttle" element={<ScuttleMainPage />} />
            <Route path="/friends" element={<FriendsPage />} />
            <Route path="/groups" element={<GroupsPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </AuthProvider>
        <MainNav />
      </Router>
    </div>
  );
}

export default App;
