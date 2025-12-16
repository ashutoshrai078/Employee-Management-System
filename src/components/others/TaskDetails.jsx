import React from 'react'

const TaskDetails = ({data}) => {
  return (
    <div className='flex mt-10 w-full justify-between gap-3'>
      <div className='py-5 px-10 rounded-xl w-full bg-red-400'>
        <h2 className='text-2xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className='text-xl font-medium'>Active Tasks</h3>
      </div>
      <div className='py-5 px-10 rounded-xl w-full bg-blue-400'>
        <h2 className='text-2xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='py-5 px-10 rounded-xl w-full bg-green-400'>
        <h2 className='text-2xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className='text-xl font-medium'>Completed Tasks</h3>
      </div>
      <div className='py-5 px-10 rounded-xl w-full bg-yellow-400'>
        <h2 className='text-2xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className='text-xl font-medium'>Failed Tasks</h3>
      </div>
      
    </div>
  )
}

export default TaskDetails
