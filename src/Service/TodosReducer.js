import { GET_TODOS_FAILED, GET_TODOS_REQUEST, GET_TODOS_SUCCESS } from "./Constants"

//state
const initialTodosState = {
    todos: [],
    isLoading: false,
    error: null
}

//reducer
const todosReducer = (state = initialTodosState, action) => {
    switch (action.type) {
        case GET_TODOS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case GET_TODOS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                todos: action.payload,
                error: null
            }
        case GET_TODOS_FAILED:
            return {
                ...state,
                isLoading: false,
                todos: [],
                error: action.payload
            }

        default:
            return state;
    }
}

export default todosReducer;