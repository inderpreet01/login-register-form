import  { useState } from 'react';
import axios from 'axios';

const DeleteForm = () => {
  const [username, setUsername] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:5000/api/users/delete', {
        data: { username },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Delete</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteForm;
