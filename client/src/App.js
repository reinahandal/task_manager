import Header from "./components/Header";
import Footer from "./components/Footer";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";
import { Routes, Route } from 'react-router-dom';
import About from "./components/About";

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);

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

  const toggleForm = () => {
    setShowForm(!showForm);
  }

  return (
    <div className='container'>
    <Header toggleForm={toggleForm} showForm={showForm}/>
    <Routes>
      <Route path="/" element={
      <>
      {
        showForm ? 
        <AddTask onAdd={addTask}/>
        : ''
      }
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 
      <h3>No tasks to show</h3>
      }
      </>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
