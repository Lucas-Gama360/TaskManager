function Tasks(props) {
  return (
    <ul className="tasks-list" >
      {props.tasks.map((task) => (
        <li key={task.id} className={task.isCompleted ? 'task-completed' : ''}>
          <button className="task-title-button" onClick={() => props.OnTaskClick(task.id)} >
            {task.title}
          </button>
          <button className="action-button">!</button>
        </li>
      ))}
    </ul>
  );
}
export default Tasks;