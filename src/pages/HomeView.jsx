// HomeView.jsx
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { AsideTasks } from "../components/AsideTasks";

export function HomeView({ stats, tasks }) {
    const generalData = [
        { name: 'Total', value: stats.total, fill: '#4F46E5' },
        { name: 'Done', value: stats.done, fill: '#10B981' },
        { name: 'Pending', value: stats.pending, fill: '#BDB0D9' }
    ];

    const efficiencyData = [
        { 
            name: 'Efficiency', 
            value: stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0,
            fill: '#4F46E5' 
        }
    ];

    return (
        <div className="p-8 animate-in fade-in slide-in-from-left-4 duration-500 bg-deb-soft min-h-screen">
            
            {/* Container Flex Principal */}
            <div className="flex flex-col lg:flex-row gap-8">
                
                {/* Lado Esquerdo: Conteúdo Principal (Ocupa o máximo de espaço) */}
                <div className="flex-1 min-w-0">
                    
                    {/* Cabeçalho */}
                    <div className="bg-deb-deep p-8 mb-10 rounded-app shadow-sm relative overflow-visible flex justify-between min-h-40">
                        <div className="z-10">
                            <h1 className="text-4xl font-black text-white mb-2">Welcome Back!</h1>
                            <p className="text-white/80">Here is your productivity overview.</p>
                        </div>
                        <div className="absolute right-24 bottom-4 top-0 flex items-center pointer-events-none">
                            <img 
                                src="/src/assets/images/multitasking.png" 
                                alt="Productivity Overview" 
                                className="w-50 md:w-50 object-contain translate-y-2" 
                            />
                        </div>
                    </div>
                    
                    {/* Cards de Stats Rápidos */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="card p-6 border border-deb-purple bg-white shadow-sm">
                            <p className="text-xs font-bold text-deb-nude uppercase tracking-widest">Total</p>
                            <p className="text-4xl font-black text-deb-deep">{stats.total}</p>
                        </div>
                        <div className="card p-6 border border-green-500 bg-white shadow-sm">
                            <p className="text-xs font-bold text-deb-nude uppercase tracking-widest">Done</p>
                            <p className="text-4xl font-black text-deb-deep">{stats.done}</p>
                        </div>
                        <div className="card p-6 border border-deb-nude bg-white shadow-sm">
                            <p className="text-xs font-bold text-deb-nude uppercase tracking-widest">Goal</p>
                            <p className="text-4xl font-black text-deb-deep">
                                {stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0}%
                            </p>
                        </div>
                    </div>

                    {/* SEÇÃO DOS 3 GRÁFICOS LADO A LADO */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        
                        {/* Gráfico 1: Distribuição */}
                        <div className="card p-5 flex flex-col items-center min-h-40">
                            <h4 className="text-[10px] font-bold text-deb-nude uppercase mb-4 self-start">Distribution</h4>
                            <ResponsiveContainer width="100%" height={150}>
                                <BarChart data={generalData}>
                                    <XAxis dataKey="name" hide />
                                    <Tooltip cursor={{fill: 'transparent'}} />
                                    <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={30} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Gráfico 2: Comparativo */}
                        <div className="card p-5 flex flex-col items-center min-h-80">
                            <h4 className="text-[10px] font-bold text-deb-nude uppercase mb-4 self-start">Done vs Pending</h4>
                            <ResponsiveContainer width="100%" height={150}>
                                <BarChart data={[{name: 'Tasks', done: stats.done, pending: stats.pending}]}>
                                    <Tooltip cursor={{fill: 'transparent'}} />
                                    <Bar dataKey="done" fill="#10B981" radius={[4, 4, 0, 0]} barSize={20} />
                                    <Bar dataKey="pending" fill="#BDB0D9" radius={[4, 4, 0, 0]} barSize={20} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Gráfico 3: Eficiência */}
                        <div className="card p-5 flex flex-col items-center min-h-0">
                            <h4 className="text-[10px] font-bold text-deb-nude uppercase mb-4 self-start">Efficiency %</h4>
                            <ResponsiveContainer width="100%" height={150}>
                                <BarChart data={efficiencyData}>
                                    <YAxis domain={[0, 100]} hide />
                                    <Tooltip cursor={{fill: 'transparent'}} />
                                    <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40} label={{ position: 'top', fontSize: 10, fontWeight: 'bold' }} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>

                {/* Lado Direito: AsideTasks */}
                <div className="w-full lg:w-72 xl:w-60">
                    <AsideTasks tasks={tasks} />
                </div>

            </div>
        </div>
    );
}