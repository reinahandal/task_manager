import Task from "./Task"

const Tasks = ({ tasks }) => {
    return (
        <>
        {tasks.map((task, idx)=>(
            <Task key={idx} task={task}/>
            ))}
        </>
    )
}

export default Tasks
