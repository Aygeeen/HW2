import React, {useState} from "react";

export default function Todo() {
    const [taskList, setTaskList] = useState([])
    const [newTask, setNewTask] = useState('')

    const handleChange = (event) => {
        setNewTask(event.target.value)
    }
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTaskList([newTask, ...taskList])
            setNewTask('')
        }
    }
    return (
        <>
            <h2>TODOLIST</h2>
            <div>
                <input onChange={handleChange} value={newTask}/>
            </div>
            <button onClick={addTask}>ADD TASK</button>
            <div>
                <ul>
                    {taskList.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}