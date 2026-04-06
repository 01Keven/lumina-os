import { useState } from "react";
import { Modal } from "./Modal";
import { Plus } from 'lucide-react';
import { DueDate } from "./DueDate";

export function TaskInput({onAdd}) {
    const [text, setText] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempDate, setTempDate] = useState(null);

    const handleAction = () => {
        if (text.trim().length >= 3) {
            onAdd(text, tempDate)
            setIsModalOpen(false)
            setText('')
            setTempDate(null)

        } else {
            alert('A tarefa precisa de pelo menos 3 caracteres')
        }
    }

    return (
        <>
            <button 
                onClick={() => setIsModalOpen(true)}
                className="btn-primary bg-deb-deep items-center cursor-pointer"
            >
                <Plus size={20} />
                Add
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
                        maxLength={40}
                    />

                    <label>
                        Due Date (optional)
                    </label>
                    <DueDate selectedDate={tempDate} onDateChange={(date) => setTempDate(date)} />
                    
                    <div className="flex gap-3 mt-4 justify-between">
                        <button 
                            className="flex-1 px-4 py-2 text-deb-nude font-medium rounded-button transition-colors cursor-pointer bg-deb-purple/20 hover:bg-deb-purple/30"
                            onClick={() => setIsModalOpen(false)}
                        >
                            Cancel
                        </button>
                        <button 
                            className="btn-primary flex-1 cursor-pointer"
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