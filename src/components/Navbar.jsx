import { UserImage } from "./UserImage";
import { Bell, Mail, ChevronLeft, Search, Menu  } from "lucide-react";

// Navbar.jsx
// ... imports permanecem iguais

export function Navbar({ userName, onMenuClick }) {
    return (
        <nav className="bg-white border-b border-deb-nude/20 p-4 flex items-center justify-between sticky top-0 z-40 w-full pr-8">
            
            {/* Lado Esquerdo: Botão Menu (Mobile) + Busca */}
            <div className="flex items-center gap-2 ml-4 flex-1 max-w-md">
                <button 
                    onClick={onMenuClick} 
                    className="lg:hidden p-2 text-deb-nude hover:bg-deb-soft rounded-lg transition-colors cursor-pointer shrink-0"
                >
                    <Menu size={24} />
                </button>

                <div className="relative flex items-center group w-full">
                    <Search 
                        className="absolute left-3 text-deb-nude/40 group-focus-within:text-blue-500 transition-colors" 
                        size={18} 
                    />
                    <input 
                        type="text" 
                        placeholder="Search tasks..." 
                        className="w-full bg-deb-nude/5 text-deb-nude placeholder:text-deb-nude/60 border border-deb-nude/30 rounded-2xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm"
                        maxLength={20}
                    />
                </div>
            </div>
            
            {/* Lado Direito permanece igual ao seu código anterior */}
            <div className="flex items-center gap-6 ml-4">
                <div className="hidden md:flex gap-4 items-center border-r border-deb-nude/20 pr-6">
                    <Mail className="w-5 h-5 text-deb-nude cursor-pointer hover:text-deb-deep transition-colors" />
                    <Bell className="w-5 h-5 text-deb-nude cursor-pointer hover:text-deb-deep transition-colors" />
                </div>
                
                <div className="flex items-center gap-3 group cursor-pointer">
                    <UserImage name={userName} className="w-10 h-10 border-2 border-deb-soft group-hover:border-deb-deep transition-all" />
                    <div className="hidden md:flex flex-col">
                         <p className="text-deb-nude font-bold text-sm flex items-center leading-none">
                            {userName}
                            <ChevronLeft className="w-4 h-4 ml-1 -rotate-90 transition-transform group-hover:translate-y-0.5" />
                         </p>
                    </div>
                </div>
            </div>
        </nav>
    );
}