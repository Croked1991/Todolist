import React from "react";
import {ChangeEvent} from "react"

type CheckboxType = {
    check: boolean
    callBack: (currentEvent:boolean)=>void
}



export const Checkbox =(props:CheckboxType)=> {
    
    const checkboxHandler =(event: ChangeEvent<HTMLInputElement>)=>{
        props.callBack(event.currentTarget.checked)
    }

    return(
        <input type="checkbox" checked={props.check} onChange={checkboxHandler}></input>
    )
}