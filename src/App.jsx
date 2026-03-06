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
    
    const [filter, setFilter] = useState('all')

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
        <div className="min-h-screen bg-deb-soft/10 p-container flex flex-col items-center">
            <div className="card w-full max-w-4xl">

                <h1 className="text-4xl font-bold text-deb-deep mb-8 text-center tracking-tight">Task Master Pro</h1>

                <TaskInput onAdd={handleAddTasks} onToggle={handleToggleTasks} />
                    
                <div className="flex gap-2 justify-center my-8">
                    <button onClick={() => setFilter('all')}>All</button>
                    <button onClick={() => setFilter('todo')}>Todo</button>
                    <button onClick={() => setFilter('done')}>Done</button>
                </div>

                
                <div className=" overflow-hidden rounded-button border border-deb-soft/30 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-deb-deep text-white text-sm uppercase tracking-widest">
                            <tr>
                                <th className="p-4 font-semibold">Name</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold text-center">Actions</th>
                                
                            </tr>

                        </thead>
                        <tbody className="divive-y divide-deb-soft/20">
                            
                            {filteredTasks.map( task => (
                                <TaskItem 
                                    key={task.id}
                                    task={task}
                                    onDelete={handleDeleteTasks}
                                    onToggle={handleToggleTasks} 
                                    onEdit={handleEditTasks}
                                />
                                        
                            ))}
                                
                        </tbody>

                    </table>
                </div>

                <div>
                    {<TaskStats 
                        onDone={completedTasks}
                        Total={totalTasks}
                        onPending={pendingTasks}
                    />}
                </div>
            </div>
            </div>
    )
}

export default App
