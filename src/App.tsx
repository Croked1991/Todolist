import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Todolist, TodolistIDType } from './Todolist';
import { AddItemForm } from './components/AddItemForm';
import { title } from 'process';
import {PrimarySearchAppBar } from './components/Header';
import { Container, Grid, Paper } from '@material-ui/core';

export type FilterValuesType = string
type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}




function App() {

    let todolistID1 = v1()
    let todolistID2 = v1()


    const [todolists, setTodolists] = useState<Array<TodolistType>>([
        { id: todolistID1, title: 'What to learn', filter: 'All' },
    ])

    const [tasks, setTasks] = useState<TodolistIDType>({
        [todolistID1]: [
            { id: v1(), title: "CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "React", isDone: false },
            { id: v1(), title: "Rest Api", isDone: false },
            { id: v1(), title: "GraphQL", isDone: false },
        ],
    })


    const buttons = [
        { id: v1(), title: 'All' },
        { id: v1(), title: 'Completed' },
        { id: v1(), title: 'Active' }
    ]

    const removeTasks = (todolistID: string, id: string) => {
        // let filtered = tasks[todolistID].filter(el => el.id !== id)
        setTasks({ ...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== id) })
    }

    const addTask = (todolistID: string, newTask: string) => {
        let newTitle = { id: v1(), title: newTask, isDone: false }
        setTasks({ ...tasks, [todolistID]: [newTitle, ...tasks[todolistID]] });
    }


    const taskFilter = (todolistID: string, filterValue: FilterValuesType) => {
        setTodolists(todolists.map(el => el.id === todolistID ? { ...el, filter: filterValue } : el))
    }

    const changeCheckboxStatus = (todolistID: string, currentId: string, currentEvent: boolean) => {
        setTasks({ ...tasks, [todolistID]: tasks[todolistID].map(el => el.id === currentId ? { ...el, isDone: currentEvent } : el) })
    }

    const addTodolist = (newTitle: string) => {
        let newID = v1()
        let newTodolist = { id: newID, title: newTitle, filter: 'All' }
        setTodolists([newTodolist, ...todolists])
        setTasks({ ...tasks, [newID]: [] })
    }

    const removeTodolist = (todolistID: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistID))
        delete tasks[todolistID]
    }


    const updateTask = (todolistID: string, taskID: string, newTitle: string) => {
        setTasks({ ...tasks, [todolistID]: tasks[todolistID].map(el => el.id === taskID ? { ...el, title: newTitle } : el) })
    }

    const updateH3 = (todolistID: string, newTitle: string) => {
        setTodolists(todolists.map(el => el.id === todolistID ? { ...el, title: newTitle } : el))
    }

    return (
        <>
            <PrimarySearchAppBar />
            <Container fixed>
                <div className="App">
                    <Grid container>
                        <AddItemForm callback={addTodolist} />
                    </Grid>
                    <Grid container spacing={3} style={{padding:"20px"}}>
                        {todolists.map((el) => {
                            let prokladka = tasks[el.id]
                            if (el.filter === 'Active') {
                                prokladka = tasks[el.id].filter(el => el.isDone === false)
                            }
                            if (el.filter === 'Completed') {
                                prokladka = tasks[el.id].filter(el => el.isDone === true)
                            }
                            return (
                                <Grid item>
                                    <Paper style={{padding:"10px "}}>
                                        <Todolist
                                            key={el.id}
                                            todolistID={el.id}
                                            title={el.title}
                                            tasks={tasks}
                                            removeTasks={removeTasks}
                                            taskFilter={taskFilter}
                                            prokladka={prokladka}
                                            addTask={addTask}
                                            changeCheckboxStatus={changeCheckboxStatus}
                                            filterButton={el.filter}
                                            buttons={buttons}
                                            removeTodolist={removeTodolist}
                                            updateTask={updateTask}
                                            updateH3={updateH3}
                                        />
                                    </Paper>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </Container>
        </>
    )
}



export default App;
