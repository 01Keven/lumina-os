// Adicione TODOS os componentes necessários no import
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export function HomeView({ stats }) {
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
        // Removi a div duplicada e mantive apenas uma estrutura limpa
        <div className="p-8 animate-in fade-in slide-in-from-left-4 duration-500 bg-deb-soft min-h-screen">
            
            {/* Cabeçalho */}
            <div className="bg-deb-deep p-8 mb-8 rounded-app shadow-sm">
                <h1 className="text-4xl font-black text-white mb-2">Welcome Back!</h1>
                <p className="text-white/80 mb-4">Here is your productivity overview.</p>
            </div>
            
            {/* Cards de Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-6 border border-deb-purple bg-white shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs font-bold text-deb-nude uppercase tracking-widest">Total tasks</p>
                    <p className="text-4xl font-black text-deb-deep">{stats.total}</p>
                </div>
                <div className="card p-6 border border-green-500 bg-white shadow-sm">
                    <p className="text-xs font-bold text-deb-nude uppercase tracking-widest">Completed</p>
                    <p className="text-4xl font-black text-deb-deep">{stats.done}</p>
                </div>
                <div className="card p-6 border border-deb-nude bg-white shadow-sm">
                    <p className="text-xs font-bold text-deb-nude uppercase tracking-widest">Efficiency</p>
                    <p className="text-4xl font-black text-deb-deep">
                        {stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0}%
                    </p>
                </div>
            </div>

            {/* Grid de Gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
                
                {/* Gráfico 1 */}
                <div className="card p-6 flex flex-col items-center">
                    <h4 className="text-xs font-bold text-deb-nude uppercase mb-4 self-start">Task Distribution</h4>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={generalData}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} />
                            <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '8px', border: 'none'}} />
                            <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Gráfico 2 */}
                <div className="card p-6 flex flex-col items-center">
                    <h4 className="text-xs font-bold text-deb-nude uppercase mb-4 self-start">Completion Rate</h4>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={[{name: 'Status', done: stats.done, pending: stats.pending}]}>
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} />
                            <Tooltip cursor={{fill: 'transparent'}} />
                            <Bar dataKey="done" fill="#10B981" radius={[4, 4, 0, 0]} barSize={30} />
                            <Bar dataKey="pending" fill="#BDB0D9" radius={[4, 4, 0, 0]} barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Gráfico 3 */}
                <div className="card p-6 flex flex-col items-center">
                    <h4 className="text-xs font-bold text-deb-nude uppercase mb-4 self-start">Productivity %</h4>
                    <ResponsiveContainer width="100%" height={200}>
                        <BarChart data={efficiencyData}>
                            <YAxis domain={[0, 100]} hide />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fontSize: 12, fill: '#64748B'}} />
                            <Tooltip cursor={{fill: 'transparent'}} />
                            <Bar 
                                dataKey="value" 
                                radius={[4, 4, 0, 0]} 
                                barSize={60} 
                                label={{ position: 'top', fill: '#4F46E5', fontSize: 12, fontWeight: 'bold' }} 
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}