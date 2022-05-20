import React from "react";
import style from '../Todolist.module.css'
import { FilterValuesType } from '../App';
import {ButtonType} from '../Todolist'

type UniButtonType = {
    filterButton: FilterValuesType
    filterHandler: (filterValue: FilterValuesType)=>void
    buttons: ButtonType[]
}



export const UniButton = (props: UniButtonType) => {

    const filterHandlerButton = (title: string) => {
        props.filterHandler(title)
    }

    let unicButton = props.buttons.map((button) => {
        return(<button 
            className={props.filterButton === button.title ? style.activeFilter : ''} 
            onClick={() => filterHandlerButton(button.title)}>{button.title}
            </button>)}
        )
    
    return (
        <div>{unicButton}</div>
    )
}