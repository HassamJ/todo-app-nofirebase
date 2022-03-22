import React from 'react'
import Task from './Task'
import FilterControl from './FilterControl'

const TaskList = ({tasks, setTasks,filterStatus,setFilterStatus, filterTasks}) => {
    
    const clearCompleted = ()=> {
        //Clear's Tasks by filtering out
          setTasks(tasks.filter((task)=> !task.status))
    }
    
    
    return (
        <div className="task-list-wrapper">
            <div className="task-list">
                
                {filterTasks.map((task)=> {
                    return <Task 
                    text = {task.text}
                    key = {task.id}
                    status = {task.status}
                    tasks = {tasks}
                    setTasks = {setTasks}
                    task = {task}
                    
                    
                    />
                })}
            
            
            </div>
        <div className="task-item-info">
            <div className="item-left">
                <p>5 Itmes Left</p>
            </div>
            <FilterControl
             filterStatus = {filterStatus}
             setFilterStatus = {setFilterStatus}
             filterTasks = {filterTasks}/>
            <div className="item-clear">
               <span onClick={clearCompleted}>Clear Completed</span> 
    
            </div>
        </div>
            </div>
      )





}
  


export default TaskList