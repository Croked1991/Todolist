import { title } from "process"
import React from "react"

type TitleType = {
    title: string
}


export const Header: React.FC<TitleType> = (props) => {
    return (
        <div>{props.title}</div>
    )    
}