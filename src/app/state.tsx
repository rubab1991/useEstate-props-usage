"use client"
import { count } from 'console'
import React, { useState } from 'react'


const State = () => {
const [count,setCount]=useState(0);
const handleIncrement=()=>{
  setCount(count+1)
  console.log("Added value",count+1)
}
const handleDecrement=()=>{
  setCount(count - 1)
  console.log("decreased value",count - 1)
}

  return (
    <div className='bg-sky-900 text-white flex flex-col items-center '>
      <p className='items-center p-3'>UseState</p>
      <p>Count:{count}</p>
      <div className='flex justify-center gap-5'>
        <button onClick={handleIncrement} className=' bg-yellow-600 p-2'>Increment</button>
        <button onClick={handleDecrement} className=' bg-yellow-600 p-2'>Decrement</button>
      </div>
    
    </div>
  )
}

export default State
