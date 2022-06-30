import { StateType } from "../App"



export const TasksReducers = (state:StateType, action:TasksReducerType) => {
    switch (action.type){
        case "REMOVE-TASK":{
            return state
        }
        default: return state
    }
}

type removeTasksACType = ReturnType<typeof removeTasksAC>
type TasksReducerType = removeTasksACType

export const removeTasksAC =(id: string)=>{
    return{
        type: "REMOVE-TASK",
        payload: {
            id
        }
    } as const
} 