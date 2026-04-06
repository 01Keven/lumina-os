import { TaskInput } from '../components/TaskInput';
import { ButtonDropDown } from '../components/ButtonDropDown';
import { TaskItem } from '../components/TaskItem';
import { ListFilter } from 'lucide-react';

export function TasksView({ tasks, filter, setFilter, handlers, stats }) {
    return (
        <div className="animate-in fade-in slide-in-from-right-4 duration-500 bg-deb-soft">
            <div className=" p-8 rounded-app">
                <header className="flex flex-col md:flex-row items-center justify-between w-full mb-8 gap-4">
                    

                    <div className="flex items-center gap-3">
                        <TaskInput onAdd={handlers.onAdd} /> 
                        
                        <ButtonDropDown buttonText={`Filter`} icon={ListFilter} className='btn-primary'>
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


                <div className="card p-0! overflow-hidden border-deb-soft/30 shadow-sm">
                    <div className="overflow-x-auto scrollbar-hide">
                        <table className="w-full text-left border-collapse min-w-80">
                            <thead className="border-b border-gray-100 bg-white text-xs uppercase tracking-widest text-deb-nude">
                                <tr>
                                    <th className="p-4 font-semibold">
                                        All Tasks
                                        <span className='px-2 py-0.5 ml-2 bg-deb-soft text-deb-deep rounded-full text-[10px]'>
                                            {stats.total}
                                        </span>
                                    </th>
                                    <th className="p-4 font-semibold">Status</th>
                                    <th className="p-4 font-semibold">Date</th>
                                    <th className="p-4 font-semibold text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-deb-soft/80 bg-white">
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
                </div>
            </div>
        </div>
    );
}