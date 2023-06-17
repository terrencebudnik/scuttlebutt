import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth } from 'firebase/auth';
import './App.css';

function App() {
  const auth = getAuth();
  const [user] = useAuthState(auth); // gets the current user
  
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* If the user is logged in, render the Homepage, otherwise render the LoginPage */}
          <Route path="/" element={user ? <Homepage /> : <LoginPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
