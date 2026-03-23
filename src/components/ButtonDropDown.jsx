import { useState, useRef, useEffect } from "react";


export function ButtonDropDown({buttonText, children, icon: Icon, className = ""}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <button className={`flex items-center gap-2 transition-all ${className}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                {Icon && <Icon className="" size={20} />}
                {buttonText}
            </button>

            {isOpen && (
                <div className="absolute mt-2 w-48 bg-white border border-deb-soft rounded-button shadow-lux z-20 overflow-hidden animate-in zoom-in duration-200"
                
                onClick={() => setIsOpen(false)}>

                    <div className="flex flex-col py-1">
                        {children}
                    </div>
                </div>
            )}
        </div>
    )
}