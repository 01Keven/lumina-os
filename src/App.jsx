import { useState, useEffect } from "react";
import { Sidebar } from "./components/Sidebar";
import { HomeView } from "./pages/HomeView";
import { TasksView } from "./pages/TasksView";
import { Navbar } from "./components/Navbar";


function App() {
    const [currentPage, setCurrentPage] = useState('home');
    const [filter, setFilter] = useState('all');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [tasks, setTasks] = useState(() => {
        const saveData = localStorage.getItem("TASKS_V1");
        return saveData ? JSON.parse(saveData) : [];
    });

    useEffect(() => {
        localStorage.setItem("TASKS_V1", JSON.stringify(tasks));
    }, [tasks]);

    // Handlers (Lógica de Negócio)
    const handlers = {
        onAdd: (text, dueDate) => setTasks([...tasks, { id: Date.now(), text, done: false, dueDate: dueDate}]),
        onDelete: (id) => setTasks(tasks.filter(t => t.id !== id)),
        onToggle: (id) => setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t)),
        onEdit: (id, text, dueDate) => setTasks(tasks.map(t => t.id === id ? { ...t, text, dueDate: dueDate} : t))
    };

    const userName = "Keven"; // Exemplo de nome de usuário, pode ser dinâmico no futuro

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
                return <HomeView stats={stats} tasks={tasks} />;
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

    return (
    <div className="flex h-screen overflow-hidden"> {/* h-screen e overflow-hidden matam o scroll global */}
        <Sidebar 
        activePage={currentPage} 
        onPageChange={(page) => {
            setCurrentPage(page)
            setIsSidebarOpen(false); // Fecha o sidebar ao clicar em um item
        }}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        />
        
        {/* Usamos flex-col para o Nav ficar no topo e o conteúdo embaixo */}
        <div className="flex-1 flex flex-col min-w-0"> 
            <Navbar userName={userName} onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
            
            {/* O main agora gerencia seu próprio scroll vertical se o conteúdo for grande, 
                mas nunca scroll lateral */}
            <main className="flex-1 overflow-y-auto bg-deb-soft/10">
                <div className="p-0"> {/* Removido mx-auto para evitar centralizações que causam bugs */}
                    {renderPage()}
                </div>
            </main>
        </div>
    </div>
);
}

export default App;