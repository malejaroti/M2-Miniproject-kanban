import TaskForm from "../components/TaskForm";

function AddTask({ setAllTasks }) {
  const initialData = {
    id: new Date().getTime().toString(),
    title: "",
    description: "",
    assignee: "",
    status: "To Do",
    priority: "",
    dueDate: "",
    createdDate: new Date().toISOString().slice(0, 10),
  };

  const addNewTask = (newTask) => {
    setAllTasks((allTasks) => [...allTasks, newTask]);
  };

  return (
    <div className="text-sky-800">
      <span className="text-2xl text-sky-500 font-extrabold">Add a new task</span>
      <TaskForm data={initialData} onSubmit={addNewTask} actionText={"Add task"} />
    </div>
  );
}
export default AddTask;
