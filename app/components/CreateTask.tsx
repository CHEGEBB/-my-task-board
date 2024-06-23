import React from 'react'
import "../sass/CreateTask.scss"

export default function CreateTask() {
  return (
    <div className="create-task-main">
      <form className="form">
        <h2>Task details</h2>
        <div className="form-group">
        <label htmlFor="task">Task name</label>
        <input type="text" name="task" id="task" />
        </div>
        <div className=" form-group">
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" cols={30} rows={10}></textarea>
        </div>
      </form>
        
    </div>
  )
}
