package com.quitohonesto.tareasapp.controller;

import com.quitohonesto.tareasapp.service.EntidadMunicipalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/entidades-municipales")
@CrossOrigin(origins = "*")
public class EntidadMunicipalController {

    @Autowired
    private EntidadMunicipalService entidadService;

    @GetMapping
    public List<Map<String, Object>> listarEntidades() {
        return entidadService.obtenerEntidades();
    }
}
