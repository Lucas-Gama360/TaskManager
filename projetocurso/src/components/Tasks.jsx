import "../components/Tasks.css";

function Tasks(props) {
  return (
    <ul className="tasks-list">
      {props.tasks.map((task) => (
        <li
          key={task.id}
          className={`task-item ${task.isCompleted ? "task-completed" : ""}`}
        >
          <button
            className="task-title-button"
            onClick={() => props.OnTaskClick(task.id)}
          >
            {task.title}
          </button>
          <div>
            <button
              className="action-button"
              onClick={() => props.OnTaskDelete(task.id)}
            >
              X
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
