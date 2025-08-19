import logo from "../assets/cat.gif";
function Navbar() {
  return (
    <div className="h-[7vh] flex justify-center items-center gap-10 bg-blue-900">
      <img src={logo} alt="Logo" width="40px" />
      <div
        className="app-name font-extrabold italic text-4xl bg-gradient-to-r bg-clip-text text-transparent 
            from-orange-500 via-emerald-500 to-purple-500 animate-text">
        Party Kanban
      </div>
      <img src={logo} alt="Logo" width="40px" className="scale-x-[-1]"/>
    </div>
  );
}
export default Navbar;
