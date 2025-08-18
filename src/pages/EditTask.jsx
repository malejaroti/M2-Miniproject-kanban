import { useParams } from "react-router";
import TaskForm from "../components/TaskForm";

function EditTask({ allTasks, setAllTasks }) {
  const allParams = useParams();
  const task_id = allParams["task-id"];
  // console.log(allParams, allTasks);
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
      <span className="text-2xl">Edit task</span>
      <TaskForm data={task} callback={updateTask} actionText={"Edit task"}/>
    </div>
  );
}
export default EditTask;
