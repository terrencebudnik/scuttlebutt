import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Homepage from "./pages/Homepage";
import FriendsPage from "./pages/FriendsPage";
import GroupsPage from "./pages/GroupsPage";
import MainNav from "./components/MainNav";
import AccountPage from "./pages/AccountPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/friends" element={<FriendsPage />} />
          <Route path="/groups" element={<GroupsPage />} />
          <Route path="/account" element={<AccountPage />} />
        </Routes>
        <MainNav />
      </Router>
    </div>
  );
}

export default App;
