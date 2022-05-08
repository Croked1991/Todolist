import { type } from 'os';
import React from 'react';
import { useState } from 'react';

export type TaskType = {
    title: string;
    id: string;
    isDone: boolean;
}

type PropsType = {
    title: string;
    tasks: Array<TaskType>;
    removeTasks: (id: string) => void;
    taskFilter: (filterValue: string)=>void;
    prokladka: Array<TaskType>;
    addTask: ()=>void;
}

export function Todolist(props: PropsType) {

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input />
                    <button onClick={()=>props.addTask()}>+</button>
                </div>
                <ul>
                    {props.prokladka.map((el: TaskType) => {
                        return (
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}></input>
                                <span>{el.title}</span>
                                <button onClick={() => {props.removeTasks(el.id)}}>X</button>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button onClick={()=>props.taskFilter('All')}>All</button>
                    <button onClick={()=>props.taskFilter('Active')}>Active</button>
                    <button onClick={()=>props.taskFilter('Complited')}>Completed</button>
                </div>
            </div>
        </div>
    );
}


























