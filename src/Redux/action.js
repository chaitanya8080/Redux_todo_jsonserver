

export const ADD = "ADD";
export const REMOVE = "REMOVE";

export const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
export const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
export const GET_TODOS_FAILURE = "GET_TODOS_FAILURE";

export const POST_TODO_REQUEST = "POST_TODO_REQUEST";
export const POST_TODO_SUCCESS = "POST_TODO_SUCCESS";
export const POST_TODO_FAILURE = "POST_TODO_FAILURE";

export const EDIT_TODO_REQUEST = "EDIT_TODO_REQUEST";
export const EDIT_TODO_SUCCESS = "EDIT_TODO_SUCCESS";
export const EDIT_TODO_FAILURE = "EDIT_TODO_FAILURE";

export const DELETE_TODO_REQUEST ="DELETE_TODO_REQUEST";
export const DELETE_TODO_SUCCESS = "DELETE_TODO_SUCCESS";
export const DELETE_TODO_FAILURE = "DELETE_TODO_FAILURE";


export const getTodoRequest = ()=>{
    return {
        type: GET_TODOS_REQUEST
    }
}

export const getTodoSuccess = (payload)=>{
    return {
        type: GET_TODOS_SUCCESS,
        payload
    }
}

export const getTodoFailure = ()=>{
    return {
        type: GET_TODOS_FAILURE
    }
}
// post 
export const postTodoRequest = ()=>{
    return {
        type: POST_TODO_REQUEST
    }
}

export const postTodoSuccess = (payload)=>{
    return {
        type: POST_TODO_SUCCESS,
        payload
    }
}

export const postTodoFailure = ()=>{
    return {
        type: POST_TODO_FAILURE
    }
}

export const editTodoRequest = ()=>{
    return {
        type: EDIT_TODO_REQUEST
    }
}

export const editTodoSuccess = (payload)=>{
    return {
        type: EDIT_TODO_SUCCESS,
        payload
    }
}

export const editTodoFailure = ()=>{
    return {
        type: EDIT_TODO_FAILURE
    }
}


export const deleteTodoRequest = ()=>{
    return {
        type: DELETE_TODO_REQUEST,
    }
}

export const deleteTodoSuccess = ()=>{
    return {
        type: DELETE_TODO_SUCCESS,
    }
}

export const deleteTodoFailure = ()=>{
    return {
        type: DELETE_TODO_FAILURE,
    }
}







