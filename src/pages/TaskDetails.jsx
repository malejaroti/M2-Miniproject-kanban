import { useParams } from "react-router";

function TaskDetails() {
  const { task } = useParams();
  
  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.title}</p>
      <p>{task.description}</p>
      <p>{task.assigenee}</p>
      <p>{task.status === "Done"? "✔️":"❌"}</p>
    </div>
  )
}
export default TaskDetails