import { Route, Routes } from "react-router"
import Footer from "./components/Footer"
import List from "./components/List"
import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar'
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import TaskDetails from "./pages/TaskDetails"
import Dashboard from "./pages/Dashboard"

function App() {

  return (
    <div className="min-h-screen flex-col">
      <Navbar />
      <div className="main-page h-auto flex flex-1 ">
        <Sidebar/>  
        <div className="inner-page p-5 h-100">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/task-details/:task-id" element={<TaskDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
