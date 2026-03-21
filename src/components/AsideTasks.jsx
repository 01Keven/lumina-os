import { Calendar, Clock } from "lucide-react";

export function AsideTasks({ tasks }) {
    // Filtramos para mostrar apenas tarefas pendentes que TÊM data
    const upcoming = tasks
        .filter(t => !t.done && t.dueDate)
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)) // Ordena por data mais próxima
        

    return (
        <aside className="card p-6 bg-deb-soft border border-deb-deep/40 h-max-content">
            <h2 className="text-sm font-bold text-deb-dark/80 uppercase tracking-widest mb-6">
                Upcoming Priority
            </h2>
            
            {upcoming.length > 0 ? (
                <ul className="space-y-4">
                    {upcoming.map((task) => (
                        <li key={task.id} className="group flex flex-col gap-1 border-l-4 border-deb-deep pl-4 py-1 hover:bg-deb-soft/5 transition-colors bg-deb-nude/10">
                            <span className="font-bold text-deb-purple group-hover:text-deb-deep transition-colors">
                                {task.text} {/* Corrigido de .title para .text */}
                            </span>
                            
                            <div className="flex items-center gap-2 text-2xs font-medium text-deb-nude">
                                <Clock size={12} />
                                <span>
                                    {new Date(task.dueDate).toLocaleString('en-US', {
                                        month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit'
                                    })}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-6">
                    <Calendar className="mx-auto text-deb-soft mb-2" size={24} />
                    <p className="text-xs text-deb-nude italic">No upcoming deadlines.</p>
                </div>
            )}
        </aside>
    );
}