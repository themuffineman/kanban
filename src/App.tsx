import { useState } from 'react'
import TaskCard from './components/TaskCard'
import {Task, tasks as initialTasks, statuses} from './utils/data-tasks'

function App() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  
  const columns = statuses.map((status)=>{
    const tasksInColumn = tasks.filter((task)=> task.status === status)
    return {
      title: status,
      tasks: tasksInColumn
    }
  })

  const updateTaskPoints = (task: Task, points: number) => {
    const updatedTasks = tasks.map((t) => {
      if (t.id === task.id) {
        return {
          ...t, points
        }
      } 
      else {
        return (t)
      }
    })
    setTasks(updatedTasks)
  }

  return (


    <div className='flex divide-x'>
      {columns.map((column)=>(
        <div>
          <h1 className="text-[30px] font-bold capitalize p-2">{column.title}</h1>
          {column.tasks.reduce((total, task)=> total + (task?.points || 0), 0)}
          {column.tasks.map(((task)=>(<TaskCard task={task} updateTaskPoints={updateTaskPoints}/>)))}
      </div>
      ))}
    </div>
  )
    
}

export default App