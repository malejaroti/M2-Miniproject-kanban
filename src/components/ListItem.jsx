function ListItem({task}) {
  return (
    <>
        <div className="card">
            <p>{task.title}</p>
            <p>{task.assignee}</p>
            <p>{task.status === "Done"? "✔️":"❌"}</p>
            
            <button className="btn-delete">Delete</button>
        </div>

    </>

  )
}
export default ListItem