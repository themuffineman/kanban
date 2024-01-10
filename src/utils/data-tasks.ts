export type Status = 'todo' | 'in-progress' | 'done'
export type Priority = 'low' | 'medium' | 'high'

export type Task = {
    title: string,
    id: string,
    status?: Status,
    priority: Priority,
    points?: number,
  }

export const statuses: Status[] = ['todo', 'in-progress', 'done']


  export const tasks: Task[] =[
    {
      title: 'Do market research',
      id: 'BUS-1',
      status: 'todo',
      priority: "high",
      points: 5,
    },
  
    {
      title: 'Do market research',
      id: 'BUS-1',
      status: 'todo',
      priority: "high",
      points: 5,
    },
  
    {
      title: 'Do market research',
      id: 'BUS-1',
      status: 'todo',
      priority: "high",
      points: 5,
    },
  
    {
      title: 'Do market research',
      id: 'BUS-1',
      status: 'todo',
      priority: "high",
      points: 5,
    },

    {
      title: 'Do house research',
      id: 'BUS-1',
      status: 'in-progress',
      priority: "low",
      points: 5,
    },
  
    {
      title: 'Do weather research',
      id: 'BUS-1',
      status: 'in-progress',
      priority: "low",
      points: 5,
    },
  
    {
      title: 'Do food research',
      id: 'BUS-1',
      status: 'in-progress',
      priority: "low",
      points: 5,
    },

    {
      title: 'Do market research',
      id: 'BUS-1',
      status: 'done',
      priority: "medium",
      points: 5,
    },
  
    {
      title: 'Do market research',
      id: 'BUS-1',
      status: 'done',
      priority: "medium",
      points: 5,
    },
  
    {
      title: 'Do market research',
      id: 'BUS-1',
      status: 'done',
      priority: "medium",
      points: 5,
    }
  ]