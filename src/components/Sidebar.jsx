// Sidebar.jsx
import { Home, Target, UserRoundPlus, X} from 'lucide-react';

export function Sidebar({ activePage, onPageChange, isOpen, onClose }) {
    const menuItems = [
        {id: 'home', label: "Home", icon: <Home size={20}/>},
        {id: 'tasks', label: "My Tasks", icon: <Target size={20}/>}
    ];

    return (
        <>
            {/* Backdrop: Só aparece no mobile quando aberto */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-deb-dark/50 backdrop-blur-sm z-50 lg:hidden" 
                    onClick={onClose}
                ></div>
            )}

            <aside className={`
                /* Mobile: Flutuante */
                fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-2xl transition-transform duration-300 transform
                ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                
                /* Desktop: Fixo na lateral */
                lg:static lg:translate-x-0 lg:flex lg:flex-col lg:h-screen lg:shrink-0 lg:shadow-none lg:border-r lg:border-deb-nude/10
            `}>
                <div className="p-4 border-b border-b-deb-dark/5 flex items-center justify-center relative">
                    <img src="public/images/lu.png" alt="Logo" className='w-11 h-10 p-1' draggable={false}/>
                    
                    {/* Botão de fechar: Só aparece no mobile */}
                    <button onClick={onClose} className="lg:hidden absolute right-4 text-deb-nude p-2 cursor-pointer">
                        <X size={24} />
                    </button>
                </div>

                <nav className="flex-1 flex flex-col gap-2 mt-6 px-4">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => onPageChange(item.id)}
                            className={`rounded-xl w-full flex items-center gap-4 px-5 py-2 transition-all duration-300 cursor-pointer ${
                                activePage === item.id
                                ? 'bg-deb-deep text-white scale-105 shadow-md'
                                : 'hover:bg-deb-purple/20 text-deb-purple'
                            }`}
                        >
                            {item.icon}
                            <span className="font-bold tracking-wide">{item.label}</span>
                        </button>
                    ))}
                </nav>

                <footer className='justify-center items-center flex mb-8 px-4 mt-100'>
                    <button className="w-full rounded-xl flex items-center justify-center px-3 py-2 border border-deb-deep/50 hover:bg-deb-deep/10 font-semibold text-deb-nude gap-2 transition-colors cursor-pointer">
                        <UserRoundPlus size={18}/>
                        <span className="text-sm">Invite People</span>
                    </button>
                </footer>
            </aside>
        </>
    );
}