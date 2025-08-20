import ListItem from "./ListItem";

function List({ allTasks, onDeleteTask, getIdTaskDragged }) {
  return (
    <div className="list-container w-full p-2">
      <div className="w-full max-w-3xl mx-auto">
        {allTasks.map((task) => (
          <ListItem task={task} key={task.id} onDelete={onDeleteTask} getIdTaskDragged={getIdTaskDragged} />
        ))}
      </div>
    </div>
  );
}
export default List;
