import TaskCard from './components/TaskCard'
import {tasks, statuses} from './utils/data-tasks'

function App() {
  const columns = statuses.map((status)=>{
    const tasksInColumn = tasks.filter((task)=> task.status === status)
    return{
      title: status,
      tasks: tasksInColumn
    }
  })


  return (


    <div className='flex divide-x'>
      {columns.map((column)=>(
        <div>
          <h1 className="text-[30px] font-bold">{column.title}</h1>
          {column.tasks.map(((task)=>(<TaskCard task={task} />)))}
      </div>
      ))}
    </div>
  )
    
}

export default App

// We ended at 42 mins 