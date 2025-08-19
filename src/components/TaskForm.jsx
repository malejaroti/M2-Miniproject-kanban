import { Datepicker } from "flowbite-react";
import { useState } from "react";
import { useNavigate } from "react-router";

function TaskForm({ data, onSubmit, actionText, assignees, priorities, statuses }) {
  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description,
    assignee: data.assignee,
    status: data.status,
    priority: data.priority,
    dueDate: new Date(data.dueDate),
    createdDate: new Date(data.createdDate), // todo: To clarify
  });
  let navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target !== undefined ? event.target.name : "dueDate"]: event.target === undefined ? event : event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    //prettier-ignore
    const task = {
      id: data.id,
      title: formData.title,
      description: formData.description,
      assignee: formData.assignee,
      status: formData.status,
      priority: formData.priority,
      dueDate: formData.dueDate,
      createdDate: formData.createdDate
    };

    onSubmit(task);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="border-5 flex flex-col p-5 mt-5">
        <div className="text-sky-500">
          <label className="flex items-center flex-none my-5 w-1/2 font-bold">
            <p className="w-1/6 text-end mr-5">Task title</p>
            <input className="w-full font-medium text-sky-700" name="title" type="text" placeholder="Title" value={formData.title} onChange={handleChange} />
          </label>
          <label className="flex items-center flex-none my-5 w-1/2 font-bold">
            <p className="w-1/6 text-end mr-5">Description</p>
            <textarea className="w-full font-medium text-sky-700" name="description" type="text" placeholder="Description" value={formData.description} onChange={handleChange} />
          </label>
          <label className="flex items-center flex-none my-5 w-1/2 font-bold">
            <p className="w-1/6 text-end mr-5">Assignee</p>
            <select className="w-full font-medium text-sky-700" name="assignee" type="text" placeholder="Assignee name" value={formData.assignee} onChange={handleChange}>
              {Array.from(assignees).map(assignee => <option value={assignee} key={assignee}>{assignee}</option>)}
            </select>
          </label>
          <label className="flex items-center flex-none my-5 w-1/2 font-bold">
            <p className="w-1/6 text-end mr-5">Status</p>
            <select className="w-full font-medium text-sky-700" name="status" type="text" placeholder="Status" value={formData.status} onChange={handleChange} >
              {Array.from(statuses).map(status => <option value={status} key={status}>{status}</option>)}
            </select>
          </label>
          <label className="flex items-center flex-none my-5 w-1/2 font-bold">
            <p className="w-1/6 text-end mr-5">Priority</p>
            <select className="w-full font-medium text-sky-700" name="priority" type="text" placeholder="Priority" value={formData.priority} onChange={handleChange} >
              {Array.from(priorities).map(priority => <option value={priority} key={priority} >{priority}</option>)}
            </select>
          </label>
          <label className="flex items-center flex-none my-5 w-1/2 font-bold">
            <p className="w-1/6 text-end mr-5">Due Date</p>
            <Datepicker value={formData.dueDate} onChange={handleChange} />
            {/* <input className="w-full font-medium text-sky-700" name="dueDate" type="date" placeholder="Due date" value={formData.dueDate} onChange={handleChange} /> */}
            {/* <input id="datepicker" className="w-full font-medium text-sky-700" datepicker="" name="dueDate" type="date" placeholder="Due date" value={formData.dueDate} onChange={handleChange} /> */}
          </label>

          <button className="bg-sky-800 m-5 p-5 rounded-t-lg text-sky-400 cursor-pointer shadow-md shadow-sky-600 hover:relative hover:top-0.5 hover:left-0.5" type="submit">
            {actionText}
          </button>
        </div>
      </form>
    </div>
  );
}
export default TaskForm;
