import ListItem from "./ListItem";

function List({ allTasks, statusFilter }) {
  return (
    <div className="list-container w-full p-2">
      <div className="w-full max-w-3xl mx-auto">
        {allTasks
          .filter((task) => task.status === statusFilter)
          .map((task) => (
            <ListItem task={task} key={task.id} />
          ))}
      </div>
    </div>
  );
}
export default List;
