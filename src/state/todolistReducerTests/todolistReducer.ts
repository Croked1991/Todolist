import { v1 } from 'uuid';
import { TodolistType } from './../../App';

// Types 
type TodolistReducerType = TestRemoveTodolistType | AddTodolistType | ChangeTodolistTitle | ChangeTodolistFilter
type TestRemoveTodolistType = ReturnType<typeof testRemoveTodolist>
type AddTodolistType = ReturnType<typeof addTodolist>
type ChangeTodolistTitle = ReturnType<typeof changeTodolistTitle>
type ChangeTodolistFilter = ReturnType<typeof changeTodolistFilter>


// Consts 
const REMOVE_TODOLIST = "REMOVE_TODOLIST"
const ADD_TODOLIST = "ADD_TODOLIST"
const CHANGE_TODOLIST_TITLE = "CHANGE_TODOLIST_TITLE"
const CHANGE_TODOLIST_FILTER = "CHANGE_TODOLIST_FILTER"

// Reducer
export const todolistsReducer = (state: TodolistType, action: TodolistReducerType) => {
    switch(action.type){
        case REMOVE_TODOLIST:{
            return state.filter(todolist => todolist.id !== action.payload.todolistID)
        }
        case ADD_TODOLIST: {
            const newTodolist = { id: v1(), title: action.payload.newTodolistTitle, filter: 'All' }
            return [...state, newTodolist]
        }
        case CHANGE_TODOLIST_TITLE: { 
            return state.map(todolist => 
                todolist.id === action.payload.todolistId2 ? 
                {...todolist, title: action.payload.newTodolistTitle} : todolist)
        }
        case CHANGE_TODOLIST_FILTER: {
            return state.map(el => 
                el.id === action.payload.todolistId2 ? 
                { ...el, filter: action.payload.newFilter } : el)
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
export const changeTodolistTitle = (todolistId2:string, newTodolistTitle:string) => {
    return {
        type: CHANGE_TODOLIST_TITLE,
        payload: {
            newTodolistTitle,
            todolistId2
        }
    } as const
}
export const changeTodolistFilter = (todolistId2:string, newFilter:string) => {
    return {
        type: CHANGE_TODOLIST_FILTER,
        payload: {
            todolistId2,
            newFilter,
        }
    } as const
}