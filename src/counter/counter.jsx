import {useDispatch, useSelector} from "react-redux";

import React from 'react'

function Counter() {

    const dispatch = useDispatch();
    // const [count , setCount] = useState(0);
  const count = useSelector((state)=>state.count)
  const name = useSelector((state)=>state.name)

   const  handleAdd = ()=>{
     dispatch({type:"ADD"});
   }
   const  handleRemove = ()=>{
    dispatch({type:"REMOVE"});
  }
  
  return (
    <div style={{margin:"auto", width:"50%"}}>
     <h1>this is {count}  {name}</h1>
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleRemove}>minus</button>

    </div>
  )
}

export default Counter