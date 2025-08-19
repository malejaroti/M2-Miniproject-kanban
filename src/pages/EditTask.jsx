import { useParams } from "react-router";
import TaskForm from "../components/TaskForm";

function EditTask({ allTasks, setAllTasks, assignees, priorities, statuses }) {
  const allParams = useParams();
  const task_id = allParams["task-id"];
  let taskIndex = allTasks.findIndex((task) => task.id === task_id);
  let task = allTasks[taskIndex];

  const updateTask = (updatedTask) => {
    setAllTasks((allTasksState) =>
      allTasksState.map((eachTask, index) => {
        return index === taskIndex ? updatedTask : eachTask;
      })
    );
  };

  return (
    <div>
      <TaskForm data={task} onSubmit={updateTask} actionText={"Edit task"} assignees={assignees} priorities={priorities} statuses={statuses}/>
    </div>
  );
}
export default EditTask;
