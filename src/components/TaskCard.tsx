import {Task} from '../utils/data-tasks'

const TaskCard = ({task, updateTaskPoints}:{task: Task, updateTaskPoints: (task: Task, points: number) => void }) => {

  const points = task.points || 0
  const updatePoints = (points: number) => {
    if (points < 0 || points > 13) return
    updateTaskPoints(task, points)
  }

  return (
      <div className=" rounded-lg m-2 p-2 border px-2 bg-gray-50 w-96">
        <div className=" text-lg font-semibold py-2 ">
          {task.title}
        </div>
        <div className="flex justify-between py-2 text-slate-700">
            <div className='flex gap-2'>
              <div>{task.id}</div>
              <div>{task.priority}</div>
            </div>
            <div className='flex gap-2 items-center'>
              <button onClick={() => updatePoints(points - 1)}  className='border border-slate-500 rounded-full w-10 p-2 bg-red-200'>-</button>
              <div className='font-semibold'>{points}</div>
              <button onClick={() => updatePoints(points + 1)} className='border border-slate-500 rounded-full w-10 p-2 bg-yellow-200'>+</button>
            </div>
        </div>
        
      </div>
)}

export default TaskCard