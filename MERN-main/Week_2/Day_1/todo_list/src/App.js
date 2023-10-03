
import './App.css';
import { useState } from 'react';
import Display from './components/Display';
function App() {

  const [tasks, setTasks] = useState([])

  const addTask = (value) => {
    setTasks([...tasks, {text:value,done:false}])
  }

  const [oneTask, setOneTask] = useState("")

  const handleInput = (e) =>{
      e.preventDefault();
      addTask(oneTask);
      setOneTask("");
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter( (t,i) => i !== id ))
  }

  const updateTask = (id) => {
    const newT = tasks
    newT[id].done= !newT[id].done
    setTasks(newT)
    console.log(tasks)
  }

  return (
    <div className="App">
      <form onSubmit={(e)=>{handleInput(e)}}>
        <input onChange={(e)=>{setOneTask(e.target.value)}} value={oneTask} />
        <button>Add</button>
      </form>
      <br />
      {tasks.map((task, index)=>{
        return <Display task={task} index={index} deleteTask={deleteTask} updateTask={updateTask} />
      })}
      
    </div>
  );
}

export default App;
