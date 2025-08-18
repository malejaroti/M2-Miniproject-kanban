import { useState } from "react";
import { useNavigate } from "react-router";

function TaskForm({ data, callback }) {
  const [formData, setFormData] = useState({
    title: data.title,
    description: data.description,
    assignee: data.assignee,
    status: data.status,
    priority: data.priority,
    dueDate: data.dueDate,
    createdDate: data.createdDate, // todo: To clarify
  });
  let navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value,
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

    callback(task);
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="text-red-600 border-2">
        <div>
          <label className="block w-200">
            Task title
            <input className="w-200" name="title" type="text" placeholder="Title" value={formData.title} onChange={handleChange} />
          </label>
          <label className="block w-200">
            Description
            <input className="w-200" name="description" type="text" placeholder="Description" value={formData.description} onChange={handleChange} />
          </label>
          <label className="block w-200">
            Assignee
            <input className="w-200" name="assignee" type="text" placeholder="Assignee name" value={formData.assignee} onChange={handleChange} />
          </label>
          <label className="block w-200">
            Status
            <input className="w-200" name="status" type="text" placeholder="Status" value={formData.status} onChange={handleChange} />
          </label>
          <label className="block w-200">
            Priority
            <input className="w-200" name="priority" type="text" placeholder="Priority" value={formData.priority} onChange={handleChange} />
          </label>
          <label className="block w-200">
            Due Date
            <input className="w-200" datepicker="" name="dueDate" type="text" placeholder="Due date" value={formData.dueDate} onChange={handleChange} />
          </label>

          <button className="bg-slate-300 p-5 text-black" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
export default TaskForm;
