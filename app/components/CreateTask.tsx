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
        <textarea name="description" id="description" cols={30} rows={20}></textarea>
        </div>
        <div className="icon">
          <h2>Icon</h2>
          <div className="p-3 ml-3 bg-gray-200 con rounded-xl">
            <h1>👨‍💻</h1>
          </div>
          <div className="p-3 ml-3 bg-gray-200 con rounded-xl">
            <h1>💬</h1>
            </div>
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl">
            <h1>☕</h1>
            </div>
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl">
            <h1>🏋️‍♂️</h1>
            </div>
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl">
            <h1>📚</h1>
            </div>
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl">
            <h1>⏰</h1>
            </div>
        </div>
      </form>
        
    </div>
  )
}
