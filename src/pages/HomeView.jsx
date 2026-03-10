export function HomeView({ stats }) {
    return (
        <div className="animate-in fade-in slide-in-from-left-4 duration-500">
            <h1 className="text-4xl font-black text-deb-deep mb-2">Welcome Back!</h1>
            <p className="text-deb-nude mb-8">Here is your productivity overview.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="card p-6 border-l-4 border-deb-purple bg-white shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xs font-bold text-deb-nude uppercase tracking-widest">Total tasks</p>
                    <p className="text-3xl font-black text-deb-deep">{stats.total}</p>
                </div>
                <div className="card p-6 border-l-4 border-green-500 bg-white shadow-sm">
                    <p className="text-xs font-bold text-deb-nude uppercase tracking-widest">Completed</p>
                    <p className="text-3xl font-black text-deb-deep">{stats.done}</p>
                </div>
                <div className="card p-6 border-l-4 border-deb-nude bg-white shadow-sm">
                    <p className="text-xs font-bold text-deb-nude uppercase tracking-widest">Efficiency</p>
                    <p className="text-3xl font-black text-deb-deep">
                        {stats.total > 0 ? Math.round((stats.done / stats.total) * 100) : 0}%
                    </p>
                </div>
            </div>
        </div>
    );
}