import { useState } from "react"

export function TaskItem({task, onDelete, onToggle, onEdit}) {

    const [isEditing, setIsEditing] = useState(false);
    const [tempText, setTempText] = useState(task.text)

    const handleSave = () => {
        if (tempText.trim().length >= 3) {
            onEdit(task.id, tempText)
            setIsEditing(false)
        } else {
            alert("precisa ser maior que 3")  
        } 
    };

    if (isEditing) {
        return (
            <li>
                <input 
                type="text" 
                value={tempText} 
                onChange={(e) => setTempText(e.target.value)}/>

                <button
                    onClick={ () => {
                        handleSave()
        
                    }}
                >
                    Save
                </button>
            </li>
        )
    }

    return (


        <li style={{ textDecoration: task.done ? 'line-through' : 'none' , cursor: 'pointer'}}>
            {/* {task.text} */}
            <span onClick={ () => onToggle(task.id)}>{task.text}</span>
            <button onClick={ () => onDelete(task.id)} >Delete</button>
            <button onClick={ () => setIsEditing(true)}>Edit</button>
        </li>
    )
}