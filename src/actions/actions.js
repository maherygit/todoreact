/**
 * action sur le filtre
 */
const TOGGLE_FILTER = "TOGGLE_FILTER";
 
function toggleFilterAction(){
    return {
        type: TOGGLE_FILTER
    }
}

/****************************************/
/**
 * actions sur les todos
 */
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
const TOGGLE = "TOGGLE";

function createTodoAction(newTodo){
    return {
        type: CREATE,
        payload: newTodo
    }
}

function updateTodoAction(newTodo){
    return {
        type: UPDATE,
        payload: newTodo
    }
}

function deleteTodoAction(todoId){
    return {
        type: DELETE,
        payload: todoId
    }
}


function toggleTodoAction(todoId){
    return {
        type: TOGGLE,
        payload: todoId
    }
}


/***********************************/
const TOGGLE_EDIT_MODE = "TOGGLE_EDIT_MODE";

function toggleEditModeAction(todoId){
    return {
        type: TOGGLE_EDIT_MODE,
        payload: todoId
    }
}

/***********************************/
const SET_ID_COUNTER = "SET_ID_COUNTER"; 

function setIdAction(newVal){
    return {
        type: SET_ID_COUNTER,
        payload: newVal
    }
}



export {
    TOGGLE_FILTER,
    CREATE,
    UPDATE,
    DELETE,
    TOGGLE,
    TOGGLE_EDIT_MODE,
    SET_ID_COUNTER,
    toggleFilterAction,
    createTodoAction,
    updateTodoAction,
    deleteTodoAction,
    toggleTodoAction,
    toggleEditModeAction,
    setIdAction
}

