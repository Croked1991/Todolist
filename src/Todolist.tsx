import { type } from 'os';
import React from 'react';
import { useState, KeyboardEvent, ChangeEvent } from 'react';
import { FilterValuesType } from './App';
import { UniButton } from './components/Button';
import { Checkbox } from './components/Checkbox';
import style from './Todolist.module.css'

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
    tasks: Array<TaskType>;
    removeTasks: (id: string) => void;
    taskFilter: (filterValue: FilterValuesType) => void;
    prokladka: Array<TaskType>;
    addTask: (newTask: string) => void;
    changeCheckboxStatus: (currentId: string, eventStatus: boolean) => void
    filterButton: FilterValuesType 
    buttons: ButtonType[]
}

export function Todolist(props: PropsType) {

    const [newTask, setNewTask] = useState('')

    const [error, setError] = useState <string | null> (null)


    const onClickHandler = () => {
        if (newTask.trim() !== '') {
            props.addTask(newTask.trim())
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

    const removeTaskHandler = (elid: string) => {
        props.removeTasks(elid)
    }

    const filterHandler = (filterValue: FilterValuesType) => {
        props.taskFilter(filterValue)
    }

    const checkboxHandler = (currentId: string, currentEvent: boolean) => {
        props.changeCheckboxStatus(currentId, currentEvent)
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input className={error ? style.error : ''}
                        value={newTask}
                        onKeyPress={onKeyPressHadler}
                        onChange={setNewTaskHandler}
                    />
                    <button onClick={onClickHandler}>+</button>
                    {error && <p className={style.errorMessage}>{error}</p> }
                </div>
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

