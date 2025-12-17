import React from 'react'
import Header from '../others/Header'
import TaskDetails from '../others/TaskDetails'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='bg-[#1c1c1c] p-10 h-screen'>
      <Header changeUser={props.changeUser} data = {props.data}/>
      <TaskDetails data = {props.data}/>
      <TaskList data = {props.data}/>
    </div>
  )
}

export default EmployeeDashboard
