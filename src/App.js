import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>What's the Scuttlebutt?</h1>
        <p>Scuttlebutt is a decentralized social network that works without servers. It lets you sync your data and messages with your friends.</p>
        <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        <Route exact path="/" element={<Homepage />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
