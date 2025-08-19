import { Link } from "react-router";
import List from "../components/List";
import Column from "../components/Column";

function Dashboard({ allTasks, setAllTasks, deleteTask }) {
  return (
    <div className="dashboard flex h-full flex-col gap-4">
      <Link to="/add-task" className="self-end">
        <button className="btn-add border-2 bg-emerald-700 text-green-300 shadow-md shadow-green-600 hover:relative hover:top-0.5 hover:left-0.5 font-semibold px-5 py-2 mr-2 rounded-2xl cursor-pointer">Add task</button>
      </Link>

      <div className="columns-container h-9/10 flex flex-1 max-h-160 gap-6 mt-2">
        <Column columnName={"To-Do"} allTasks={allTasks} setAllTasks={setAllTasks}>
          <List allTasks={allTasks.filter((task) => task.status === "To Do")} onDeleteTask={deleteTask}/>
        </Column>
        <Column columnName={"Doing"} allTasks={allTasks} setAllTasks={setAllTasks}>
          <List allTasks={allTasks.filter((task) => task.status === "In Progress")} onDeleteTask={deleteTask} />
        </Column>
        <Column columnName={"Done"} allTasks={allTasks} setAllTasks={setAllTasks}>
          <List allTasks={allTasks.filter((task) => task.status === "Done")} onDeleteTask={deleteTask} />
        </Column>
      </div>
    </div>
  );
}
export default Dashboard;
