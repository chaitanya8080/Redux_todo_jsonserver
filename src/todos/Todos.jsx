import axios from "axios";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
  postTodoFailure,
  postTodoRequest,
  postTodoSuccess,
} from "../Redux/action";
import TodoInput from "./TodoInput";

function Todos() {

   const inputRef = useRef()
  const dispatch = useDispatch();


  const [id ,setId]= useState(0);
  const [toggle, setToggle]=useState(true)


  const isLoading = useSelector((state) => state.isLoading);
  const todos = useSelector((state) => state.todos);

  const getTodos = useCallback(() => {
    dispatch(getTodoRequest());

    axios
      .get("http://localhost:8000/todos")
      .then((res) => {
        dispatch(getTodoSuccess(res.data));
        console.log(res.data);
      })
      .catch((e) => {
        dispatch(getTodoFailure());
        console.log(e);
      });
  }, [dispatch]);

  useEffect(() => {
    getTodos();
  }, [getTodos]);

  const addTodo = (title) => {
    if (title) {
      dispatch(postTodoRequest());

      return axios
        .post("http://localhost:8000/todos", {
          title: title,
          status: false,
        })
        .then((res) => {
          dispatch(postTodoSuccess(res.data));
          getTodos();
        })
        .catch((e) => {
          dispatch(postTodoFailure());
        });
    }
  };

  const handleAddTodo = (text) => {
    addTodo(text);
  };

  const handleDelete = (id) => {
    dispatch(deleteTodoRequest());

    axios
      .delete(`http://localhost:8000/todos/${id}`)
      .then((res) => {
        dispatch(deleteTodoSuccess());
        getTodos();
      })
      .catch(() => {
        dispatch(deleteTodoFailure());
      });
  };


  const handleStatus =(id,status)=>{
            axios.patch(`http://localhost:8000/todos/${id}`,{status:!status}).then((res)=>{
                getTodos()
            })
  } 



  const handleEdit = (id)=>{
    inputRef.current.focus()
    
    setToggle(!toggle)
    setId(id)

  }



  return (
    
    <div style={{ margin: "auto", width: "50%" }}>
      <div>
        {isLoading ? (
          <h1>Loading</h1>
        ) : (
          <TodoInput handleAddTodo={handleAddTodo} ref={inputRef} id={id} getTodos={getTodos} toggle={toggle} setToggle={setToggle}/>
        )}

        {todos.length > 0 &&


          todos.map((todo) => (
            <div 
              key={todo.id}
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <h2 style={todo.status===true?{textDecoration:'line-through',color:"red"}:{textDecoration:'none',color:"green"}}>{todo.title}</h2>
              <p>{todo.status?"completed":"Not Completed"}</p>

             <button onClick={()=>handleStatus(todo.id, todo.status)}>
                Change Status
              </button>


              <button
                onClick={() => handleEdit(todo.id)}
                style={{ width: "5rem", height: "2rem" }}
              >
                Edit
              </button>



              <button
                onClick={() => handleDelete(todo.id)}
                style={{ width: "5rem", height: "2rem" }}
              >
                Delete
              </button>
              

            </div>
          ))}
      </div>
    </div>
  );
}

export default Todos;
