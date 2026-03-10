import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { HomeView } from "./pages/HomeView";
import { TasksView } from "./pages/TasksView";

function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [filter, setFilter] = useState('all');
    
    const [tasks, setTasks] = useState(() => {
        const saveData = localStorage.getItem("TASKS_V1");
        return saveData ? JSON.parse(saveData) : [];
    });

    useEffect(() => {
        localStorage.setItem("TASKS_V1", JSON.stringify(tasks));
    }, [tasks]);

    // Handlers (Lógica de Negócio)
    const handlers = {
        onAdd: (text) => setTasks([...tasks, { id: Date.now(), text, done: false }]),
        onDelete: (id) => setTasks(tasks.filter(t => t.id !== id)),
        onToggle: (id) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)),
        onEdit: (id, text) => setTasks(tasks.map(t => t.id === id ? { ...t, text } : t))
    };

    // Cálculos de Stats
    const stats = {
        total: tasks.length,
        done: tasks.filter(t => t.done).length,
        pending: tasks.length - tasks.filter(t => t.done).length
    };

    const filteredTasks = tasks.filter(t => {
        if (filter === 'todo') return !t.done;
        if (filter === 'done') return t.done;
        return true;
    });

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <HomeView stats={stats} />;
            case 'tasks':
                return (
                    <TasksView 
                        tasks={filteredTasks} 
                        filter={filter}
                        setFilter={setFilter}
                        handlers={handlers}
                        stats={stats}
                    />
                );
            case 'calendar':
                return <div className="p-10 text-deb-deep font-bold text-2xl">Calendar View (Coming Soon)</div>;
            default:
                return <HomeView stats={stats} />;
        }
    };

    // --- O BLOCO QUE ESTAVA FALTANDO ABAIXO ---
    return (
        <div className="flex min-h-screen bg-deb-soft/5">
            {/* Aqui usamos a Sidebar importada */}
            <Sidebar activePage={currentPage} onPageChange={setCurrentPage} />
            
            <main className="flex-1 p-10">
                <div className="max-w-6xl mx-auto">
                    {/* Aqui executamos a função que renderiza a página atual */}
                    {renderPage()}
                </div>
            </main>
        </div>
    );
}

export default App;