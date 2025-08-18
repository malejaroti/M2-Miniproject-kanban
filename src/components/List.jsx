import ListItem from "./ListItem";

function List({ allTasks }) {
  return (
    <div className="list-container flex">
      <div className="">
        {allTasks.map((task) => (
          <ListItem task={task} key={task.id} />
        ))}
      </div>
    </div>
  );
}
export default List;
