// src/pages/Teachers.jsx
import  { useState, useEffect } from 'react';
import axios from '../services/api';

function Teachers() {
  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    axios.get('/teachers')
      .then(response => setTeachers(response.data))
      .catch(error => console.error('Error fetching teachers:', error));
  }, []);

  return (
    <div>
      <h1>Manajemen Data Guru</h1>
      <ul>
        {teachers.map(teacher => (
          <li key={teacher.id}>{teacher.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teachers;
