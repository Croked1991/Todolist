import React from "react";
import style from "../Todolist.module.css"
import { useState, KeyboardEvent, ChangeEvent } from 'react';
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";


type AddItemFormType = {
    callback: (newTask: string) => void
}



export const AddItemForm = (props: AddItemFormType) => {

    const [newTask, setNewTask] = useState('')
    const [error, setError] = useState<boolean>(false)

    const onClickHandler = () => {
        if (newTask.trim() !== '') {
            props.callback(newTask.trim())
            setNewTask('')
        } else setError(true)
    }

    const onKeyPressHadler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickHandler()
        }
    }

    const setNewTaskHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setError(false)
        setNewTask(event.currentTarget.value)
    }

    let quaterButton = {
        maxWidth: "30px",
        maxHeight: "30px",
        minWidth: "30px",
        minHeight: "30px",
        "background-color": "black",
        color: "white"
    }

    return (
        <div>
            <div className={style.inputButton}>
            <TextField
                id="standard-basic"
                label="Set a task"
                variant="standard"
                value={newTask}
                onKeyPress={onKeyPressHadler}
                onChange={setNewTaskHandler}
                error={error} />
            <Button
                onClick={onClickHandler}
                size="small"
                variant="contained"
                style={quaterButton}>
                +
            </Button>
            </div>
        </div>
    )
}