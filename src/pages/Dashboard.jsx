import { Link } from "react-router";
import List from "../components/List";

function Dashboard({ allTasks }) {
  return (
    <div className="dashboard flex flex-col">
      <Link to="/add-task" className="self-end">
        <button className="btn-add border-2 bg-emerald-700 text-green-300 shadow-md shadow-green-600 hover:relative hover:top-0.5 hover:left-0.5 font-semibold px-5 py-2 rounded-2xl cursor-pointer">Add task</button>
      </Link>
      <List allTasks={allTasks}/>
    </div>
  );
}
export default Dashboard;
