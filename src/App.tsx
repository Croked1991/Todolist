import { title } from 'process';
import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Header } from './components/Header';
import { Todolist } from './Todolist';
import { TaskType } from './Todolist';



function App() {


    const [tasks, setTasks] = useState([
        { id: v1(), title: "CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "React", isDone: false },
        { id: v1(), title: "Rest Api", isDone: false },
        { id: v1(), title: "GraphQL", isDone: false },
    ])

    const removeTasks = (id: string) => {
        let filtered = tasks.filter(el => el.id != id)
        setTasks(filtered)
    }

    const addTask = (newTask:string ) => {
        let newTitle = { id: v1(), title: newTask, isDone: false }
        setTasks([newTitle,...tasks]);
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
                addTask={addTask}
                />
        </div>
    )
}



export default App;
