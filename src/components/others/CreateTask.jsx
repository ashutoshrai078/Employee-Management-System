import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  
  const [newTask, setNewTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault();
    setNewTask({title,description,date,category,active:false,newTask:true, failed:false, completed:false})

    const data = userData
    
    data.forEach((elem)=>{
      if (assignTo == elem.firstName) {
        elem.tasks.push(newTask)
      } 
    })
   setUserData(data)
   console.log(data);
   

    setTitle('')
    setAssignTo('')
    setDescription('')
    setDate('')
    setCategory('')
    
  }

  return (
    <div className='mt-10'>
        <form onSubmit={(e)=>{submitHandler(e)}} className='flex flex-wrap w-full p-5 bg-[#1c1c1c] item-start rounded justify-between'>
          <div className='w-1/2'>
            <div>
                <h3>Enter Task</h3>
                <input 
                  value={title}
                  onChange={(e)=>{setTitle(e.target.value)}}
                  type="text" 
                  placeholder='Enter Title' 
                  className='bg-transparent px-2 mb-2 font-sm rounded border-white border' 
                />
            </div>
            <div>
              <h3>Date</h3>
              <input 
                value={date}
                onChange={(e)=>{setDate(e.target.value)}}
                type="date" 
                className='bg-transparent rounded px-2 border-white mb-2 border font-sm'
              />
            </div>
            <div>
              <h3>Assign to</h3>
              <input 
                value={assignTo}
                onChange={(e)=>{setAssignTo(e.target.value)}}
                type="text" 
                placeholder='Emplyoyee Name' 
                className='bg-transparent px-2 mb-2 font-sm rounded border-white border' 
              />
            </div>
            <div>
              <h3>Category</h3>
              <input 
                value={category}
                onChange={(e)=>{setCategory(e.target.value)}}
                type="text" 
                placeholder='Department' 
                className='bg-transparent px-2 border-white mb-2 font-sm rounded border'
              />
            </div>
          </div>
          <div className='w-1/2 flex flex-col'>
            <h3>Description</h3>
            <textarea
              value={description}
              onChange={(e)=>{setDescription(e.target.value)}} 
              className='bg-transparent h-full mt-3 mb-2 border-white rounded border'>
            </textarea>
            <button className='bg-green-600 rounded py-1 '>Create Task</button>
          </div>
        </form>
      </div>
  )
}

export default CreateTask
