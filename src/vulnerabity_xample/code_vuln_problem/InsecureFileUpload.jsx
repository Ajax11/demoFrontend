import React from 'react';
import axios from 'axios';

const InsecureFileUpload = () => {
  const handleUpload = async event => {
    const file = event.target.files[0];

    const formData = new FormData();
    formData.append('file', file);

    // ❌ Subida sin ningún tipo de validación
    await axios.post('http://localhost:8000/api/upload/', formData);
  };

  return (
    <div>
      <h2>Insecure File Upload</h2>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default InsecureFileUpload;
