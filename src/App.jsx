/**
 * 
 * Cria estado useState
 * Cria as funções de ação: addTask, deleteTask, toggleDone
 * Filtra a lista antes de mandar para os outros
 * Passar os dados via Props
 *  
 **/

import { useState } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskItem } from "./components/TaskItem";


function App() {

    // Array para armazenamento das tasks
    const [tasks, setTasks] = useState([])
    
    // 
    function handleAddTasks(text) {
        const newTask = {
            id: Date.now(),
            text: text,
            done: false
        }

        setTasks([
            ...tasks,
            newTask
        ])
    }

    function handleDeleteTasks(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

    return (
        <div>
            <h1>Task Master Pro</h1>

            <TaskInput onAdd={handleAddTasks}/>

            <ul>
                {tasks.map( task => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        onDelete={handleDeleteTasks}

                    />
                ))}
            </ul>
            
            
        </div>
    )
}



export default App
