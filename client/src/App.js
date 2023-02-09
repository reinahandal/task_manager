import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'food shopping',
        day: 'Feb 5th at 2:30 pm',
        reminder: false,
    },
    {
        id: 2,
        text: 'have lunch with yara',
        day: 'Feb 8th at 2:30 pm',
        reminder: false,
    },
    {
        id: 3,
        text: 'learn react',
        day: 'Feb 10th at 10:00 am',
        reminder: false,
    },
])

  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
