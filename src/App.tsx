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
 
  const updateTask = (task: Task) => {
    const updatedTasks = tasks.map((t)=>{
      return t.id === task.id ? task : t
    })
    setTasks(updatedTasks)
  }

  return (
    <div className='flex divide-x'>
      {columns.map((column)=>(
        <div>
          <div className='flex justify-between items-center text-[30px] p-2 font-bold'>
            <h1 className="capitalize ">{column.title}</h1>
            {column.tasks.reduce((total, task)=> total + (task?.points || 0), 0)}
          </div>
          {column.tasks.map(((task)=>(<TaskCard task={task} updateTask={updateTask}/>)))}
      </div>
      ))}
    </div>
  )  
}

export default App