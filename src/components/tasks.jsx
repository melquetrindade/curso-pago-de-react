import {ChevronRightIcon, DeleteIcon, TrashIcon} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from './button'

function Tasks({tasks, onTaskClick2, deleteTask}){
    const navigate = useNavigate()

    function resolveTask(id){
        onTaskClick2(id)
    }

    function onSeeDetailsClick(task){
        const query = new URLSearchParams
        query.set("description", task.description)
        query.set("title", task.title)
        navigate(`/task?${query.toString()}`)
    }

    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                    <button onClick={() => resolveTask(task.id)} 
                        className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${task.isCompleted && 'line-through'}`}>
                        {task.title}
                    </button>

                    <Button onClick={() => onSeeDetailsClick(task)}>
                        <ChevronRightIcon/>
                    </Button>

                    <Button onClick={() => deleteTask(task.id)}>
                        <TrashIcon/>
                    </Button>
                </li>
            ))}
        </ul>
    )
}

export default Tasks