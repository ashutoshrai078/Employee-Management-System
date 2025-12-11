import React from 'react'

const TaskDetails = () => {
  return (
    <div className='flex mt-10 w-full justify-between gap-3'>
      <div className='py-5 px-10 rounded-xl w-full bg-red-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='py-5 px-10 rounded-xl w-full bg-blue-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='py-5 px-10 rounded-xl w-full bg-green-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='py-5 px-10 rounded-xl w-full bg-yellow-400'>
        <h2 className='text-2xl font-semibold'>0</h2>
        <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      
    </div>
  )
}

export default TaskDetails
