import { useState } from "react"

export function TaskItem({task, onDelete, onToggle, onEdit}) {

    const [isEditing, setIsEditing] = useState(false);
    const [tempText, setTempText] = useState(task.text)
    
    const handleSave = () => {
        if (tempText.trim().length >= 3) {
            onEdit(task.id, tempText)
            setIsEditing(false)
            // setTempText('')
            
        } else {
            alert("precisa ser maior que 3")  
        } 
    };
    
    if (isEditing) {
        return (
            <tr>
                <td>
                    <input 
                    type="text" 
                    value={tempText} 
                    onChange={(e) => setTempText(e.target.value)}/>

                </td>
                <td>
                   {task.done ? "Done" : "Pending"} 
                </td>

                <td>
                    <button
                        onClick={ () => {
                            handleSave()
                            
                        }}
                    >
                        Save
                    </button>
                    <button onClick={ () => {
                        setIsEditing(false)
                        // setTempText('')
                    }}> Cancel</button>
                </td>
            </tr>
        )
    }

    return (


        <tr>

            <td
            style={{ textDecoration: task.done ? 'line-through' : 'none' , cursor: 'pointer'}} onClick={() => onToggle(task.id)}>
                {task.text}
            </td>
            
            <td>
                {task.done ? "Done" : "Pending"}
            </td>
            <td>
                <button onClick={ () => setIsEditing(true)}>Edit</button>
                <button onClick={ () => onDelete(task.id)} >Delete</button>
                
            </td>      
        </tr>
    )
}
