import Footer from "./components/Footer"
import List from "./components/List"
import Navbar from "./components/Navbar"
import Sidebar from './components/Sidebar'

function App() {

  return (
    <>
      <Navbar />
      <div className="main-page">
        <Sidebar/>  
        <div className="dashboard">
          <List />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App
