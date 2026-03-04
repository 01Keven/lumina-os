import { useState } from "react";

export function TaskInput({onAdd}) {
    const [text, setText] = useState('');
    
    const handleAction = () => {
        if (text.trim().length >= 3) {
            onAdd(text)
            setText('')
        } else {
            alert('A tarefa precisa de pelo menos 3 caracteres')
        }
    }


    return (
        <div className="flex gap-3">
            <input value={text} className="input-field" placeholder="Ex: Clear the table"
                onChange={e => setText(e.target.value)} 
            />
            <button
                className="btn-primary whitespace-nowrap"
                onClick={handleAction}> Add
            </button>
        </div>
    )
}