
import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useState, useEffect } from 'react';

const data = [
  { id: 1, text: "Finish contacts hw", status: false },
  { id: 2, text: "Study react hooks", status: false },
  { id: 3, text: "Finish Clever programmer challenge", status: false },
  { id: 4, text: "Run 1 mile", status: false },
  { id: 5, text: "Finish errands", status: false },
  { id: 6, text: "Complete Todo App", status: false },
];




function App() {

  const [tasks,setTasks] = useState(data)
  const [filterStatus, setFilterStatus] = useState('all')
  const [filterTasks, setFilterTasks] = useState(tasks)

  
  
useEffect(()=> {
 const handleFilter = () => {
  
   if(filterStatus === 'Active') {
     
    setFilterTasks(tasks.filter((task)=> task.status === false))

   }
   else if (filterStatus === 'Completed'){
    setFilterTasks(tasks.filter((task)=> task.status === true))
  
   }
   else {
    setFilterTasks(tasks)

   }
   
 }
 handleFilter()
},[tasks,filterStatus])


  return (
    <div className="App">
      <div className="container">
        <div className="header">

          <h1>TODO</h1>
          <img src="./images/icon-sun.svg" alt="sun" />

        </div>
        <TaskInput 
        tasks = {tasks} 
        setTasks = {setTasks}/>

        <TaskList 
        tasks = {tasks} 
        setTasks ={setTasks}
        filterStatus = {filterStatus}
        filterTasks = {filterTasks}
        setFilterStatus = {setFilterStatus}
        />
        

      </div>
    
    </div>
  );
}

export default App;
