import { FilterValuesType, TodolistType } from "../App"


const TASK_FILTER = "TASK-FILTER"


type TaskFilterACType = ReturnType<typeof taskFilterAC>
type TodolistsReducerType = TaskFilterACType 


export const TodolistsReducers = (state: TodolistType, action: TodolistsReducerType) => {
    switch (action.type) {
        case TASK_FILTER: {
            return state.map(el => 
                el.id === action.payload.todolistID ? 
                { ...el, filter: action.payload.filterValue } : el)
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


