export function TaskItem({task, onDelete, onToggle}) {
    return (
        <li style={{ textDecoration: task.done ? 'line-through' : 'none' , cursor: 'pointer'}}>
            {/* {task.text} */}
            <span onClick={ () => onToggle(task.id)}>{task.text}</span>
            <button onClick={ () => onDelete(task.id)} >Delete</button>
        </li>
    )
}