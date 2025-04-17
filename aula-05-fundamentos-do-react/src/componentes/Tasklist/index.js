
const Tasklist = ({ tasks }) => {
    if (tasks.length === 0){
        return <p>Não há tarefas no momento</p>
    }
    
    return(
        <>
            <div>
                <h4>Lista de Tarefas:</h4>
                <ol>
                    {/* Iterando sobre a lista de tarefas */}
                    {tasks.map((task) => (
                        <li key={task.id}>{task.text}</li>
                    ))}
                    
                </ol>
            </div>
        </>
    )
}

export default Tasklist;