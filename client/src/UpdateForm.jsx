//import React, { useState } from 'react';
import axios from 'axios';
import { useState } from 'react';

const UpdateForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:5000/api/users/update', {
        username,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Update</h2>
      <input 
      type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UpdateForm;
