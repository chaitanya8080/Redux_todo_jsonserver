


import axios from 'axios'
import React, { forwardRef} from 'react'
import { useState } from 'react'

const TodoInput = forwardRef(({handleAddTodo, id, getTodos, toggle ,setToggle},  ref) =>{

  const [text, setText] = useState("add");
  const [title, setTitle] = useState("edit");

  const handleEdit =()=>{
    axios.patch(`http://localhost:8000/todos/${id}`,{title:title}).then((res)=>{
        console.log(res)
        getTodos()
    })

    setToggle(!toggle)
} 
  
    const handleAdd = ()=>{
        if(text){
            handleAddTodo(text)
            setText('')
        }
    }

  return (
    <div>
        {toggle?<div>
          <input ref={ref} type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <button  onClick={handleAdd}>Add</button>
        </div> 
        : <div>
           <input ref={ref} type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
          <button  onClick={handleEdit}>Save</button>
          <p>Edit here</p>
        </div> }
    </div>
  )
})

export default TodoInput