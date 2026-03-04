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
import { TaskStats } from "./components/TaskStats";

function App() {
    
    const [filter, setFilter] = useState(['all'])

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
            done: false,
        }
        
        setTasks([
            ...tasks,
            newTask
        ])
    }

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter( task => task.done).length;

    const pendingTasks = totalTasks - completedTasks;
    
    const filteredTasks = tasks.filter(task => {
        if (filter === 'todo') return !task.done;
        if (filter === 'done') return task.done;
        return true;
    })

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

    function handleEditTasks(id, newTask) {
        setTasks(tasks.map( task => {
            if (task.id == id) {
                return {...task, text: newTask};
            }
            return task;
        } ))
    }
    

    return (
        <div>
            <h1>Task Master Pro</h1>

            <TaskInput onAdd={handleAddTasks} onToggle={handleToggleTasks}/>

            <div>
                <button onClick={() => setFilter('all')}>All</button>
                <button onClick={() => setFilter('todo')}>Todo</button>
                <button onClick={() => setFilter('done')}>Done</button>
            </div>

            <ul>
                {filteredTasks.map( task => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        onDelete={handleDeleteTasks}
                        onToggle={handleToggleTasks} 
                        onEdit={handleEditTasks}
                    />
                    
                ))}

            </ul>

            <div>
                {<TaskStats 
                    onDone={completedTasks}
                    Total={totalTasks}
                    onPending={pendingTasks}
                />}
            </div>
        </div>
    )
}

export default App
