import { useState } from "react";
import { app } from "../firebaseConfig";
import { getAuth } from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import checkIcon from "../images/checkIcon.svg";
import "./AddFriends.css";

function AddFriends() {
  const [name, setName] = useState("");
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

  const handleAddFriend = async (id) => {
    const userId = auth.currentUser.uid;
    await Promise.all([
      set(ref(db, `users/${userId}/friends/${id}`), true),
      set(ref(db, `users/${id}/friends/${userId}`), true),
    ]);
  };

  const handleClearSearch = () => {
    setName("");
    setResults([]);
  };

  return (
    <div className="add-friends-container">
      <h1 className="add-friends-title">Add Friends</h1>
      <form onSubmit={handleSearch}>
        <div className="add-friends-form">
          <h3>Search by Name: </h3>
          <input
            type="text"
            className="add-friends-input"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              handleSearch(e);
            }}
          />
          <button
            className="clear-search-button"
            type="button"
            onClick={handleClearSearch}
          >
            Clear Search
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
              onClick={() => handleAddFriend(user.id)}
            >
              <img
                className="add-friend-image"
                src={checkIcon}
                alt="add friend"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddFriends;
