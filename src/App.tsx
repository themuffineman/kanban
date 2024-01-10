import { useState } from 'react'
import TaskCard from './components/TaskCard'
import {Status, Task, tasks as initialTasks, statuses} from './utils/data-tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  
  const columns = statuses.map((status)=>{
    const tasksInColumn = tasks.filter((task)=> task.status === status)
    return {
      title: status,
      tasks: tasksInColumn
    }
  })
 
  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t)=>{
      return t.id === task.id ? task : t
    })
    setTasks(updatedTasks)
  }
  const handleDrop = (e: React.DragEvent<HTMLDivElement>, status: Status)=>{
    e.preventDefault()
    setCurrentlyHovered(null)
    const id = e.dataTransfer.getData("id") 
    const task = tasks.find((task)=> task.id === id)
    if(task){
      updateTask({...task, status})
    }
  }

  const [currentlyHovered, setCurrentlyHovered] = useState <Status | null> (null)

  function handleDragEnter(status: Status){
    setCurrentlyHovered(status)
  }

  return (
    <div className='flex divide-x'>
      {columns.map((column)=>(
        <div onDragEnter={()=> handleDragEnter(column.title) } onDrop={(e)=> handleDrop(e, column.title)} onDragOver={((e)=> e.preventDefault())}>
          <div className='flex justify-between items-center text-[30px] p-2 font-bold'>
            <h1 className="capitalize ">{column.title}</h1>
            {column.tasks.reduce((total, task)=> total + (task?.points || 0), 0)}
          </div>
          <div className={`h-full ${currentlyHovered === column.title ? 'bg-gray-500': ''}`}>
            {column.tasks.map(((task)=>(<TaskCard task={task} updateTask={updateTask}/>)))}
          </div>
      </div>
      ))}
    </div>
  )  
}

export default App