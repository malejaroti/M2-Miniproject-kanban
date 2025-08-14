import MemberDetail from "../components/MemberDetail"

function About() {
  return (
    <div className="w-full m-10">
      <h1 className="mb-4 text-5xl font-extrabold text-sky-600">Kanban project</h1>
      <p className="text-slate-400">It's a project that made a Kanban</p>
      <p className="text-slate-400 text-center text-2xl my-5 font-semibold">Kanban project was made with ❤️ by: </p>
      <div className="team-members-container flex justify-evenly">
        <MemberDetail img={"https://avatar.iran.liara.run/public/job/police/female"} name={"Alejandra"} description={"It's an amazing developer!"} linkedinURL={"https://www.linkedin.com/in/alejandra-rodriguez-tibana/"} githubURL={"https://github.com/malejaroti"} />
        <MemberDetail img={"https://avatar.iran.liara.run/public/job/police/male"}name={"Carlos"} description={"It's another amazing developer!"} linkedinURL={"https://www.linkedin.com/in/carlos-canet-espinosa/"} githubURL={"https://github.com/CarlosCanet"} />


        {/* Alejandra</h3>
      <p className="member-description">It's an amazing developer!</p>
      <a href="https://www.linkedin.com/in/alejandra-rodriguez-tibana/" target="blank"><img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="Linkedin logo" /></a>
      <a href="https://github.com/malejaroti */}
      </div>
    </div>
  )
}
export default About