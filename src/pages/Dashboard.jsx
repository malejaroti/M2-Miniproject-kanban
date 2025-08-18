import { Link } from "react-router";
import List from "../components/List";

function Dashboard({ allTasks }) {
  return (
    <div>
      <Link to="/add-task">
        <button className="btn-add border-2 bg-slate-500">Add task</button>
      </Link>
      <List allTasks={allTasks} />
    </div>
  );
}
export default Dashboard;
