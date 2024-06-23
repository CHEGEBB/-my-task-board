import React from 'react'
import "../sass/CreateTask.scss"
import Progressicon from "../images/Time_atack_duotone.svg"
import Completedicon from "../images/Done_round_duotone.svg"
import Wonticon from "../images/close_ring_duotone-1.svg"
import Image from 'next/image'
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
        <div className="icon-container">
        <h2>Icon</h2>
        <div className="icon">
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
        </div>
        <div className="status-container">
          <h2>Status</h2>
          <div className="status">
            <div className="progress">
              <div className="progress-icon">
                <Image src={Progressicon} alt="Progress Icon" width={30} quality={100} />
              </div>
              <div className="progress-text">
                <h1>In Progress</h1>
              </div>
            </div>
            <div className="completed">
              <div className="completed-icon">
                <Image src={Completedicon} alt="Completed Icon" width={30} quality={100} />
              </div>
              <div className="completed-text">
                <h1>Completed</h1>
              </div>
            </div>
            <div className="wont">
              <div className="wont-icon">
                <Image src={Wonticon} alt="Wont Icon" width={30} quality={100} />
              </div>
              <div className="wont-text">
                <h1>Wont do</h1>
              </div>
            </div>
          </div>
        </div>
      </form>
        
    </div>
  )
}
