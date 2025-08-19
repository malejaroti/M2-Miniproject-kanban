import { Link } from "react-router";

function Sidebar() {
  return (
    <div className="sidebar w-75 h-[88vh]">
      <ul className="link-list flex flex-col p-5 justify-start gap-5 h-full">
        <Link to={"/"}>
          <li className="py-3 px-5 bg-indigo-700 text-indigo-100 rounded-2xl">Home</li>
        </Link>
        <Link to={"/about"}>
          <li className="py-3 px-5 bg-indigo-700 text-indigo-100 rounded-2xl">About</li>
        </Link>
        <Link to={"/edit-values"}>
          <li className="py-3 px-5 bg-indigo-900 text-indigo-100 rounded-2xl mt-[650px]">Edit options</li>
        </Link>
      </ul>
    </div>
  );
}
export default Sidebar;
