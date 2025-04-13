import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import TareaForm from './components/TareaForm';
import TareaList from './components/TareaList';
import { obtenerTareas, eliminarTarea } from './services/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('');

  const cargarTareas = () => {
    obtenerTareas().then(setTareas);
  };

  const handleEliminar = async (id) => {
    await eliminarTarea(id);
    toast.info("Tarea eliminada");
    cargarTareas();
  };
  

  useEffect(() => {
    cargarTareas();
  }, []);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-gray-900">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Formulario a la izquierda */}
          <div className="lg:w-1/3 bg-white p-4 rounded shadow border border-blue-100">
            <TareaForm onTareaCreada={cargarTareas} toast={toast} />
          </div>

          {/* Lista de tareas a la derecha */}
          <div className="lg:w-2/3">
            <input
              type="text"
              placeholder="Buscar tareas..."
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="w-full p-2 mb-4 border border-blue-300 rounded"
            />
            <TareaList
              tareas={tareas.filter(t =>
                t.descripcion.toLowerCase().includes(filtro.toLowerCase()) ||
                t.entidadMunicipalNombre.toLowerCase().includes(filtro.toLowerCase())
              )}
              onEliminar={handleEliminar}
              toast={toast}
            />
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={2000} />
      <footer className="bg-white py-4 border-t mt-8">
        <div className="flex justify-center">
          <img
            src="/footer-logo.png"
            alt="Quito Honesto y Alcaldía Metropolitana"
            className="h-16 sm:h-20 w-auto"
          />
        </div>
      </footer>

    </div>

  );
}

export default App;
