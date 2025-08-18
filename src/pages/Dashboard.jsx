import List from "../components/List";

function Dashboard({ allTasks }) {
  return (
    <div>
      <List allTasks={allTasks} />
    </div>
  );
}
export default Dashboard;
