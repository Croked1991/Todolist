import { title } from 'process';
import React, { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { Todolist } from './Todolist';
import { TaskType } from './Todolist';



function App() {


    const [tasks, setTasks] = useState([
        { id: 1, title: "CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "React", isDone: false },
        { id: 4, title: "Rest Api", isDone: false },
        { id: 5, title: "GraphQL", isDone: false },
    ])

    const removeTasks = (id: number) => {
        let filtered = tasks.filter(el => el.id != id)
        setTasks(filtered)
    }

    const [filterButton, setFilterButton] = useState('All')
    const taskFilter = (filterValue: string) => {
        setFilterButton(filterValue)
    }

    let prokladka = tasks
    if (filterButton === 'Active') {
        prokladka = tasks.filter(el => el.isDone === false)
    }
    if (filterButton === 'Complited') {
        prokladka = tasks.filter(el => el.isDone === true)
    }



    return (
        <div className="App">
            <Todolist title="What do lern"
                tasks={tasks}
                removeTasks={removeTasks}
                taskFilter={taskFilter}
                prokladka={prokladka} 
                />
        </div>
    )
}



export default App;
