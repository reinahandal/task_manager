import React from 'react'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={task.reminder ? 'task reminder' : 'task'} onDoubleClick={()=>onToggle(task.id)}>
        <h3>{task.title} <FaTimes onClick={()=> onDelete(task.id)} style={{color:'indianred', cursor:'pointer'}}/></h3>
        <p >{task.day}</p>
        </div>
    )
}

export default Task
