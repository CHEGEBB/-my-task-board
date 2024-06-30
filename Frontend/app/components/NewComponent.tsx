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
            {latestTask && (
                <div>
                    <h2>Latest Task:</h2>
                    <p>Task Name: {latestTask.taskname}</p>
                    <p>Description: {latestTask.description}</p>
                    <p>Status: {latestTask.status}</p>
                    {/* Render other details as needed */}
                </div>
            )}
        </div>
    );
}
