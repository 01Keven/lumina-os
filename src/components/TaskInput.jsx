import { useState } from "react";

export function TaskInput(onAdd) {
    const [text, setText] = useState('');

    return (
        <div>
            <input value={text}
            onChange={e => setText(e.target.value)} />
            <button onClick={onAdd}> Add
            </button>
        </div>
    )
}