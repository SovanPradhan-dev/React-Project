import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
    <nav className="bg-gray-800 p-4 flex justify-between">
      <h1 className="text-white text-2xl">Interview App</h1>
      <div className="flex space-x-4">
        <button className="text-white px-3 py-1 rounded">Home</button>
        <button className="text-white px-3 py-1 rounded">About</button>
        <button className="text-white px-3 py-1 rounded">Contact</button>
      </div>
      <div className="text-white flex space-x-4">
        <button className="bg-green-500 px-3 py-1 rounded" onClick={() => {
        }}>Sign In</button>
        <button className="bg-green-500 px-3 py-1 rounded">Sign Up</button>
      </div>
    </nav>
    <div className="w-screen flex">
      <div className="bg-black w-1/2 h-14 text-white rounded border border-white text-center items-center">Interview</div>
      <div className="bg-black w-1/2 h-14 text-white rounded border border-white text-center items-center">Interviewer</div>
    </div>
    </>
  )
}

export default App