export function UserImage({ name, size = 40, className = '' }) {
    const initial = name.charAt(0).toUpperCase();
    return (
        <div 
            className={`rounded-full bg-deb-deep flex items-center justify-center text-white font-bold ${className}`} 
            style={{ width: size, height: size, fontSize: size / 2 }}
        >
            {initial}
        
        </div>
    );
}