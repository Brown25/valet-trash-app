// utils/api.js
const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000';

export const fetchTasks = async () => {
    const response = await fetch(`${BASE_URL}/api/tasks`);
    if (!response.ok) {
        throw new Error('Failed to fetch tasks');
    }
    return await response.json();
};