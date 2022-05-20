import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Todolist } from './Todolist';

export type FilterValuesType = string



function App() {

    const buttons = [
        { id: v1(), title: 'All' },
        { id: v1(), title: 'Completed' },
        { id: v1(), title: 'Active' }
    ]


    const [tasks, setTasks] = useState([
        { id: v1(), title: "CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "React", isDone: false },
        { id: v1(), title: "Rest Api", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ])

    const [filterButton, setFilterButton] = useState<FilterValuesType>('All')


    const removeTasks = (id: string) => {
        let filtered = tasks.filter(el => el.id !== id)
        setTasks(filtered)
    }

    const addTask = (newTask: string) => {
        let newTitle = { id: v1(), title: newTask, isDone: false }
        setTasks([newTitle, ...tasks]);
    }


    const taskFilter = (filterValue: FilterValuesType) => {
        setFilterButton(filterValue)
    }

    const changeCheckboxStatus = (currentId: string, currentEvent: boolean) => {
        setTasks(tasks.map((el) => el.id === currentId ? { ...el, isDone: currentEvent } : el))
    }


    let prokladka = tasks
    if (filterButton === 'Active') {
        prokladka = tasks.filter(el => el.isDone === false)
    }
    if (filterButton === 'Completed') {
        prokladka = tasks.filter(el => el.isDone === true)
    }

    return (
        <div className="App">

            <Todolist title="What do lern"
                tasks={tasks}
                removeTasks={removeTasks}
                taskFilter={taskFilter}
                prokladka={prokladka}
                addTask={addTask}
                changeCheckboxStatus={changeCheckboxStatus}
                filterButton={filterButton}
                buttons={buttons}
            />
        </div>
    )
}



export default App;
