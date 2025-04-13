import React from 'react';

export default function Header() {
  return (
    <header className="bg-[#1C2E65] text-white p-6 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        

        <div className="text-center flex-1">
          <h1 className="text-2xl sm:text-3xl font-bold">Gestor de Tareas Municipales</h1>
          <p className="text-sm sm:text-base text-blue-100">
            Plataforma de Tareas para Entidades del Municipio de Quito
          </p>
        </div>

        
      </div>
    </header>
  );
}
