import { type } from 'os';
import React from 'react';
import { useState } from 'react';
import { v1 } from 'uuid';

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
    addTask: (newTask:string)=>void;


}

export function Todolist(props: PropsType) {
  
    const [newTask, setNewTask] = useState('')

const onClickHandler = () => {
    props.addTask(newTask)
    setNewTask('')
}


    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={newTask} onChange={(event)=>setNewTask(event.currentTarget.value)}/>
                    <button onClick={onClickHandler}>+</button>
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


























