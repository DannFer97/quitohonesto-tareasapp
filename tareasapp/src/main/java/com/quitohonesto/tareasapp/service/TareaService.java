// ============================
// TareaService.java
// ============================
package com.quitohonesto.tareasapp.service;

import com.quitohonesto.tareasapp.model.Tarea;
import com.quitohonesto.tareasapp.repository.TareaRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TareaService {

    @Autowired
    private TareaRepository tareaRepository;


    public List<Tarea> obtenerTareas() {
        return tareaRepository.findAll();
    }

    public Tarea crearTarea(Tarea tarea) {
        if (tarea.getEntidadMunicipalNombre() == null || tarea.getEntidadMunicipalNombre().isEmpty()) {
            tarea.setEntidadMunicipalNombre("Entidad Desconocida");
        }
        return tareaRepository.save(tarea);
    }

    public void eliminarTarea(Long id) {
        if (!tareaRepository.existsById(id)) {
            throw new EntityNotFoundException("Tarea con ID " + id + " no encontrada");
        }
        tareaRepository.deleteById(id);
    }
}

