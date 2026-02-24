/**
 * 
 * Cria estado useState
 * Cria as funções de ação: addTask, deleteTask, toggleDone
 * Filtra a lista antes de mandar para os outros
 * Passar os dados via Props
 *  
 **/

import { useState, useEffect } from "react";
import { TaskInput } from "./components/TaskInput";
import { TaskItem } from "./components/TaskItem";


function App() {

    
    // Array para armazenamento das tasks
    const [tasks, setTasks] = useState(() => {
        const saveData = localStorage.getItem("TASKS_V1");

        if (saveData) {
            return JSON.parse(saveData);
        }

        return [];
    })
    
    useEffect(() => {
        localStorage.setItem("TASKS_V1", JSON.stringify(tasks));
    }, [tasks]); // so age quando muda tasks
    
    // Esqueleto da Task
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
    
    function handleToggleTasks(id) {
        setTasks(tasks.map( task => {
            if (task.id == id) {
                return {...task, done: !task.done};
            }
            return task;
        } ))
    }
    
    

    return (
        <div>
            <h1>Task Master Pro</h1>

            <TaskInput onAdd={handleAddTasks} onToggle={handleToggleTasks}/>

            <ul>
                {tasks.map( task => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        onDelete={handleDeleteTasks}
                        onToggle={handleToggleTasks} 
                    />
                    
                ))}
            </ul>
            
            
        </div>
    )
}



export default App
