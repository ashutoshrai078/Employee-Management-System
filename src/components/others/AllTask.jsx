import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  
  return (

    <div id='alltask' className='bg-[#1c1c1c] mt-5 rounded p-5'>
      <div className='bg-red-400 py-2 mb-2 flex justify-between rounded px-4'>
        <h2 className='w-1/5 text-lg font-medium '>Employee Name</h2>
        <h3 className='w-1/5 text-lg font-medium '>New Task</h3>
        <h5  className='w-1/5 text-lg font-medium '>Active Task</h5>
        <h5  className='w-1/5 text-lg font-medium '>Completed</h5>
        <h5  className='w-1/5 text-lg font-medium '>Failed</h5>
      </div>
    <div>
       {userData.map((elem, idx)=>{
        
        return <div key={idx} className='border-2 border-emerald-600 py-2 mb-2 flex justify-between rounded px-4'>
        <h2 className='text-lg font-medium w-1/5'>{elem.firstName}</h2>
        <h3 className='text-lg w-1/5 font-medium text-blue-400'>{elem.taskCounts.newTask}</h3>
        <h5 className='text-lg w-1/5 font-medium text-yellow-400'>{elem.taskCounts.active}</h5>
        <h5 className='text-lg w-1/5 font-medium'>{elem.taskCounts.completed}</h5>
        <h5 className='text-lg w-1/5 font-medium text-red-600'>{elem.taskCounts.failed}</h5>
      </div>
      })}
    </div>
      
    </div>
  )
}

export default AllTask
