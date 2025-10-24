import "./AddTask.css"
import { useState } from "react"

function AddTask (props){
    const [title, setTitle] = useState("")
    return(
        <div>
        <input type="text"  placeholder="Digite o Título da tarefa" value={title} onChange={(event) => setTitle(event.target.value)}/>
        <button onClick={() => props.OnAddTaskSubmit(title)}>Adicionar</button>
        </div>
    )
}
export default AddTask