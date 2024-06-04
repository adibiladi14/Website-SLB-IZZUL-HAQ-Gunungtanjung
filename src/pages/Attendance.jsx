// src/pages/Attendance.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from '../services/api';

function Attendance() {
  const [attendances, setAttendances] = useState([]);

  useEffect(() => {
    axios.get('/attendance')
      .then(response => setAttendances(response.data))
      .catch(error => console.error('Error fetching attendance:', error));
  }, []);

  return (
    <div>
      <h1>Manajemen Absensi</h1>
      <ul>
        {attendances.map(attendance => (
          <li key={attendance.id}>{attendance.studentName} - {attendance.date} - {attendance.status}</li>
        ))}
      </ul>
    </div>
  );
}

export default Attendance;
