import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

function EditTask({ allTasks, setAllTasks }) {
  const allParams = useParams();
  const task_id = allParams["task-id"];
  // let task = allTasks.find((task) => task.id === task_id);
  let taskIndex = allTasks.findIndex((task) => task.id === task_id);
  let task = allTasks[taskIndex];
  let navigate = useNavigate();

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.assignee);
  const [status, setStatus] = useState(task.status);
  const [priority, setPriority] = useState(task.priority);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSubmit = (event) => {
    event.preventDefault();
    const createdDate = new Date().toISOString().slice(0, 10);

    // const newTask = { title, description, assignee, status, priority, dueDate, createdDate };
    task = { id: task_id, title, description, assignee, status, priority, dueDate, createdDate };
    // setAllTasks((allTasks) => [...allTasks, newTask]);
    setAllTasks((allTasksState) =>
      allTasksState.map((eachTask, index) => {
        return index === taskIndex ? task : eachTask;
      })
    );

    console.log(allTasks);
    navigate("/");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="text-red-600 border-2">
        <h1 className="text-2xl">Edit task</h1>
        <div>
          <label className="block w-400">
            Task title
            <input className="w-400" name="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label className="block w-400">
            Description
            <input className="w-400" name="description" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label className="block w-400">
            Assignee
            <input className="w-400" name="assignee" type="text" placeholder="Assignee name" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
          </label>
          <label className="block w-400">
            Status
            <input className="w-400" name="status" type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
          </label>
          <label className="block w-400">
            Priority
            <input className="w-400" name="priority" type="text" placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} />
          </label>
          <label className="block w-400">
            Due Date
            <input className="w-400" datepicker="" name="dueDate" type="text" placeholder="Due date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </label>

          <button className="bg-slate-300 p-5 text-black" type="submit">
            Edit Task
          </button>
        </div>
      </form>
    </div>
  );
}
export default EditTask;
