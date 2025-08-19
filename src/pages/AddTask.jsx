import TaskForm from "../components/TaskForm";

function AddTask({ setAllTasks, assignees, priorities, statuses }) {
  const dueDate = new Date();
  const daysToDueDate = 2;
  dueDate.setDate(dueDate.getDate() + daysToDueDate);
  const initialData = {
    id: new Date().getTime().toString(),
    title: "",
    description: "",
    assignee: "",
    status: "To Do",
    priority: "",
    dueDate: dueDate,
    createdDate: new Date()
  };

  const addNewTask = (newTask) => {
    setAllTasks((allTasks) => [...allTasks, newTask]);
  };

  return (
    <div className="text-sky-800">
      <span className="text-2xl text-sky-500 font-extrabold">Add a new task</span>
      <TaskForm data={initialData} onSubmit={addNewTask} actionText={"Add task"} assignees={assignees} priorities={priorities} statuses={statuses} />
    </div>
  );
}
export default AddTask;
