import axios from 'axios';

const BASE_URL = 'http://localhost:8080/api';
const ENTIDADES_URL = 'https://quitohonesto.ec/api/entidades/';

export const obtenerEntidades = async () => {
  const response = await axios.get(ENTIDADES_URL);
  return response.data;
};

export const obtenerTareas = async () => {
  const response = await axios.get(`${BASE_URL}/tareas`);
  return response.data;
};

export const crearTarea = async (tarea) => {
  const response = await axios.post(`${BASE_URL}/tareas`, tarea);
  return response.data;
};

export const eliminarTarea = async (id) => {
  await axios.delete(`${BASE_URL}/tareas/${id}`);
};
