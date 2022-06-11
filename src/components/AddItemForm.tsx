import React from "react";
import style from "../Todolist.module.css"
import { useState, KeyboardEvent, ChangeEvent } from 'react';

type AddItemFormType = {
    callback: (newTask:string)=>void
}



export const AddItemForm = (props: AddItemFormType) => {

    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState<string | null>(null)

    const onClickHandler = () => {
        if (newTask.trim() !== '') {
            props.callback(newTask.trim())
            setNewTask('')
        } else setError('Error. You got wrong')
    }

    const onKeyPressHadler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickHandler()
        }
    }

    const setNewTaskHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setNewTask(event.currentTarget.value)     
    }

    return (
        <div>
            <input className={error ? style.error : ''}
                value={newTask}
                onKeyPress={onKeyPressHadler}
                onChange={setNewTaskHandler}
            />
            <button onClick={onClickHandler}>+</button>
            {error && <p className={style.errorMessage}>{error}</p>}
        </div>
    )
}