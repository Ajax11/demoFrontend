import axios from 'axios';

// ❌ Secretos hardcodeados
// const API_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.INSECURE';
// var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.INSECURE';

// Forzar a usar process, mala practica pero para validar
// que funcina, un recurso necesario

const process = {};

const HardcodedSecrets = async () => {
  const token = process.env.REACT_APP_API_TOKEN;
  await axios.get('http://localhost:8000/api/admin', {
    headers: {
      Authorization: `Bearer ${token}`,
      //Authorization: `Bearer ${API_TOKEN}`,
    },
  });
};

export default HardcodedSecrets;
