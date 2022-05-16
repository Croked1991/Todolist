import React from 'react';
import { useState } from 'react';

type PropsType = {
    on: boolean
}




export function OnOff(props: PropsType) {



    const [on, setOn] = useState(false)

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginRight: "5px",
        backgroundColor: on ? "green" : "red"
    }

    const AccordeonTitle = () => {
        return (
            <h3>Title</h3>
        )
    }

    const AccordeonBody = () => {
        return (
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        )
    }

    const Accordeon = () => {
        const [toggle, setToggle] = useState(true)
        return (
            <div>
                <AccordeonTitle />
                <button onClick={()=>{setToggle(toggle => !toggle)}}>toggle</button>
                {toggle === true && <AccordeonBody />}
            </div>
        )
    }

    return (
        <div>
            <div style={indicatorStyle}></div>
            <div style={offStyle} onClick={() => { setOn(false) }}>Off</div>
            <div style={onStyle} onClick={() => { setOn(true) }}>On</div>
            <Accordeon />
        </div>
    )
}