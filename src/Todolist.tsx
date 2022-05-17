import React from 'react';
import { useState, KeyboardEvent, ChangeEvent } from 'react';

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
    changeCheckboxStatus: (currentId: string, eventStatus: boolean) => void
}

export function Todolist(props: PropsType) {

    const [newTask, setNewTask] = useState('')

    const onClickHandler = () => {
        if(newTask.trim() !== ''){
        props.addTask(newTask.trim())
        setNewTask('')}
    }

    const onKeyPressHadler = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            onClickHandler()
        }
    }

    const setNewTaskHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setNewTask(event.currentTarget.value)
    }

    const removeTaskHandler = (elid: string) => {
        props.removeTasks(elid)
    }

    const filterHandler = (filterValue: string) => {
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
                        const checkboxHandler = (event: ChangeEvent<HTMLInputElement>) => {
                            props.changeCheckboxStatus(el.id, event.currentTarget.checked)
                        }
                        return (
                            <li key={el.id}>
                                <input type="checkbox" checked={el.isDone} onChange={checkboxHandler}></input>
                                <span>{el.title}</span>
                                <button onClick={() => removeTaskHandler(el.id)}>X</button>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button onClick={() => filterHandler('All')}>All</button>
                    <button onClick={() => filterHandler('Active')}>Active</button>
                    <button onClick={() => filterHandler('Completed')}>Completed</button>
                </div>
            </div>
        </div>
    );
}


























