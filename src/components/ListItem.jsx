import { Link } from "react-router";

function ListItem({ task }) {
  return (
    <>
      <div className="card w-full rounded-2xl my-3 p-3 bg-indigo-900 border-2 border-indigo-600">
        <p className="text-lg font-extrabold">{task.title}</p>
        <p className="text-base">{task.assignee}</p>
        <p>{task.status === "Done" ? "✔️" : "❌"}</p>
        <Link to={`/edit-task/${task.id}`}>
          <button className="btn-edit border-2 cursor-pointer">Edit task</button>
        </Link>
        <button className="btn-delete border-2 p-2 rounded-lg bg-rose-900 mx-5 cursor-pointer shadow-md shadow-rose-800 hover:relative hover:top-0.5 hover:left-0.5">Delete</button>
      </div>
    </>
  );
}
export default ListItem;
