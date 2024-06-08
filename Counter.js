
import React from 'react'
import './Counter.css'
import { useState } from 'react'
function Counter() {
    const Incriment = (() =>
        {
            setcount(count + 1)
        })
        const decriment = (() =>
            {
                setcount(count - 1)
            })

    const[count, setcount] = useState(0)
  return (
    <>
    <div className='box'>
    <div className='output'> Count : {count}</div>
    <div className='btn'>
        <button onClick={Incriment}>+</button>
        <button onClick={decriment}>-</button>
    </div>
      
    </div>
    
    
    </>
    
  )
}

export default Counter
