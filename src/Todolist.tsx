import { type } from 'os';
import React from 'react';
import { useState, KeyboardEvent, ChangeEvent, MouseEvent } from 'react';
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
    taskFilter: (filterValue: string) => void;
    prokladka: Array<TaskType>;
    addTask: (newTask: string) => void;
}

export function Todolist(props: PropsType) {

    const [newTask, setNewTask] = useState('')

    const onClickHandler = () => {
        props.addTask(newTask)
        setNewTask('')
    }

    const onKeyPressHadler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickHandler()
        }
    }

    const setNewTaskHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.currentTarget.value)
    }

    const removeTaskHandler = (elid:string) => {
        props.removeTasks(elid)
    }

    const filterHandler = (filterValue:string) => {
        props.taskFilter(filterValue)
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={newTask}
                        onKeyPress={onKeyPressHadler}
                        onChange={setNewTaskHandler}
                    />
                    <button onClick={onClickHandler}>+</button>
                </div>
                <ul>
                    {props.prokladka.map((el: TaskType) => {
                        return (
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone}></input>
                                <span>{el.title}</span>
                                <button onClick={()=>removeTaskHandler(el.id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button onClick={()=> filterHandler('All')}>All</button>
                    <button onClick={()=> filterHandler('Active')}>Active</button>
                    <button onClick={()=> filterHandler('Completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
}


























