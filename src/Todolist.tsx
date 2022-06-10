import { type } from 'os';
import React from 'react';
import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { FilterValuesType } from './App';
import { AddItemForm } from './components/AddItemForm';
import { UniButton } from './components/Button';
import { Checkbox } from './components/Checkbox';
import style from './Todolist.module.css'

export type TodolistIDType = {
    [todolistID:string]:TaskType[]
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
    removeTasks: (todolistID:string, id: string) => void;
    taskFilter: (todolistID:string,filterValue: FilterValuesType) => void;
    prokladka: Array<TaskType>;
    addTask: (newTask: string, todolistID: string) => void;
    changeCheckboxStatus: (todolistID:string, currentId: string, eventStatus: boolean) => void
    filterButton: FilterValuesType 
    buttons: ButtonType[]
    todolistID : string
    removeTodolist: (todolistID:string)=>void
}

export function Todolist(props: PropsType) {

    const removeTaskHandler = (elid: string) => {
        props.removeTasks(props.todolistID,elid)
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

    const addTaskHandler = (newTask:string) => {
        props.addTask(newTask, props.todolistID)
    }

    return (
        <div className="App">
            <div>
                <h3>
                    {props.title}
                    <button onClick={removeTodolistHandler}>X</button>
                </h3>
                <AddItemForm callback={addTaskHandler}/>
            {/* место для инпута*/}
                <ul >
                    {props.prokladka.map((el: TaskType) => {
                        return (
                            <li key={el.id} className={el.isDone === true ? style.isDone: ""}>
                                <Checkbox check={el.isDone} callBack={(currentEvent)=>checkboxHandler(el.id, currentEvent)}/>
                                <span>{el.title}</span>
                                <button onClick={() => removeTaskHandler(el.id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <UniButton filterButton={props.filterButton} filterHandler={filterHandler} buttons={props.buttons}/>
                </div>
            </div>
        </div>
    );
}

