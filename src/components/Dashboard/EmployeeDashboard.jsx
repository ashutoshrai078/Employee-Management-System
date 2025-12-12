import React from 'react'
import Header from '../others/Header'
import TaskDetails from '../others/TaskDetails'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='bg-[#1c1c1c] p-10 h-screen'>
      <Header/>
      <TaskDetails/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
