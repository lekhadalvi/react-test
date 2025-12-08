import React, { useState } from 'react';
import axios from 'axios';

const DeleteItem = () => {
    const [status, setStatus] = useState('');

    const handleDelete = async () => {
        try {
            // Replace with your API endpoint
            const url = 'https://jsonplaceholder.typicode.com/posts/1';
            const response = await axios.delete(url);

            console.log('Response:', response);

            if (response.status === 200) {
                setStatus('Item deleted successfully!');
            }
        } catch (error) {
            console.error('Error deleting item:', error);
            setStatus('Failed to delete item.');
        }
    };

    return (
        <div>
            <h2>Delete Request Example</h2>
            <button onClick={handleDelete}>Delete Item</button>
            {status && <p>{status}</p>}
        </div>
    );
};

export default DeleteItem;
