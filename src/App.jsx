import { Route, Routes } from "react-router";
import tasks from "./assets/data.json";

import Footer from "./components/Footer";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import TaskDetails from "./pages/TaskDetails";
import Dashboard from "./pages/Dashboard";
import AddTask from "./pages/AddTask";
import { useState } from "react";
import EditTask from "./pages/EditTask";
import EditValues from "./pages/EditValues";

function App() {
  const [allTasks, setAllTasks] = useState(tasks);
  const [assignees, setAssignees] = useState(new Set(allTasks.map(task => task.assignee)));
  const [priorities, setPriorities] = useState(new Set(allTasks.map(task => task.priority)));
  const [statuses, setStatuses] = useState(new Set(allTasks.map(task => task.status)));

  const deleteTask = (id) => {
    const taskIndexToDelete = allTasks.findIndex(task => task.id === id);
    setAllTasks(allTasks.toSpliced(taskIndexToDelete, 1));
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="main-page h-auto flex flex-1 min-h-0">
        <Sidebar />
        <div className="inner-page bg-neutral-900 p-5 w-full min-h-0">
          <Routes>
            <Route path="/" element={<Dashboard allTasks={allTasks} setAllTasks={setAllTasks} deleteTask={deleteTask} />} />
            <Route path="/about" element={<About />} />
            <Route path="/task-details/:task-id" element={<TaskDetails />} />
            <Route path="/add-task" element={<AddTask allTasks={allTasks} setAllTasks={setAllTasks} assignees={assignees} priorities={priorities} statuses={statuses} />} />
            <Route path="/edit-task/:task-id" element={<EditTask allTasks={allTasks} setAllTasks={setAllTasks} assignees={assignees} priorities={priorities} statuses={statuses} />} />
            <Route path="/edit-values" element={<EditValues assignees={assignees} setAssignees={setAssignees} priorities={priorities} setPriorities={setPriorities} statuses={statuses} setStatuses={setStatuses} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
