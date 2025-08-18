import { Link } from "react-router";

function ListItem({ task }) {
  return (
    <>
      <div className="card">
        <p>{task.title}</p>
        <p>{task.assignee}</p>
        <p>{task.status === "Done" ? "✔️" : "❌"}</p>
        <Link to={`/edit-task/${task.id}`}>
          <button className="btn-edit border-2">Edit task</button>
        </Link>
        <button className="btn-delete border-2">Delete</button>
      </div>
    </>
  );
}
export default ListItem;
