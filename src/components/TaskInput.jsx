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
        <div>
            <input value={text}
                onChange={e => setText(e.target.value)} 
            />
            <button 
                onClick={handleAction}> Add
            </button>
        </div>
    )
}