import { ButtonDropDown } from "../components/ButtonDropDown";
import { Settings2 } from 'lucide-react';

export function UserConfigs({ userName }) {
    return (
        <aside className="card p-6 bg-white border border-deb-deep/40 items-center justify-between">
            <div className="items-center gap-4">
                <div className="flex items-center justify-between">
                    <h2 className=" text-sm font-bold text-deb-purple uppercase tracking-widest">
                        User Settings
                    </h2>
                    <ButtonDropDown icon={Settings2} className="text-deb-nude"/>


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