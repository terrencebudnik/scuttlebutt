import AddGroup from "../components/AddGroup";
import GroupsList from "../components/GroupsList";
import "./GroupsPage.css";

function GroupsPage() {
  return (
    <div className="groups-page-container">
      <div className="groups-page-card">
        <AddGroup />
        <GroupsList />
      </div>
    </div>
  );
}

export default GroupsPage;
