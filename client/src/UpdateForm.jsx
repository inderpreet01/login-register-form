//import React, { useState } from 'react';
import axios from 'axios';
import { useState } from 'react';

const UpdateForm = () => {
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:3000/update', {
        email,
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
        placeholder="email"
        value={email}
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
