import TaskForm from "../components/TaskForm";

function AddTask({ allTasks, setAllTasks }) {
  const initialData = {
    id: new Date().getTime(),
    title: "",
    description: "",
    assignee: "",
    status: "To Do",
    priority: "",
    dueDate: "",
    createdDate: new Date().toISOString().slice(0, 10),
  };
  const addNewTask = (newTask) => {
    console.log(newTask);
    setAllTasks((allTasks) => [...allTasks, newTask]);
  };

  return (
    <div className="text-slate-600">
      <span className="text-2xl text-cyan-600">Add a new task</span>
      <TaskForm data={initialData} callback={addNewTask} />
    </div>
  );
}
export default AddTask;
