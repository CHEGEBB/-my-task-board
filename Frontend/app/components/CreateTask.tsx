import React, { useState, ChangeEvent, FormEvent } from 'react';
import "../sass/CreateTask.scss";
import Progressicon from "../images/Time_atack_duotone.svg";
import Completedicon from "../images/Done_round_duotone.svg";
import Wonticon from "../images/close_ring_duotone.svg";
import Image from 'next/image';
import Deletecon from '../images/Trash.svg';
import Savecon from '../images/Done_round.svg';

interface Task {
  _id: string;
  taskname: string;
  description: string;
  status: string;
  icon: string;
}

export default function CreateTask() {
  const [taskname, setTaskname] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [status, setStatus] = useState<string>('In Progress');
  const [icon, setIcon] = useState<string>('👨‍💻');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTask = { taskname, description, status, icon };

    try {
      const response = await fetch('http://localhost:5000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTask),
      });

      if (response.ok) {
        const createdTask = await response.json();
        setTasks([...tasks, createdTask]);
        setTaskname('');
        setDescription('');
        setStatus('In Progress');
        setIcon('👨‍💻');
      } else {
        console.error('Failed to create task');
      }
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setter(e.target.value);
  };

  return (
    <div className="create-task-main">
      <form className="form" onSubmit={handleFormSubmit}>
        <h2>Task details</h2>
        <div className="form-group">
          <label htmlFor="task">Task name</label>
          <input
            type="text"
            name="task"
            id="task"
            value={taskname}
            onChange={handleInputChange(setTaskname)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            cols={30}
            rows={20}
            value={description}
            onChange={handleInputChange(setDescription)}
          ></textarea>
        </div>
        <div className="icon-container">
          <h2>Icon</h2>
          <div className="icon">
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl" onClick={() => setIcon('👨‍💻')}>
              <h1>👨‍💻</h1>
            </div>
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl" onClick={() => setIcon('💬')}>
              <h1>💬</h1>
            </div>
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl" onClick={() => setIcon('☕')}>
              <h1>☕</h1>
            </div>
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl" onClick={() => setIcon('🏋️‍♂️')}>
              <h1>🏋️‍♂️</h1>
            </div>
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl" onClick={() => setIcon('📚')}>
              <h1>📚</h1>
            </div>
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl" onClick={() => setIcon('⏰')}>
              <h1>⏰</h1>
            </div>
          </div>
        </div>
        <div className="status-container">
          <h2>Status</h2>
          <div className="status">
            <div className="flex flex-row progress" onClick={() => setStatus('In Progress')}>
              <div className="progress-icon">
                <Image src={Progressicon} alt="Progress Icon" width={30} quality={100} />
              </div>
              <div className="progress-text">
                <h1>In Progress</h1>
              </div>
            </div>
            <div className="flex flex-row completed" onClick={() => setStatus('Completed')}>
              <div className="completed-icon">
                <Image src={Completedicon} alt="Completed Icon" width={30} quality={100} />
              </div>
              <div className="completed-text">
                <h1>Completed</h1>
              </div>
            </div>
            <div className="flex flex-row wont" onClick={() => setStatus('Wont do')}>
              <div className="flex flex-row wont-icon">
                <Image src={Wonticon} alt="Wont Icon" width={30} quality={100} />
              </div>
              <div className="wont-text">
                <h1>Wont do</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="button-container">
          <div className="delete-button">
            <div className="del">
              <button type="button">Delete</button>
            </div>
            <div className="deletecon">
              <Image src={Deletecon} alt="Delete Icon" width={30} quality={100} />
            </div>
          </div>
          <div className="save-button">
            <button type="submit">Save</button>
            <div className="savecon">
              <Image src={Savecon} alt="Save Icon" width={30} quality={100} />
            </div>
          </div>
        </div>
      </form>

      <div className="task-list">
        {tasks.map((task) => (
          <div key={task._id} className="task-item">
            <h3>{task.taskname}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Icon: {task.icon}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
