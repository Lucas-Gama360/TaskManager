import { useState } from "react";
import "./App.css"; // Importa o novo CSS
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

  function OnTaskDelete(taskid) {
    const newTasks = tasks.filter(task => task.id !== taskid)
    setTasks(newTasks)
  }

  function OnAddTaskSubmit (title){
    const newTask = {
      id: tasks.length +1,
      title: title,
      isCompleted: false,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="Geral">
      <h1 className="title">Gerenciador de tarefas</h1>
      <AddTask OnAddTaskSubmit={OnAddTaskSubmit}/>
      <Tasks tasks={tasks} OnTaskClick={OnTaskClick} OnTaskDelete={OnTaskDelete} />
    </div>
  );
}

export default App;