import React from 'react'
import { useNavigate } from 'react-router-dom'

const signin = () => {
    const Navigate = useNavigate();
  return (
        <div className="bg-black w-[400px] h-[300px] text-white rounded-2xl border border-white text-center items-center flex flex-col justify-center m-auto mt-20">
      <h2>Sign In</h2>
      <form action="" className='flex flex-col space-y-4 m-4'>
        <div className='flex flex-col border border-white'>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className='flex flex-col border border-white'>
          <label>Password:</label>
          <input type="password" />
        </div>
        <button type="submit" className='bg-blue-500 text-white px-3 py-1 rounded'>Sign In</button>
        <button className='bg-green-500 text-white px-3 py-1 rounded' onClick={()=>Navigate('/signup')}>Sign Up</button>
      </form>
    </div>
  )
}

export default signin