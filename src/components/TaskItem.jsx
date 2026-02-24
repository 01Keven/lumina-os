export function TaskItem({task, onDelete, onToggle}) {
    return (
        <li style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
            {task.text}
            <input type="checkbox" name="" id="" onClick={ () => onToggle(task.id)}/>
            <button onClick={ () => onDelete(task.id)} >Delete</button>
        </li>
    )
}