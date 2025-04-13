
// ============================
// Tarea.java
// ============================
package com.quitohonesto.tareasapp.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "tareas")
public class Tarea {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long entidadMunicipalId;
    private String entidadMunicipalNombre;

    @Column(length = 1000)
    private String descripcion;

    private LocalDateTime fechaCreacion = LocalDateTime.now();

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public Long getEntidadMunicipalId() { return entidadMunicipalId; }
    public void setEntidadMunicipalId(Long entidadMunicipalId) { this.entidadMunicipalId = entidadMunicipalId; }

    public String getEntidadMunicipalNombre() { return entidadMunicipalNombre; }
    public void setEntidadMunicipalNombre(String entidadMunicipalNombre) { this.entidadMunicipalNombre = entidadMunicipalNombre; }

    public String getDescripcion() { return descripcion; }
    public void setDescripcion(String descripcion) { this.descripcion = descripcion; }

    public LocalDateTime getFechaCreacion() { return fechaCreacion; }
    public void setFechaCreacion(LocalDateTime fechaCreacion) { this.fechaCreacion = fechaCreacion; }
}
