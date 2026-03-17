import { useState, useRef, useEffect } from "react";
import { ListFilter } from 'lucide-react';

export function ButtonDropDown({buttonText, children}) {
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
            <button className="btn-primary flex items-center gap-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                <ListFilter className="" size={20} />
                {buttonText}
                {/* <svg className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg> */}
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