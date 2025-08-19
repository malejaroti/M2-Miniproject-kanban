function Column({ columnName, children, allTasks, setAllTasks }) {
  const handleDragOver = (event) => {
    event.preventDefault(); //allow drop
  };
  const handleDrop = (event) => {
    event.preventDefault(); //allow drop
    let nameColumnDropped = event.currentTarget.id; // another option would have been to use event.currentTarget.dataset.columnName
    console.log("Dropped on column with id: ", nameColumnDropped);

    // event.dataTransfer.setData("text/plain", nameColumnDropped); //todo: Understand if it was possible to instead send the Column name ListItem

    let idTaskDragged = event.dataTransfer.getData("text/plain");

    // Find the task in allTasks
    let taskDragged = allTasks.find((task) => task.id === idTaskDragged);
    console.log("Task being moved:", taskDragged);
    //edit task status
    if (nameColumnDropped === "To-Do") {
      taskDragged.status = "To Do";
    } else if (nameColumnDropped === "Doing") {
      taskDragged.status = "In Progress";
    } else if (nameColumnDropped === "Done") {
      taskDragged.status = "Done";
    }

    setAllTasks((allTasksState) =>
      allTasksState.map((eachTask) => {
        return eachTask.id === idTaskDragged ? taskDragged : eachTask;
      })
    );
  };
  return (
    <div id={columnName} data-column-name={columnName} className="group column h-full flex-1 mx-2" onDragOver={handleDragOver} onDrop={handleDrop}>
      {/* Gradient border wrapper */}
      <div className="relative h-full rounded-2xl p-[2px] bg-gradient-to-br from-cyan-500/50 via-fuchsia-500/50 to-amber-400/50 transition-colors duration-300 group-hover:from-cyan-400 group-hover:via-fuchsia-400 group-hover:to-amber-300">
        {/* Inner panel */}
        <div className="flex h-full min-h-0 flex-col gap-2 items-center rounded-2xl bg-zinc-900/60 backdrop-blur-sm ring-1 ring-white/10 shadow-[0_0_0_1px_rgba(0,0,0,0.2)]">
          <p className="column-title text-2xl font-mono font-bold text-center text-neutral-50 pt-2">{columnName}</p>
          <div className="column-tasks  flex justify center w-full flex-1 min-h-0 overflow-y-auto p-3">{children}</div>
        </div>
      </div>
    </div>
  );
}
export default Column;
