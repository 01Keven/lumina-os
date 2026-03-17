import { TaskInput } from '../components/TaskInput';
import { ButtonDropDown } from '../components/ButtonDropDown';
import { TaskItem } from '../components/TaskItem';
import { TaskStats } from '../components/TaskStats';

export function TasksView({ tasks, filter, setFilter, handlers, stats }) {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 bg-deb-soft">
            <div className=" p-8 rounded-app">
                <header className="flex flex-col md:flex-row items-center justify-between w-full mb-8 gap-4">
                    

                    <div className="flex items-center gap-3">
                        <TaskInput onAdd={handlers.onAdd} /> 
                        
                        <ButtonDropDown buttonText={`Filter`}>
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

                <div className="overflow-hidden border-deb-soft/30 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="border-b border-gray-100 bg-white text-shadow-deb-deep text-xs uppercase tracking-widest">
                            <tr>
                                <th className="p-4 font-semibold">
                                    All Tasks
                                    <span className='pe-2 pl-2 m-2 bg-gray-200 rounded-xl text-deb-nude'>{stats.total}</span>
                                </th>
                                <th className="p-4 font-semibold">Status</th>
                                <th className="p-4 font-semibold">Date</th>
                                <th className="p-4 font-semibold text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-deb-soft/80">
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

                {/* <TaskStats onDone={stats.done} Total={stats.total} onPending={stats.pending} /> */}
            </div>


        </div>
    );
}