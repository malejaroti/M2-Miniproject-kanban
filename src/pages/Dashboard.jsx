import { Link } from "react-router";
import List from "../components/List";
import Column from "../components/Column";

function Dashboard({ allTasks }) {
  return (
    <div className="dashboard flex h-full flex-col">
      <Link to="/add-task" className="self-end">
        <button className="btn-add border-2 bg-emerald-700 text-green-300 shadow-md shadow-green-600 hover:relative hover:top-0.5 hover:left-0.5 font-semibold px-5 py-2 rounded-2xl cursor-pointer">Add task</button>
      </Link>

      <div className="columns-container h-9/10 flex flex-1 max-h-160 gap-6 mt-2">
        <Column columnName={"To-Do"}>
          <List allTasks={allTasks} />
        </Column>
        <Column columnName={"Doing"}></Column>
        <Column columnName={"Done"}></Column>
      </div>
    </div>
  );
}
export default Dashboard;
