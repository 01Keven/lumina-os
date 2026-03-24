import { Home, Target, UserRoundPlus} from 'lucide-react';

export function Sidebar({ activePage, onPageChange }) {
    const menuItems = [
        {id: 'home', label: "Home", icon: <Home size={20}/>},
        {id: 'tasks', label: "My Tasks", icon: <Target size={20}/>}
    ];

    return (
        <aside className="w-60 bg-deb-soft h-screen sticky flex flex-col text-white shadow-2xl shrink-0">
            <div className="p-4 border-b border-b-deb-dark/5 items-center flex flex-col justify-center">
                <img src="src/assets/images/lu.png" alt=""  className='w-12 p-1'/>
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

            <footer className='justify-center items-center flex mb-8'>
                <button className="rounded-xl flex items-center px-3 py-2 transition-all duration-300 cursor-pointer border border-deb-deep/50 hover:bg-deb-deep/10 font-semibold text-deb-nude mt-4 mb-6 gap-2">
                <UserRoundPlus size={18}/>
                        Invite People
        
                </button>
            </footer>
        </aside>
    )
}