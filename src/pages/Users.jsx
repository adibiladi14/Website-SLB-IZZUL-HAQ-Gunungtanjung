// src/pages/Users.jsx
import { useState, useEffect } from 'react';
import axios from '../services/api';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>Manajemen Data Pengguna</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
