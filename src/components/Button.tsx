import React from "react";
import style from '../Todolist.module.css'
import { FilterValuesType } from '../App';
import {ButtonType} from '../Todolist'
import { Button } from "@mui/material";


type UniButtonType = {
    filterButton: FilterValuesType
    filterHandler: (filterValue: FilterValuesType)=>void
    buttons: ButtonType[]
}



export const UniButton = (props: UniButtonType) => {

    

    const filterHandlerButton = (title: string) => {
        props.filterHandler(title)
    }

    let unicButton = props.buttons.map((but) => {
        return(
        <Button 
        color={(but.title === "All") ? "secondary" :
        (but.title === "Active") ? "error" : 
        (but.title === "Completed") ? "success" : 
        undefined}
        onClick={() => filterHandlerButton(but.title)} 
        variant={props.filterButton === but.title ? "outlined"  : "contained"}
        >
        {but.title}
        </Button>
        )
    }
)
    return (
        <>
        <div>{unicButton}</div>
        </>

    )
}