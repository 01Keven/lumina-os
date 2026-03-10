import { TaskInput } from "./TaskInput";
import { TaskItem } from "./TaskItem";
import { TaskStats } from "./TaskStats";
import { ButtonDropDown } from "./ButtonDropDown";

export function TasksView({ tasks, filter, setFilter, handlers, stats }) {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500">
            <div className="card w-full p-8 bg-white shadow-lux rounded-app">
                <header className="flex flex-col md:flex-row items-center justify-between w-full mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-black text-deb-deep tracking-tight">My Tasks</h1>
                        <p className="text-deb-nude text-sm">Manage and execute your daily goals</p>
                    </div>

                    <div className="flex items-center gap-3">
                        <TaskInput onAdd={handlers.onAdd} /> 
                        
                        <ButtonDropDown buttonText={`Filter: ${filter}`}>
                            <div className="flex flex-col">
                                {['all', 'todo', 'done'].map((f) => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`px-4 py-2 text-sm text-left hover:bg-deb-soft/20 transition-colors capitalize ${
                                            filter === f ? 'text-deb-deep font-bold bg-deb-soft/10' : 'text-deb-dark'
                                        }`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                        </ButtonDropDown>
                    </div>
                </header>

                <div className="overflow-hidden rounded-button border border-deb-soft/30 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-deb-deep text-white text-xs uppercase tracking-widest">
                            <tr>
                                <th className="p-4 font-semibold">Name</th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-deb-soft/20">
                            {tasks.map(task => (
                                <TaskItem 
                                    key={task.id} 
                                    task={task} 
                                    onDelete={handlers.onDelete} 
                                    onToggle={handlers.onToggle} 
                                    onEdit={handlers.onEdit} 
                                />
                            ))}
                        </tbody>
                    </table>
                </div>

                <TaskStats onDone={stats.done} Total={stats.total} onPending={stats.pending} />
            </div>
        </div>
    );
}