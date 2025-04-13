package com.quitohonesto.tareasapp.service;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class EntidadMunicipalService {

    private final String API_URL = "http://quitohonesto.ec/api/entidades/";


    public List<Map<String, Object>> obtenerEntidades() {
        RestTemplate restTemplate = new RestTemplate();

        // Cabeceras para simular navegador
        HttpHeaders headers = new HttpHeaders();
        headers.add("User-Agent", "Mozilla/5.0");
        headers.add("Accept", "*/*");

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<String> response = restTemplate.exchange(
                API_URL, HttpMethod.GET, entity, String.class
        );

        String json = response.getBody();
        System.out.println("Respuesta cruda de la API:\n" + json);

        try {
            ObjectMapper mapper = new ObjectMapper();
            return mapper.readValue(json, new TypeReference<List<Map<String, Object>>>() {});
        } catch (Exception e) {
            System.out.println("Error al parsear JSON: " + e.getMessage());
            return List.of(); // lista vacía
        }
    }



    public String obtenerNombreEntidadPorId(Long id) {
        List<Map<String, Object>> entidades = obtenerEntidades();

        for (Map<String, Object> entidad : entidades) {
            Integer idEntidad = (Integer) entidad.get("id_dependencia");
            if (idEntidad != null && idEntidad.equals(id.intValue())) {
                return (String) entidad.get("entidad_dependencia");
            }
        }
        return "Entidad Desconocida";
    }
}
