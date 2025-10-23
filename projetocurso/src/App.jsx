import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Sua vó é minha",
      description: "é uma vó mt bela",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Sua vó é minha",
      description: "é uma vó mt bela",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Sua vó é minha",
      description: "é uma vó mt bela",
      isCompleted: false,
    },
  ]);
  function OnTaskClick(taskid) {
  const newTasks = tasks.map((task) => {
    if (task.id === taskid) {
      return { ...task, isCompleted: !task.isCompleted };
    }
    return task;
  });
  setTasks(newTasks);
}
  return (
    <div className="app-container">
      <h1 className="app-title">Gerenciador de tarefas</h1>
      <Tasks tasks={tasks}  OnTaskClick = {OnTaskClick}/>
      <AddTask />
    </div>
  );
}

export default App;