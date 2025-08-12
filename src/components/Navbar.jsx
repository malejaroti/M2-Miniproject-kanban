import logo from "../assets/react.svg"
function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <div className="app-name">Kanban project</div>
    </div>
  )
}
export default Navbar