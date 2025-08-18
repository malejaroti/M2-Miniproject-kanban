import logo from "../assets/taskIcon.png";
function Navbar() {
  return (
    <div className="h-[7vh] flex justify-center items-center gap-10 bg-blue-900">
      <img src={logo} alt="Logo" width="40px"/>
      <div className="app-name font-extrabold italic underline underline-offset-2 text-4xl">Kanban project</div>
    </div>
  );
}
export default Navbar;
