import {Task} from '../utils/data-tasks'

const TaskCard = ({task}:{
    task: Task
}) => 
(
    <div className=" rounded-lg m-2 p-2 border px-2 bg-gray-50">
      <div className=" text-lg font-semibold py-2">
        {task. title}
      </div>
      <div className="flex justify-between py-2 text-slate-700">
        <div>{task.id}</div>
        <div>{task.priority}</div>
        <div>{task.points}</div>
      </div>
    </div>
)

export default TaskCard