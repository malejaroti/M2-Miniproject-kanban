import { useState } from "react";

function AddTask({ setAllTasks }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("To Do");
  const [priority, setPriority] = useState("");
  const [dueDate, setDueDate] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const createdDate = new Date().toISOString().slice(0, 10);

    const newTask = { title, description, assignee, status, priority, dueDate, createdDate };
    setAllTasks((allTasks) => [...allTasks, newTask]);

    setTitle("");
    setDescription("");
    setAssignee("");
    setStatus("To Do");
    setPriority("");
    setDueDate({});
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-slate-600">
        <span>Add task</span>
        <div>
          <label>
            Task name
            <input name="title" type="text" placeholder="Task name" value={title} onChange={(e) => setTitle(e.target.value)} />
          </label>
          <label>
            Description
            <input name="description" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </label>
          <label>
            Assignee
            <input name="assignee" type="text" placeholder="Assignee name" value={assignee} onChange={(e) => setAssignee(e.target.value)} />
          </label>
          <label>
            Status
            <input name="status" type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} />
          </label>
          <label>
            Priority
            <input name="priority" type="text" placeholder="Priority" value={priority} onChange={(e) => setPriority(e.target.value)} />
          </label>
          <label>
            Due Date
            <input name="dueDate" type="text" placeholder="Due date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
          </label>

          <button className="bg-slate-300 p-5 text-black" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTask;
