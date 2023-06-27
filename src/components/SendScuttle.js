import { useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import "./SendScuttle.css";

function SendScuttle() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFriend, setSelectedFriend] = useState({id: "", name: ""});
  const [results, setResults] = useState([]);

  const auth = getAuth(app);

  const db = getDatabase();

  const handleSearch = (event) => {
    event.preventDefault();

    const usersRef = ref(db, "/users");
    onValue(usersRef, (snapshot) => {
      const users = snapshot.val();
      const results = [];
      for (let id in users) {
        if (
          users[id].firstName.toLowerCase().includes(name.toLowerCase()) ||
          users[id].lastName.toLowerCase().includes(name.toLowerCase())
        ) {
          results.push({ id, ...users[id] });
        }
      }
      setResults(results);
    });
  };

  const handleSelectFriend = async (id, name) => {
    setSelectedFriend({id, name});
  };

  const handleSendScuttle = async (event) => {
    event.preventDefault();
    const userId = auth.currentUser.uid;
    const scuttleId = `${userId}-${selectedFriend.id}-${Date.now()}`; // generate a unique ID for the scuttle
    await set(ref(db, `scuttles/${scuttleId}`), {
      sender: userId,
      recipient: selectedFriend.id,
      message,
    });
    setMessage(""); // reset the message input
    setSelectedFriend({id: "", name: ""}); // reset the selected friend
  };


  return (
    <div className="send-scuttle-container">
      <h1 className="send-scuttle-title">Start the Scuttlebut</h1>
      <form onSubmit={handleSendScuttle}>
        <div className="send-scuttle-form">
          <textarea 
            type="text" 
            className="send-scuttle-input" 
            value={message}
            onChange={(e) => setMessage(e.target.value)} 
          />
          <h2 className="send-to">Send to:</h2>
          <input
            type="text"
            className="send-scuttle-friend"
            value={selectedFriend.name}
            onChange={(e) => {
              setName(e.target.value);
              handleSearch(e);
            }}
          />
          <button className="send-scuttle-button" type="submit">
            Send
          </button>
        </div>
      </form>
      <div className="search-results-container">
        {results.map((user) => (
          <div className="single-search-result" key={user.id}>
            {" "}
            <p>
              {user.firstName} {user.lastName}
            </p>
            <button
              className="add-friend-button"
              onClick={() => handleSelectFriend(user.id, `${user.firstName} ${user.lastName}`)}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SendScuttle;

