import React from 'react'
import {getAllTask} from '../api/task.api'
import { useEffect, useState } from 'react';
import {TaskCard} from './TaskCard'

export function TaskList() {
  
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
  
     async function loadTask(){
      const res = await getAllTask();
      console.log(res)
    setTasks(res.data)
    }
    loadTask()

  }, [])
  
  
  return <div className='grid grid-cols-3 gap-3'>
    {tasks.map((task) => (
      <TaskCard key = {task.id} task = {task} />
    ))}

  </div>
}

export default TaskList