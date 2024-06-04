// src/pages/Students.jsx
import  { useState, useEffect } from 'react';
import axios from '../services/api';

function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  return (
    <div>
      <h1>Manajemen Data Siswa</h1>
      <ul>
        {students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Students;
