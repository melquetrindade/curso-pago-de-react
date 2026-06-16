import { useEffect, useState } from "react"
import Tasks from './components/tasks'
import AddTasks from "./components/addTasks"
import {v4} from 'uuid'

function App(){
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  // useEffect(() => {
  //   async function fetchTasks() {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', {
  //       method: 'GET'
  //     })
  //     const data = await response.json()
  //     console.log(data)
  //     setTasks(data)
  //   }
  //   fetchTasks()
  // }, [])

  function onTaskClick(taskId){
    const newTasks = tasks.map(task => {
      if(task.id == taskId){
        return {...task, isCompleted: !task.isCompleted}
      }
      return task
    })

    setTasks(newTasks)
  }

  function deleteTask(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(),
      title: title,
      description: description,
      isCompleted: false
    }
    setTasks([...tasks, newTask])
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-100 text-3xl font-bold text-center">Gerenciador de tarefas</h1>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick2={onTaskClick} deleteTask={deleteTask}/>
      </div>
    </div>
  )
}
//<Tasks tasks={tasks}/>
export default App