export function Modal({isOpen, title, onClose, children}) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop: Fecha ao clicar no fundo */}
            <div 
                className="absolute inset-0 bg-deb-dark/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Janela do Modal */}
            <div className="card w-full max-w-md relative z-10 animate-in fade-in zoom-in duration-300">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-deb-deep">{title}</h2>
                    <button 
                        onClick={onClose}
                        className="text-deb-nude hover:text-deb-deep text-2xl transition-colors"
                    >
                        &times;
                    </button>
                </div>

                {/* Aqui entra qualquer conteúdo que você passar por dentro da tag */}
                {children}
            </div>
        </div>
    );
}