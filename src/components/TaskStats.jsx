export function TaskStats({onDone, onPending, Total}) {
    return (
        <div>
            <div>Total: {Total} |
            <span> Pending: {onPending} |</span>
            <span> Done: {onDone}</span>
            </div>
        </div>
    )
}