import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../sass/New.scss';

export default function Home() {
    const [latestTask, setLatestTask] = useState<any>(null);

    useEffect(() => {
        const fetchLatestTask = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/tasks'); 
                setLatestTask(response.data);
            } catch (error) {
                console.error('Error fetching latest task:', error);
            }
        };

        fetchLatestTask();
    }, []);

    return (
        <div className='New'>
            <div className="p-3 ml-3 bg-gray-200 con rounded-xl">
              <h1>📚</h1>
            </div>
            {latestTask && (
                <div>
                    <h2>Task To Do</h2>
                    <p>{latestTask.description}</p>
                </div>
            )}
        </div>
    );
}
