import { StateType } from "../App"
import { v1 } from 'uuid';

const REMOVE_TASK = "REMOVE-TASK"
const SET_TASK = "SET-TASK"
const CHANGE_CHECKBOX_STATUS = "CHANGE-CHECKBOX-STATUS"
const UPDATE_TASK = "UPDATE-TASK"
const ADD_TODOLIST_TASKS = "ADD-TODOLIST-TASKS"


export const TasksReducers = (state: StateType, action: TasksReducerType) => {
    switch (action.type) {
        case REMOVE_TASK: {
            return {
                ...state, [action.payload.todolistID]:
                    [...state[action.payload.todolistID].filter(el =>
                        el.id !== action.payload.id)]
            }
        };
        case SET_TASK: {
            let newTitle = { id: v1(), title: action.payload.newTask, isDone: false }
            return {
                ...state, [action.payload.todolistID]:
                    [newTitle, ...state[action.payload.todolistID]]
            }
        }
        case CHANGE_CHECKBOX_STATUS: {
            return {
                ...state, [action.payload.todolistID]:
                    [...state[action.payload.todolistID].map(el => 
                        el.id === action.payload.currentId ? 
                        { ...el, isDone: action.payload.currentEvent } : el)]
            }
        }
        case UPDATE_TASK: {
            return {
                ...state, [action.payload.todolistID]:
                    [...state[action.payload.todolistID].map(el => 
                        el.id === action.payload.taskID ? 
                        { ...el, title: action.payload.newTitle } : el)]
            } 
        }
        case ADD_TODOLIST_TASKS: {
            return {
                ...state, [ action.payload.newID]: []
            }             
        }
        default: return state
    }
}

type RemoveTasksACType = ReturnType<typeof removeTasksAC>
type SetTaskACType = ReturnType<typeof setTaskAC>
type ChangeCheckboxStatusACType = ReturnType<typeof changeCheckboxStatusAC>
type UpdateTaskACType = ReturnType<typeof updateTaskAC>
type AddTodolistTasksAC = ReturnType<typeof addTodolistTasksAC>
type TasksReducerType = RemoveTasksACType | SetTaskACType | ChangeCheckboxStatusACType | UpdateTaskACType | AddTodolistTasksAC

export const removeTasksAC = (id: string, todolistID: string) => {
    return {
        type: REMOVE_TASK,
        payload: {
            id, todolistID
        }
    } as const
}

export const setTaskAC = (todolistID: string, newTask: string) => {
    return {
        type: SET_TASK,
        payload: {
            todolistID, newTask
        }
    } as const
}

export const changeCheckboxStatusAC = (todolistID: string, currentId: string, currentEvent: boolean) => {
    return {
        type: CHANGE_CHECKBOX_STATUS,
        payload: {
            todolistID, currentId, currentEvent
        }
    } as const
}

export const updateTaskAC = (todolistID: string, taskID: string, newTitle: string) => {
    return {
        type: UPDATE_TASK,
        payload: {
            todolistID, taskID, newTitle
        }
    } as const
}

export const addTodolistTasksAC = (newID: string) => {
    return {
        type: ADD_TODOLIST_TASKS,
        payload: {
            newID
        }
    } as const
}
