import { Link } from "react-router";

function MemberDetail({ name, img, description, linkedinURL, githubURL }) {
  return (
    <div className="team-member-container border-1 p-10 rounded-xl my-5 bg-slate-400 w-150 flex flex-col text-center items-center ">
      <img src={img} alt="Picture profile" className="w-sm my-5"/>
      <h3 className="text-3xl font-bold underline">{name}</h3>
      <p className="member-description my-5">{description}</p>
      
      <div className="flex gap-25 justify-center">
        <a href={linkedinURL} target="blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin logo" className="w-15" />
        </a>
        <a href={githubURL} target="blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="Github Logo" className="w-15" />
        </a>
      </div>
    </div>
  );
}
export default MemberDetail;
