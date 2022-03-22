import React, {useState} from 'react'
import Check from '../images/icon-check.svg'

const Task = ({text,task,tasks,setTasks}) => {
// create a state variable to keep track of the mutable task
  const [mutableTask, setMutableTask] = useState(task)


const checked = mutableTask.status ? 'checked' : '';
const checkIcon = mutableTask.status ? (<img src={Check} alt='completed'/>): '';


  

const markcompleted = () => {
  // set the status of the task to the opposite boolean
  setMutableTask({...mutableTask, status:!mutableTask.status})


  const updatedTasks = tasks.map((item)=> {


    return task.id === item.id ? {...item, status : !item.status} : item

  })
 
    setTasks(updatedTasks)
}





  return (
    <div className="task-item">

    <div className="check" onClick ={markcompleted}>
      <div className= {`check-mark ${checked}`} >
        {checkIcon}

      </div>
      </div>
      <div className= {` task-text ${checked} `} > 
        
         <p>{text}</p>
         
        
      </div>
    

  </div>
  )
}

export default Task