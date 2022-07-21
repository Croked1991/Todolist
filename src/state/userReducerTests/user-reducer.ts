type StateType = {
    age: number
    childrenCount: number
    name: string
 }
type ActionType = {
    type: string
    [key: string]: any
 }

export const INCREMENT_AGE = "INCREMENT_AGE"
export const INCREMENT_CHILDREN_COUNT = "INCREMENT_CHILDREN_COUNT"
export const CHANGE_A_NAME = "CHANGE_A_NAME"


 export const userReducer = (state: StateType, action: ActionType) => {
   switch (action.type) {
       case INCREMENT_AGE:
           return {...state, age: state.age+1 };
       case INCREMENT_CHILDREN_COUNT:
           return {...state, childrenCount: state.childrenCount + 1};
       case CHANGE_A_NAME:
           return {...state, name: state.name = action.newName};
       default:
           throw new Error("I don't understand this type")
   }
}