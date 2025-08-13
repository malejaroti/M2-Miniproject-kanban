import tasks from "../assets/data.json"
import ListItem from "./Listitem"


function List() {
  return (
    <div>
        {
            tasks.map(task => (
                <ListItem task={task} key={task.id}/>
            ))
        }

    </div>
  )
}
export default List