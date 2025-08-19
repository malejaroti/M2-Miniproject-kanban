import ValueList from "../components/ValueList";

function EditValues({ assignees, setAssignees, priorities, setPriorities, statuses, setStatuses }) {
  return (
    <div className="flex gap-2 justify-evenly mt-5">
      <ValueList textList={"Assignees"} dataArray={Array.from(assignees)} onAdd={setAssignees} data={assignees} />
      <ValueList textList={"Priorities"} dataArray={Array.from(priorities)} onAdd={setPriorities}/>
      <ValueList textList={"Statuses"} dataArray={Array.from(statuses)} onAdd={setStatuses}/>
    </div>
  )
}
export default EditValues