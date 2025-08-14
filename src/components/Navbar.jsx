import logo from "../assets/react.svg"
function Navbar() {
  return (
    <div className="flex py-5 justify-center gap-10 bg-blue-900">
      <img src={logo} alt="Logo" />
      <div className="app-name">Kanban project</div>
    </div>
  )
}
export default Navbar