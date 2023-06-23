import "./AddGroup.css";

function AddGroup() {
  return (
    <div className="add-group-container">
      <div className="add-group-card">
        <h1>Add Group</h1>
        <form>
          <label htmlFor="groupName">Group Name</label>
          <input type="text" placeholder="Group Name" name="groupName" />
          <button type="submit">Add Group</button>
        </form>
      </div>
    </div>
  );
}

export default AddGroup;
