import React from 'react'



//React hook = Special function that allows functional components 
//            to use React features without writing class components
//             (useState, useEffect, useContext, useReducer, useCallback, and more...)

//useState() = A React hook that allows the creation of a statefull variable
//             AND a setter function to update its value in the Virtual DOM.
//             [name, setName]

// useState Syntax: 
//                     import { useState } from 'react']
//                     const [state,setState] = useState(initialValue);
                                                                        
//                     state is the current value
//                     setState is the function that update it
//                     initialvalue can be a number, string boolean, array,object or even a function




import { useState } from 'react'

const Casefile = () => {
  const [state, setState]= useState("Guest")
const UpdateState = ()=> {
  setState("Spongebob");
}
  return (
    <div>
      <p>NAME:{state}</p>
      <button onClick={UpdateState} >Update state</button>
    </div>
  )
}

export default Casefile



