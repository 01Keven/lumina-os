import { UserImage } from "./UserImage";
import { Bell, Mail, ChevronLeft, Search } from "lucide-react";

export function Navbar({ userName }) {
    return (
        /* justify-between: Garante que o primeiro item (Search) vá para a esquerda 
           e o segundo item (Icons) vá para a direita */
        <nav className="bg-white border-b border-deb-nude/20 p-4 flex items-center justify-between sticky top-0 z-50 pr-8 w-full">
            
            {/* Lado Esquerdo: Input de Busca */}
            <div className="flex-none w-90 ml-4"> {/* w-80 define um tamanho fixo elegante */}
                <div className="relative flex items-center group">
                    <Search 
                        className="absolute left-3 text-deb-nude/40 group-focus-within:text-blue-500 transition-colors" 
                        size={18} 
                    />
                    <input 
                        type="text" 
                        placeholder="Search tasks..." 
                        className="w-full bg-deb-nude/5 text-deb-nude placeholder:text-deb-nude/60 border border-deb-nude/30 rounded-2xl py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:bg-white transition-all shadow-sm"
                        maxLength={20}
                    />
                </div>
            </div>

            {/* Lado Direito: Notificações e Perfil */}
            <div className="flex items-center gap-6">
                <div className="flex gap-6 items-center cursor-pointer">
                    <div className="relative hover:scale-110 transition-transform">
                        <Mail className="w-5 h-5 text-deb-nude" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                    </div>
                    <div className="relative hover:scale-110 transition-transform">
                        <Bell className="w-5 h-5 text-deb-nude" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full border-2 border-white"></span>
                    </div>
                    
                    {/* Divisor Visual */}

                    <div className="flex items-center gap-2 group">
                        <UserImage name={userName} className="w-10 h-10 border-2 border-deb-soft group-hover:border-deb-deep transition-colors" />
                        <div className="hidden md:flex flex-col">
                             <p className="text-deb-nude font-bold text-sm flex items-center leading-none">
                                {userName}
                                <ChevronLeft className="w-4 h-4 ml-1 -rotate-90" />
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}