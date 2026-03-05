// TaskStats.jsx
export function TaskStats({onDone, onPending, Total}) {
    return (
        <div className="mt-8 pt-6 border-t border-deb-soft/30 flex justify-between items-center text-sm font-medium text-deb-nude">
            <div className="flex gap-6">
                <span>Total: <span className="text-deb-dark">{Total}</span></span>
                <span>Pending: <span className="text-deb-purple">{onPending}</span></span>
                <span>Completed: <span className="text-green-600">{onDone}</span></span>
            </div>
            {Total > 0 && (
                <div className="text-deb-deep font-bold">
                    {Math.round((onDone / Total) * 100)}% Concluído
                </div>
            )}
        </div>
    )
}