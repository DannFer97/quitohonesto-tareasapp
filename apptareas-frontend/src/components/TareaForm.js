import React, { useEffect, useState } from 'react';
import { obtenerEntidades, crearTarea } from '../services/api';

export default function TareaForm({ onTareaCreada, toast }) {
  const [entidades, setEntidades] = useState([]);
  const [entidadId, setEntidadId] = useState('');
  const [descripcion, setDescripcion] = useState('');

  useEffect(() => {
    obtenerEntidades().then(setEntidades);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!entidadId || !descripcion.trim()) {
      toast.error("Por favor completa todos los campos", {
        className: "toast-centrado",
        hideProgressBar: false,
        closeOnClick: true,
      });
      return;
    }

    try {
      const entidadSeleccionada = entidades.find(
        (e) => e.id_dependencia === parseInt(entidadId)
      );

      await crearTarea({
        entidadMunicipalId: parseInt(entidadId),
        entidadMunicipalNombre: entidadSeleccionada.entidad_dependencia,
        descripcion,
      });

      toast.success("Tarea agregada correctamente");
      setEntidadId('');
      setDescripcion('');
      onTareaCreada();
    } catch (error) {
      toast.error("Hubo un error al agregar la tarea");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 text-sm text-gray-800"
    >
      <div>
        <label className="block mb-1 font-semibold text-blue-900">
          Entidad Municipal
        </label>
        <select
          value={entidadId}
          onChange={(e) => setEntidadId(e.target.value)}
          className="w-full border border-blue-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">-- Selecciona una entidad --</option>
          {entidades.map((entidad) => (
            <option key={entidad.id_dependencia} value={entidad.id_dependencia}>
              {entidad.entidad_dependencia}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block mb-1 font-semibold text-blue-900">
          Descripción de la tarea
        </label>
        <textarea
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          className="w-full border border-blue-300 p-2 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        ></textarea>
      </div>

      <div className="flex justify-center">
      <button
        type="submit"
        className="bg-[#1C2E65] hover:bg-blue-900 text-white font-semibold px-4 py-2 rounded w-full sm:w-auto shadow-md transition"
      >
        Agregar Tarea
      </button>

      </div>

      
    </form>
  );
}
