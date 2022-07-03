import { FilterValuesType, TodolistType } from "../App"
import { v1 } from 'uuid';


const TASK_FILTER = "TASK-FILTER"
const ADD_TODOLIST = "ADD-TODOLOIST"
const REMOVE_TODOLIST = "REMOVE-TODOLOIST"
const UPDATE_H3 = "UPDATE-H3"


type TaskFilterACType = ReturnType<typeof taskFilterAC>
type AddTodolistACType = ReturnType<typeof addTodolistAC>
type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
type UpdateH3ACType = ReturnType<typeof updateH3AC>
type TodolistsReducerType = TaskFilterACType | AddTodolistACType | RemoveTodolistACType | UpdateH3ACType


export const TodolistsReducers = (state: TodolistType, action: TodolistsReducerType) => {
    switch (action.type) {
        case TASK_FILTER: {
            return state.map(el => 
                el.id === action.payload.todolistID ? 
                { ...el, filter: action.payload.filterValue } : el)
        }
        case ADD_TODOLIST: {
            // let newID = v1()
            let newTodolist = { id: action.payload.newID, title: action.payload.newTitle, filter: 'All' }
            let newState = [newTodolist, ...state]
            console.log(newState);
            return newState
        }
        case REMOVE_TODOLIST: {
            return state.filter(el => el.id !== action.payload.todolistID)
        }
        case UPDATE_H3: {
            return state.map(el => 
                el.id === action.payload.todolistID ? 
                { ...el, title: action.payload.newTitle } : el)
        }
        default: return state
    }
}


export const taskFilterAC = (todolistID: string, filterValue: FilterValuesType) => {
    return {
        type: TASK_FILTER,
        payload: {
            todolistID, filterValue
        }
    } as const
}

export const addTodolistAC = (newID:string, newTitle: string) => {
    return {
        type: ADD_TODOLIST,
        payload: {
            newID, newTitle
        }
    } as const
}

export const removeTodolistAC = (todolistID: string) => {
    return {
        type: REMOVE_TODOLIST,
        payload: {
            todolistID
        }
    } as const
}

export const updateH3AC = (todolistID: string, newTitle: string) => {
    return {
        type: UPDATE_H3,
        payload: {
            todolistID, newTitle
        }
    } as const
}
