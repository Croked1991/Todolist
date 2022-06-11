import React, { useState, KeyboardEvent, FocusEvent, ChangeEvent } from "react";

type EditableSpanType = {
    title: string
    callback: (newTitle: string)=>void
}

export const EditableSpan = (props: EditableSpanType) => {


    
    let [inputOrSpan, setInputOrSpan] = useState(false)
    let [updateTitle, setUpdateTitle] = useState(props.title)


    const onDoubleClickHandler = () => {
        setInputOrSpan(true)
    }

    const onKeyPressHadler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            setInputOrSpan(false)
            setUpdateTitle(updateTitle)
            props.callback(updateTitle)
        }
    }

    const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
        setInputOrSpan(false)
        setUpdateTitle(updateTitle)
        props.callback(updateTitle)
    }

    const setNewTaskHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setUpdateTitle(event.currentTarget.value)
  
    }

    return (
    inputOrSpan
    ? <input onKeyPress={onKeyPressHadler} autoFocus  onBlur={onBlurHandler} value={updateTitle} onChange={setNewTaskHandler}/>
         : <span onDoubleClick={onDoubleClickHandler} >{props.title}</span>
    )
}