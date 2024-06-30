import React, { useEffect, useState } from 'react';

interface Task {
  _id: string;
  taskname: string;
  description: string;
  status: string;
  icon: string;
}

const NewComponent: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/tasks');
      if (response.ok) {
        const data = await response.json();
        setTasks(data);
      } else {
        console.error('Failed to fetch tasks');
      }
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <div className="new-component">
      <h2>Recently Added Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.taskname}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Icon: {task.icon}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewComponent;
