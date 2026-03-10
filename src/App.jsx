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
import { ButtonDropDown } from "./components/ButtonDropDown";
import { Sidebar } from "./components/Sidebar";

function App() {
    
    const [currentPage, setCurrentPage] = useState('home');
    const [filter, setFilter] = useState('all');

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
        <div className="flex font-sans min-h-screen bg-deb-soft/5 ">
            <Sidebar 
                activePage={currentPage}
                onPageChange={setCurrentPage}
            >
                <main className="flex-1 p-10 overflow-y-auto">
                    <div className="max-w-6xl mx-auto">

                        {currentPage === 'home' ? (
                            <section>
                                <h1> Welcome</h1>
                            </section>
                        ) : (
                            <section>
                                
                            </section>
                        )}

                    </div>
                </main>

            </Sidebar>
            <div className="card w-full max-w-4xl">

                <h1 className="text-4xl font-bold text-deb-deep mb-8 text-center tracking-tight">Task Master Pro</h1>

                <div className="flex items-center w-full mb-8">

                    <TaskInput 
                        onAdd={handleAddTasks} 
                        onToggle={handleToggleTasks}
                    
                        /> 
                        
                        <ButtonDropDown 
                            buttonText={`Filter `}>
                                <div className="flex flex-col">
                                    {['all', 'todo', 'done'].map((f) => (
                                        <button
                                            key={f}
                                            onClick={() => setFilter(f)}
                                            className={`px-4 py-2 text-sm text-left hover:bg-deb-soft/20 transition-colors capitalize ${
                        filter === f ? 'text-deb-deep font-bold bg-deb-soft/10' : 'text-deb-dark'}`}
                                        >
                                            {f}
                                        </button>
                                    ))}
                                </div>

                        </ButtonDropDown>
                
                        
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
