import ListItem from "./ListItem";

function List({ allTasks }) {
  return (
    <div>
      {allTasks.map((task) => (
        <ListItem task={task} key={task.id} />
      ))}
    </div>
  );
}
export default List;
