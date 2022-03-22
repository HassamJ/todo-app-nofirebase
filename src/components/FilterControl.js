import React from 'react'

const FilterControl = ({filterStatus,setFilterStatus}) => {


  

const handleStatus = (status) => {

  setFilterStatus(status)
}

  return (
    <div className="item-statuses">
        <span onClick = {()=>handleStatus('All')} >
          All
          </span>
          <span onClick = {()=>handleStatus('Active')} >
          Active
          </span>
          <span onClick = {()=>handleStatus('Completed')} >
          Completed
          </span>
        

      
    </div>
  )
}

export default FilterControl