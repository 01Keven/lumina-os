// HomeView.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { AsideTasks } from "../components/AsideTasks";
import { UserConfigs } from "../components/UserConfigs";

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

    const userName = "Keven"; // Exemplo de nome de usuário, pode ser dinâmico no futuro

    return (
        /* Mudança: p-4 no mobile para não encostar na borda, p-8 no desktop */
        <div className="p-4 md:p-8 animate-in fade-in slide-in-from-left-4 duration-500 bg-deb-soft overflow-hidden">
            
            <div className="flex flex-col lg:flex-row gap-8 mb-8">
                
                <div className="flex-1 min-w-0">
                    
                    {/* Cabeçalho: Ajustado p-6 no mobile para ganhar espaço */}
                    <div className="bg-deb-deep p-6 md:p-8 mb-6 md:mb-10 rounded-app shadow-sm relative overflow-visible flex justify-between min-h-32 md:min-h-40">
                        <div className="z-10">
                            <h1 className="text-2xl md:text-4xl font-black text-white mb-1 md:mb-2">Welcome Back!</h1>
                            <p className="text-white/80 text-sm md:text-base">Here is your productivity overview.</p>
                        </div>
                        <div className="absolute right-12 md:right-24 bottom-4 top-0 items-center pointer-events-none hidden md:flex">
                            <img 
                                src="/src/assets/images/multitasking.png" 
                                alt="Productivity" 
                                className="w-50 md:w-50 object-contain translate-y-2" 
                            />
                        </div>
                    </div>
                    
                    {/* Cards de Stats Rápidos: Agora em linha única no mobile com gap menor */}
                    <div className="flex flex-row md:grid md:grid-cols-3 gap-3 md:gap-6 mb-8 overflow-x-auto pb-2 scrollbar-hide">
                        <div className="card flex-1 min-w-2 p-4 md:p-6 border border-deb-purple bg-white shadow-sm text-center md:text-left">
                            <p className="text-[10px] md:text-xs font-bold text-deb-nude uppercase tracking-widest">Total</p>
                            <p className="text-xl md:text-4xl font-black text-deb-deep">{stats.total}</p>
                        </div>
                        <div className="card flex-1 min-w-25 p-4 md:p-6 border border-green-500 bg-white shadow-sm text-center md:text-left">
                            <p className="text-[10px] md:text-xs font-bold text-deb-nude uppercase tracking-widest">Done</p>
                            <p className="text-xl md:text-4xl font-black text-deb-deep">{stats.done}</p>
                        </div>
                        <div className="card flex-1 min-w-25 p-4 md:p-6 border border-deb-nude bg-white shadow-sm text-center md:text-left">
                            <p className="text-[10px] md:text-xs font-bold text-deb-nude uppercase tracking-widest">Goal</p>
                            <p className="text-xl md:text-4xl font-black text-deb-deep">
                                {stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0}%
                            </p>
                        </div>
                    </div>

                    {/* SEÇÃO DOS 3 GRÁFICOS LADO A LADO */}
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        
                        {/* Gráfico 1: Distribuição */}
                        <div className="card p-5 flex flex-col items-center min-h-20 max-h-60">
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
                        <div className="card p-5 flex flex-col items-center min-h-20 max-h-60">
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
                        <div className="card p-5 flex flex-col items-center min-h-20 max-h-60">
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
                <div className="mt-3">
                    <UserConfigs userName={userName} />
                </div>
                </div>

            </div>
        </div>
    );
}