import React from 'react';

export default function TareaList({ tareas, onEliminar, toast }) {
  return (
    <div className="space-y-4">
      {tareas.length === 0 ? (
        <p className="text-center text-gray-500">No hay tareas registradas.</p>
      ) : (
        tareas.map((tarea) => (
          <div
            key={tarea.id}
            className="p-4 bg-white border border-blue-100 rounded shadow-sm flex flex-col sm:flex-row justify-between gap-2"
          >
            <div>
              <h3 className="font-semibold text-[#1C2E65]">
                {tarea.entidadMunicipalNombre}
              </h3>
              <p className="text-sm text-gray-700">{tarea.descripcion}</p>
            </div>
            <button
              onClick={() => {
                if (window.confirm("¿Estás seguro de eliminar esta tarea?")) {
                  onEliminar(tarea.id);
                  
                }
              }}
              className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600"
            >
              Eliminar
            </button>

          </div>
        ))
      )}
    </div>
  );
}
