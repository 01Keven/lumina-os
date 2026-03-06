import { useState } from "react"
import { Modal } from "./Modal";

export function TaskItem({task, onDelete, onToggle, onEdit}) {

    const [isEditing, setIsEditing] = useState(false);
    const [tempText, setTempText] = useState(task.text)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isCloseModalOpen, setIsCloseModalOpen] = useState(false)
    

    const handleSave = () => {
        if (tempText.trim().length >= 3) {
            onEdit(task.id, tempText)
            setIsEditing(false)
            setIsModalOpen(false)
            // setTempText('')
            
        } else {
            alert("precisa ser maior que 3")  
        } 
    };

    const handleCancel = () => {
        setTempText(task.text)
        setIsModalOpen(false)
        setIsCloseModalOpen(false)
    }

    return (
        <tr className="hover:bg-deb-soft/5 transition-colors group">
            <td 
                className={`p-4 cursor-pointer transition-all ${task.done ? 'line-through text-deb-nude opacity-60' : 'text-deb-dark font-medium'}`}
                onClick={() => onToggle(task.id)}
            >
                {task.text}
            </td>
            
            <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-2xs font-bold uppercase tracking-wider ${
                    task.done ? 'bg-green-100 text-green-700' : 'bg-deb-purple/10 text-deb-purple'
                }`}>
                    {task.done ? "Done" : "Pending"}
                </span>
            </td>

            <td className="p-4 text-center">
                <div className="flex gap-4 justify-center">
                    {/* Botão que abre o Modal de Edição */}
                    <button 
                        onClick={() => setIsModalOpen(true)} 
                        className="text-deb-purple hover:text-deb-deep transition-colors"
                    >
                        Edit
                    </button>

                    <button 
                        onClick={() => setIsCloseModalOpen(true)} 
                        className="text-red-400 hover:text-red-600 transition-colors"
                    >
                        Delete
                    </button>
                </div>

                <Modal
                    isOpen={isCloseModalOpen}
                    onClose={handleCancel}
                    title="Delete Task"
                >

                    <div className="flex justify-between items-center w-full mt-6">
                        <button
                            className="px-4 py-2 text-deb-nude font-medium hover:bg-deb-soft/10 rounded-button transition-colors"
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        
                        <button 
                            onClick={() => onDelete(task.id)} 
                            className="px-6 py-2 bg-red-500 text-white font-bold rounded-button hover:bg-red-600 transition-all shadow-md active:scale-95"
                        >
                            Yes, Delete
                        </button>
                    </div>
                </Modal>

                {/* Modal de Edição */}
                <Modal
                    isOpen={isModalOpen}
                    onClose={handleCancel}
                    title="Edit Task"
                >
                    <div className="flex flex-col gap-4">
                        <label className="text-sm font-bold text-deb-purple uppercase tracking-widest text-left">
                            Update your task
                        </label>
                        
                        <input 
                            className="input-field"
                            type="text" 
                            value={tempText} 
                            onChange={(e) => setTempText(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSave()}
                        />

                        <div className="flex gap-3 mt-4">
                            <button 
                                className="flex-1 px-4 py-2 text-deb-nude font-medium hover:bg-deb-soft/10 rounded-button transition-colors"
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                            <button 
                                className="btn-primary flex-1"
                                onClick={handleSave}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </Modal>
            </td>      
        </tr>
    )
}
