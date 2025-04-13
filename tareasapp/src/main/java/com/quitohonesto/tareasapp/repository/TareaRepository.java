// ============================
// TareaRepository.java
// ============================
package com.quitohonesto.tareasapp.repository;

import com.quitohonesto.tareasapp.model.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TareaRepository extends JpaRepository<Tarea, Long> {}