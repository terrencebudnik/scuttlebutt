import "./FriendsList.css";

function FriendsList({ friends }) {
  return (
    <div className="friends-list-container">
      <h1>Friends List</h1>
      {friends.map(friend => (
        <p key={friend.id}>{friend.firstName} {friend.lastName}</p>
      ))}
    </div>
  );
}

export default FriendsList;
