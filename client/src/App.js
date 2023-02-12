import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";


function App() {
  const [tasks, setTasks] = useState([]);
  
  const addTask = (title,day,reminder) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    setTasks([...tasks, {
      id: id,
      title: title,
      day: day,
      reminder: reminder,
    }])
  }

  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=> 
    task.id===id ? 
    {...task, reminder : !task.reminder} : task ))
  }  


  return (
    <div className='container'>
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 
      <h3>No tasks to show</h3>
      }
    </div>
  );
}

export default App;
