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
            <tr className="bg-deb-soft/5">
                <td className="p-4">
                    <input 
                    className="input-field py-1"
                    type="text" 
                    value={tempText} 
                    onChange={(e) => setTempText(e.target.value)}/>

                </td>
                <td className="p-4 italic text-deb-nude">
                   {task.done ? "Done" : "Pending"} 
                </td>

                <td>
                    <button
                    className="text-green-600 font-bold hover:underline"
                        onClick={ () => {
                            handleSave()
                            
                        }}
                    >
                        Save
                    </button>
                    <button 
                        className="text-deb-nude hover:underline"
                        onClick={ () => {
                        setIsEditing(false)
                        // setTempText('')
                    }}> Cancel</button>
                </td>
            </tr>
        )
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
                <button onClick={() => setIsEditing(true)} className="text-deb-purple hover:text-deb-deep transition-colors">Edit</button>
                <button onClick={() => onDelete(task.id)} className="text-red-400 hover:text-red-600 transition-colors">Delete</button>
            </div>
        </td>      
    </tr>
)
}
