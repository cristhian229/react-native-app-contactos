import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'https://tienda-virtual-a1v7.onrender.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json', // Encabezado para los tipos de contenido
    'Authorization': 'Bearer <token>', // Si necesitas autorización con token
  },
});

export default axiosInstance;
