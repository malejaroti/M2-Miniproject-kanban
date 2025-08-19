import ValueList from "../components/ValueList";
import ValueListItem from "../components/ValueListItem";

function EditValues({ assignees, setAssignees, priorities, setPriorities, statuses, setStatuses }) {
  return (
    <div className="flex gap-2 justify-evenly mt-5">
      <div className="assignees-list flex-col">
        <ValueList textList={"Assignees"} dataArray={Array.from(assignees)} onAdd={setAssignees} data={assignees} />
      </div>
      <div className="priorities-list flex-col">
        <ValueList textList={"Priorities"} dataArray={Array.from(priorities)} onAdd={setPriorities}/>
      </div>
      <div className="statuses-list flex-col">
        <ValueList textList={"Statuses"} dataArray={Array.from(statuses)} onAdd={setStatuses}/>
      </div>
    </div>
  )
}
export default EditValues