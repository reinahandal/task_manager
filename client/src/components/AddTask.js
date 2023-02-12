import React, { useState } from 'react'

const AddTask = ({onAdd}) => {
    const [title, setTitle] = useState("");
    const [day, setDay] = useState("");
    const [reminder, setReminder] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title){
            alert('Please add a title to your task');
        } else {
            onAdd(title,day,reminder);
            setTitle("");
            setDay("");
            setReminder(false);
        }
    }

    return (
        <form className='add-form' onSubmit={(e)=>handleSubmit(e)}>
            <div className='form-control'>
                <label>Task</label>
                <input type='text' placeholder='Add Task' value={title} onChange={(e)=>setTitle(e.target.value)}></input>
            </div>
            <div className='form-control'>
                <label>Day & Time</label>
                <input type='text' placeholder='Add Date & Time' value={day} onChange={(e)=>setDay(e.target.value)}></input>
            </div>
            <div className='form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}></input>
            </div>
            <input type='submit' value='Save Task' className='btn btn-block'></input>
        </form>
    )
}

export default AddTask
