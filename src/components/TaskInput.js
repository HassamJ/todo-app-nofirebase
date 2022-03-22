import React, {useState} from 'react'





const TaskInput = ({tasks,setTasks}) => {

    const [input,setInput] = useState('')
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }
    const handleForm = (e) => {
        e.preventDefault()

        const generateID = (array) => {
            const taskIDs = array.map((item)=> item.id)
            return Math.max(...taskIDs) +1   
        }
        
        const newTask = {
             id: generateID((tasks)),
            text: input,
            status: false
        }


        setTasks([...tasks,newTask])

    }

  return (
    <div className="task-input">

          <div className="check">
            <div className="check-mark">

            </div>
            </div>
            <div className="new-todo-input">
              <form onSubmit={handleForm} >
                <input onChange={handleChange} id= 'todo-input' type='text' placeholder='create a new todo'/>
              </form>
            </div>
          

        </div>
  )
}

export default TaskInput