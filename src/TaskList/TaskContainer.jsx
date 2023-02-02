import React,{useContext, useRef} from 'react'
import Context from './Context';
import Task from './Task';
import {ACTIONS, PRIORITY, TaskClass} from './Utils'
import './Styles/styles.css'


const TaskContainer = () => {
  
  const taskname = useRef()  
  const priority = useRef()
  
  const context = useContext(Context)

  const handleSubmit = (e) =>{
    e.preventDefault()
    let newTask = new TaskClass(taskname.current.value, priority.current.value)
    context.Add(newTask)
    taskname.current.value = ''
  }

  return (
    <div className='container'>
      
      <h3 className='title' >Add your tasks... </h3>
      <div >
        <form className='form' onSubmit={handleSubmit}>
            <input className='input'  placeholder=' task name' ref={taskname} />
            <select className='select' ref={priority} defaultValue={PRIORITY.NORMAL}>
            <option value={PRIORITY.NORMAL}>{PRIORITY.NORMAL}</option>
            <option value={PRIORITY.HIGH}>{PRIORITY.HIGH}</option>
            <option value={PRIORITY.URGENT}>{PRIORITY.URGENT}</option>
            </select> 
            <button className='btn-task'> Add task </button>
        </form>
      </div>
      <div className='task-container'>
        {
            context.state.tasks.map((task, index) =>(
                <Task data={task} key={index} />
             ) )
      }
      </div>
    </div>
  )
}

export default TaskContainer
