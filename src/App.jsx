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

function App() {
  const [allTasks, setAllTasks] = useState(tasks);

  return (
    <div className="min-h-screen flex-col">
      <Navbar />
      <div className="main-page h-auto flex flex-1 ">
        <Sidebar />
        <div className="inner-page p-5 h-100">
          <Routes>
            <Route path="/" element={<Dashboard allTasks={allTasks} />} />
            <Route path="/about" element={<About />} />
            <Route path="/task-details/:task-id" element={<TaskDetails />} />
            <Route path="/add-task" element={<AddTask setAllTasks={setAllTasks} />} />
            <Route path="/edit-task/:task-id" element={<EditTask allTasks={allTasks} setAllTasks={setAllTasks} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
