// import { useState } from 'react'

// const Counter = () => {
//     const [increment,setIncrement ] =useState(0);
//     const Incrementbtn = ()=>{
//         setIncrement(increment+1)
//     };
//     const [decrement, setDecrement] =useState(0);
//     const Decrementbtn = ()=>{
//         setDecrement(decrement-1)
//     };
//     const [reset, setReset] =useState(0);
//     const Resetbtn = ()=>{
//         setIncrement(0);
//         setDecrement(0);
//         setReset(reset+1);
//     };
//   return (
//     <div>


//         <p>Increment: {increment} | Decrement: {decrement} | Reset: {reset} </p>
    
//         <button onClick={Incrementbtn} >Increment</button>
//         <button onClick={Decrementbtn} >Decreement</button>
//         <button onClick={Resetbtn} >Reset</button>
//     </div>
//   )
// }

// export default Counter


// the symbol | in that one-liner output! It's the vertical bar,
// often called a "pipe" in programming, and it's just a visual separato 

import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [ count, setCount] = useState(0)
    const incrementBtn = ()=>{
        setCount(count+1)
    }
    const decrementBtn = ()=>{
        if(count>0)
        setCount(count-1)
    }
    const resetBtn = ()=>{
        setCount(0)
    }
  return (
    <div>
        <p style={{fontSize:"100px"}}>{count}</p>
        <button onClick={incrementBtn}>Increment</button>
        <button onClick={decrementBtn}>Decrement</button>
        <button onClick={resetBtn}>Reset</button>
    </div>
  )
}

export default Counter