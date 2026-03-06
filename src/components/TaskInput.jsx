import { useState } from "react";
import { Modal } from "./Modal";

export function TaskInput({onAdd}) {
    const [text, setText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAction = () => {
        if (text.trim().length >= 3) {
            onAdd(text)
            setIsModalOpen(false)
            setText('')

        } else {
            alert('A tarefa precisa de pelo menos 3 caracteres')
        }
    }



    return (
        <>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary flex items-center gap-2 mb-6"
            >
                <span className="text-xl">+</span> Add New Task
            </button>

            <Modal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
                title="New Task"
            >
                {/* Tudo aqui dentro é o 'children' do Modal */}
                <div className="flex flex-col gap-4">
                    <label className="text-sm font-bold text-deb-purple uppercase tracking-widest">
                        What needs to be done?
                    </label>
                    <input 
                        autoFocus
                        value={text} 
                        className="input-field" 
                        placeholder="Ex: Buy some milk..."
                        onChange={e => setText(e.target.value)} 
                        onKeyDown={(e) => e.key === 'Enter' && handleAction()}
                    />
                    
                    <div className="flex gap-3 mt-4">
                        <button 
                            className="flex-1 px-4 py-2 text-deb-nude font-medium hover:bg-deb-soft/10 rounded-button transition-colors"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancel
                        </button>
                        <button 
                            className="btn-primary flex-1"
                            onClick={handleAction}
                            

                        >
                            Create Task
                        </button>
                    </div>
                </div>
            </Modal>
        </>
    );
}