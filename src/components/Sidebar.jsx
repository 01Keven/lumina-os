import { Home, Target} from 'lucide-react';

export function Sidebar({ activePage, onPageChange }) {
    const menuItems = [
        {id: 'home', label: "Home", icon: <Home size={20}/>},
        {id: 'tasks', label: "My Tasks", icon: <Target size={20}/>}
    ];

    return (
        <aside className="w-60 bg-deb-soft h-screen sticky flex flex-col text-white shadow-2xl">
            <div className="p-8 border-b border-b-deb-dark/5">
                <h2 className="text-2xl font-semibold text-deb-deep text-center">TASK PRO
                </h2>
            </div>

            <nav className="flex-1 flex flex-col gap-2 mt-6 px-4">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => onPageChange(item.id)}
                        className={`rounded-xl w-full flex items-center gap-4 px-5 py-2 transition-all duration-300 cursor-pointer ${
                            activePage === item.id
                            ? 'bg-deb-deep text-white scale-106'
                            : 'hover:bg-deb-purple/20 text-deb-purple'
                        }`}
                    >
                        <span className="text-xl">{item.icon}</span>
                        <span className="font-bold tracking-wide">{item.label}</span>
                    
                    </button>))}
                
            </nav>
            <div className="p-8 text-center">
                <footer className="text-deb-deep font-medium text-sm">
                    All Rights Reserved &copy; 2026 - Keven Christian
                </footer>
                
            </div>
        </aside>
    )
}