// UserConfigs.jsx
export function UserConfigs({ userName }) {
    return (
        <aside className="card p-6 bg-white border border-deb-soft/30 items-center justify-between">
            <div className="items-center gap-4">
                <div>
                    <h2 className=" text-sm font-bold text-deb-purple uppercase tracking-widest">
                        User Settings
                    </h2>
                    <p className="text-deb-dark font-medium">{userName}</p>
                </div>
                <div className="w-12 h-12 bg-deb-deep rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {userName.charAt(0)}
                </div>
            </div>
            
            <div className="flex mt-8 border-t border-deb-soft/30 w-full justify-between">
                <button className="text-xs font-bold text-deb-nude hover:text-deb-deep transition-colors uppercase">
                    Edit Profile
                </button>
                <button className="text-xs font-bold text-red-400 hover:text-red-600 transition-colors uppercase">
                    Logout
                </button>
            </div>
        </aside>
    );
}