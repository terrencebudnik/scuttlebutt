import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./AccountPage.css";

function AccountPage() {
    const navigate = useNavigate();
  const auth = getAuth();
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      console.log(error);
    });
  };
    return (
        <div className="account-page">
        <h1>Account Page</h1>
        <button className="btn btn-secondary btn-md" onClick={handleLogout}>
        LOGOUT
      </button>
        </div>
    );
    }

export default AccountPage;
