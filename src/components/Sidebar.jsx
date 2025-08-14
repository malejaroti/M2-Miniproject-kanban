import { Link } from "react-router"

function Sidebar() {
  return (
    <div className="sidebar w-75 border-r-2 h-full">
      <ul className="link-list flex flex-col p-5 justify-center gap-5">
        <li className="py-3 px-5 bg-slate-400 text-black rounded-2xl"><Link to={"/"} >Home</Link></li>
        <li className="py-3 px-5 bg-slate-400 text-black rounded-2xl"><Link to={"/about"}>About</Link></li>
      </ul>
    </div>
  )
}
export default Sidebar