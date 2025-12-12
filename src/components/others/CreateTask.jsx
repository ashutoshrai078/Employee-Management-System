import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-10'>
        <form className='flex flex-wrap w-full p-5 bg-[#1c1c1c] item-start justify-between'>
          <div className='w-1/2'>
            <div>
              <h3>Enter Task</h3>
              <input type="text" placeholder='Enter Title' className='bg-transparent mb-2 font-sm rounded border-white border' />
            </div>
            <div>
              <h3>Date</h3>
              <input type="date" className='bg-transparent rounded border-white mb-2 border font-sm' />
            </div>
            <div>
              <h3>Assign to</h3>
              <input type="text" placeholder='Emplyoyee Name' className='bg-transparent mb-2 font-sm rounded border-white border' />
            </div>
            <div>
              <h3>Category</h3>
              <input type="text" placeholder='Department' className='bg-transparent border-white mb-2 font-sm rounded border'/>
            </div>
          </div>
          <div className='w-1/2 flex flex-col'>
            <h3>Description</h3>
            <textarea name="" id="" className='bg-transparent h-full mt-3 mb-2 border-white rounded border'></textarea>
            <button className='bg-green-600 rounded py-1 '>Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
