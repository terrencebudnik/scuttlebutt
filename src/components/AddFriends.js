import "./AddFriends.css";

function AddFriends() {
  return (
    <div className="add-friends-container">
      <div className="add-friends-card">
        <h1>Add Friends</h1>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddFriends;
