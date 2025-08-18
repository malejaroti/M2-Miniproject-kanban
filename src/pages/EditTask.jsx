import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import TaskForm from "../components/TaskForm";

function EditTask({ allTasks, setAllTasks }) {
  const allParams = useParams();
  const task_id = allParams["task-id"];
  let taskIndex = allTasks.findIndex((task) => task.id === task_id);
  let task = allTasks[taskIndex];

  const updateTask = (updatedTask) => {
    // const createdDate = new Date().toISOString().slice(0, 10);

    // const newTask = { title, description, assignee, status, priority, dueDate, createdDate };
    // setAllTasks((allTasks) => [...allTasks, newTask]);
    setAllTasks((allTasksState) =>
      allTasksState.map((eachTask, index) => {
        return index === taskIndex ? updatedTask : eachTask;
      })
    );
  };
  return (
    <div>
      <span className="text-2xl">Edit task</span>
      <TaskForm data={task} updateTask={updateTask} />
    </div>
  );
}
export default EditTask;
