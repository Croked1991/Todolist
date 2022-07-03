

import { IconButton } from '@material-ui/core';
import React from 'react';
import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { FilterValuesType } from './App';
import { AddItemForm } from './components/AddItemForm';
import { UniButton } from './components/Button';
import { Checkboxes } from './components/Checkbox';
import { EditableSpan } from './components/EditableSpan';
import style from './Todolist.module.css'
import { Delete } from '@mui/icons-material';









export type TodolistIDType = {
    [todolistID: string]: TaskType[]
}

export type TaskType = {
    title: string;
    id: string;
    isDone: boolean;
}

export type ButtonType = {
    id: string
    title: string
}

type PropsType = {
    title: string;
    tasks: TodolistIDType;
    removeTasks: (todolistID: string, id: string) => void;
    taskFilter: (todolistID: string, filterValue: FilterValuesType) => void;
    prokladka: Array<TaskType>;
    addTask: (newTask: string, todolistID: string) => void;
    changeCheckboxStatus: (todolistID: string, currentId: string, eventStatus: boolean) => void
    filterButton: FilterValuesType
    buttons: ButtonType[]
    todolistID: string
    removeTodolist: (todolistID: string) => void
    updateTask: (todolistID: string, taskID: string, newTitle: string) => void
    updateH3: (todolistID: string, newTitle: string) => void
}

export const Todolist = React.memo(function Todolist(props: PropsType) {

    const removeTaskHandler = (elid: string) => {
        props.removeTasks(props.todolistID, elid)
    }

    const filterHandler = (filterValue: FilterValuesType) => {
        props.taskFilter(props.todolistID, filterValue)
    }

    const checkboxHandler = (currentId: string, currentEvent: boolean) => {
        props.changeCheckboxStatus(props.todolistID, currentId, currentEvent)
    }

    const removeTodolistHandler = () => {
        props.removeTodolist(props.todolistID)
    }

    const addTaskHandler = (newTask: string) => {
        props.addTask(props.todolistID, newTask)
    }

    const updateTaskHandler = (taskId: string, newTitle: string) => {
        props.updateTask(props.todolistID, taskId, newTitle)
    }

    const updateH3Handler = (newTitle: string) => {
        props.updateH3(props.todolistID, newTitle)
    }

    return (
        <div className="App">
            <div>
                <h3>
                    <EditableSpan title={props.title} callback={(newTitle: string) => updateH3Handler(newTitle)} />
                    <IconButton aria-label="delete">
                        <Delete onClick={removeTodolistHandler} />
                    </IconButton>
                </h3>
                <AddItemForm callback={addTaskHandler} />
                <ul >
                    {props.prokladka.map((el: TaskType) => {
                        return (
                            <li key={el.id} className={el.isDone === true ? style.isDone : ""}>
                                <Checkboxes check={el.isDone} callBack={(currentEvent) => checkboxHandler(el.id, currentEvent)} />
                                <EditableSpan title={el.title} callback={(newTitle: string) => updateTaskHandler(el.id, newTitle)} />
                                <IconButton aria-label="delete">
                                    <Delete onClick={() => removeTaskHandler(el.id)} />
                                </IconButton>

                            </li>
                        )
                    })}
                </ul>
                <div>
                    <UniButton filterButton={props.filterButton} filterHandler={filterHandler} buttons={props.buttons} />
                </div>
            </div>
        </div>
    );
}
)
