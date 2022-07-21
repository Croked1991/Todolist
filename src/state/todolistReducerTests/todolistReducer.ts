import { v1 } from 'uuid';
import { TodolistType } from './../../App';

// Types 
type TodolistReducerType = TestRemoveTodolistType | AddTodolistType
type TestRemoveTodolistType = ReturnType<typeof testRemoveTodolist>
type AddTodolistType = ReturnType<typeof addTodolist>

// Consts 
const REMOVE_TODOLIST = "REMOVE_TODOLIST"
const ADD_TODOLIST = "ADD_TODOLIST"

// Reducer
export const todolistReducer = (state: TodolistType, action: TodolistReducerType) => {
    switch(action.type){
        case REMOVE_TODOLIST:{
            return state.filter(todolist => todolist.id !== action.payload.todolistID)
        }
        case ADD_TODOLIST: {
            const newTodolist = { id: v1(), title: action.payload.newTodolistTitle, filter: 'All' }
            return [...state, newTodolist]
        }
        default: return state
    }
}


// Action Creators 
export const testRemoveTodolist = (todolistID: string) => {
    return {
        type: REMOVE_TODOLIST,
        payload: {
            todolistID
        }
    } as const
}
export const addTodolist = (newTodolistTitle: string) => {
    return {
        type: ADD_TODOLIST,
        payload: {
            newTodolistTitle
        }
    } as const
}