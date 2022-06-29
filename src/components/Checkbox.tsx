import { Checkbox } from "@material-ui/core";
import React from "react";
import {ChangeEvent} from "react"


type CheckboxType = {
    check: boolean
    callBack: (currentEvent:boolean)=>void
}



export const Checkboxes =(props:CheckboxType)=> {
    
    const checkboxHandler =(event: ChangeEvent<HTMLInputElement>)=>{
        props.callBack(event.currentTarget.checked)
    }

    return(
        <>
        <Checkbox checked={props.check} onChange={checkboxHandler}/>
        </>
    )
}