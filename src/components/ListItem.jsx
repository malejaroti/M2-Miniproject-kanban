import { useState } from "react";
import { Link } from "react-router";

function ListItem({ task, onDelete }) {
  const [draggedElement, setDraggedElement] = useState(null);
  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", task.id);
    event.dataTransfer.effectAllowed = "move";
    setDraggedElement(task.id);
  };
  // setDraggedElement(null); //todo understand what this is for? and if I had to use it for some reason
  const daysToDueDate = Math.round((new Date(task.dueDate) - new Date()) / (24 * 60 * 60 * 1000));
  // console.log(Math.round(daysToDueDate / (24 * 60 * 60 * 1000)));

  const handleDelete = () => {
    // onDelete((state) => {
    //   state.map((eachTask, index) => {
    //     return index === task ? updatedTask : eachTask;
    //   })
    // });
    console.log("DELETE!")
  };

  return (
    <>
      <Link to={`/edit-task/${task.id}`}>
        <div className="card  cursor-pointer w-full rounded-2xl my-3 p-3 bg-indigo-900 border-2 border-indigo-600 flex flex-col" draggable="true" onDragStart={handleDragStart}>
          <p className="text-lg font-extrabold">{task.title}</p>
          <p className="text-base">{task.assignee}</p>
          <div className="flex gap-2 items-center justify-between p-2">
            <div className={`flex gap-2 items-center justify-between font-semibold ${daysToDueDate < 0 ? "text-amber-500" : "text-white"  }`}>
              <svg className={`w-[18px] h-[18px] text-gray-800 ${daysToDueDate < 0 ? "text-yellow-500" : "text-white"  }`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M6 5V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h3V4a1 1 0 1 1 2 0v1h1a2 2 0 0 1 2 2v2H3V7a2 2 0 0 1 2-2h1ZM3 19v-8h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm5-6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Z" clipRule="evenodd" />
              </svg>
              <p>{daysToDueDate < 0 ? `${daysToDueDate} days overdue` : `${daysToDueDate} days left`}</p>
            </div>
            <button className="btn-delete p-2 rounded-lg bg-indigo-800 mx-5 cursor-pointer shadow-md shadow-indigo-950 hover:relative hover:top-0.5 hover:left-0.5 w-9 self-end" onClick={handleDelete}>
              <svg className="w-[18px] h-[18px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z" />
              </svg>
            </button>
          </div>
        </div>
      </Link>
    </>
  );
}
export default ListItem;
