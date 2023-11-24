import  { useState } from 'react';
import axios from 'axios';

const DeleteForm = () => {
  const [useremail, setUseremail] = useState('');

  const handleDelete = async () => {
    try {
      const response = await axios.delete('http://localhost:3000/delete', {
        data: { useremail },
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
        type="email"
        placeholder="Email"
        value={useremail}
        onChange={(e) => setUseremail(e.target.value)}
      />
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteForm;
