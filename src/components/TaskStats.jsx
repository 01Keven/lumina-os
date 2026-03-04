export function TaskStats({onDone, Total}) {
    return (
        <div>
            <div>Total: {Total} |
            <span> Done: {onDone}</span>

            </div>
        </div>
    )
}