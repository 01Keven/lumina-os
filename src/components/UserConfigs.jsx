import { ButtonDropDown } from "../components/ButtonDropDown";
import { Settings2, LogOut,  UserCircle} from 'lucide-react';

export function UserConfigs({ userName }) {
    return (
        <aside className="card p-6 bg-white border border-deb-deep/40 items-center justify-between">
            <div className="items-center gap-4">
                <div className="flex items-center justify-between">
                    <h2 className=" text-sm font-bold text-deb-purple uppercase tracking-widest">
                        User Settings
                    </h2>
                    <ButtonDropDown 
                        icon={Settings2} 
                        className="text-deb-nude  p-1  hover:bg-deb-soft/40 rounded-full transition-colors"
                        /* shadow-xl: Sombra mais forte
                           border: Borda suave no container
                        */
                        dropdownClassName="  w-max p-1.5 right-0 left-auto shadow-xl z-30 border border-deb-soft/50 bg-white"
                    > 
                        <div className="flex flex-col gap-1">
                            {['Edit Profile', 'Logout'].map((item) => {
                                const isLogout = item === 'Logout';
                                
                                return (
                                    <button
                                        key={item}
                                        onClick={() => console.log(item)}
                                        /* border: Borda suave nos botões
                                           hover: Condicional para Azul (Edit) ou Vermelho (Logout)
                                        */
                                        className={`
                                            flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md border border-transparent transition-all duration-200 cursor-pointer
                                            ${isLogout 
                                                ? 'text-red-500 hover:bg-red-50 hover:border-red-100' 
                                                : 'text-deb-deep hover:bg-blue-50 hover:border-blue-100 hover:text-blue-600'
                                            }
                                        `}
                                    >
                                        {isLogout ? <LogOut size={14} /> : <UserCircle size={14} />}
                                        {item}
                                    </button>
                                );
                            })}
                        </div>
                    </ButtonDropDown>


                </div>
                <div className="flex items-center gap-2 mt-4">
                    <div className="w-12 h-12 bg-deb-deep rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {userName.charAt(0)}
                    </div>
                        <p className="text-deb-dark font-medium">{userName}</p>

                
                </div>
            </div>
            
        
    
        </aside>
    );
}