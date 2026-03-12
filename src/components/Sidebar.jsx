export function Sidebar({ activePage, onPageChange }) {
    const menuItems = [
        {id: 'home', label: "Home", icon: '🏠'},
        {id: 'tasks', label: "My Tasks", icon: '🎯'}
    ];

    return (
        <aside className="w-64 bg-deb-dark h-screen sticky top-0 flex flex-col text-white shadow-2xl">
            <div className="p-8 border-b border-deb-soft/10">
                <h2 className="text-2xl font-black text-deb-soft tracking-tighter text-center">TASK PRO
                </h2>
            </div>

            <nav className="flex-1 p-4 space-y-2 mt-4">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onPageChange(item.id)}
                        className={`w-full flex items-center gap-4 px-5 py-4 rounded-button transition-all duration-300 ${
                            activePage === item.id
                            ? 'bg-deb-deep text-white shadow-lg scale-105'
                            : 'hover:bg-deb-purple/20 text-deb-nude'
                        }`}
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-bold tracking-wide">{item.label}</span>
                    
                    </button>))}
                
            </nav>
        </aside>
    )
}