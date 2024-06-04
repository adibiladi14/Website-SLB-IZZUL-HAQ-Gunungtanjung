// src/pages/Materials.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from '../services/api';

function Materials() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    axios.get('/materials')
      .then(response => setMaterials(response.data))
      .catch(error => console.error('Error fetching materials:', error));
  }, []);

  return (
    <div>
      <h1>Manajemen Materi Pembelajaran</h1>
      <ul>
        {materials.map(material => (
          <li key={material.id}>{material.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Materials;
