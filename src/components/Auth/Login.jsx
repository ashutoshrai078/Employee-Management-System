import React, { useState } from 'react'

const Login = () => {
  const submitHandler = (e)=>{
    e.preventDefault()
    console.log(password, email);
    
    
    setEmail('')
    setPassword('')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='flex items-center justify-center h-screen w-screen'>
      <div className='border-2 border-emerald-600 rounded-xl p-20 '>
        <form 
        onSubmit={(e)=>{submitHandler(e)}}
        className='flex flex-col justify-center items-center'>

          <input
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            required 
            className='border-2 text-white outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'
          />

          <input
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            required 
            className='border-2 text-white outline-none bg-transparent border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-5' type="password" placeholder='Enter password' 
          />

          <button className='text-white outline-none bg-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-white mt-5'>Log in</button>
        </form>
      </div>
      
    </div>
  )
}

export default Login
