# 🏛️ Gestor de Tareas Municipales - Quito Honesto

Aplicación web completa (frontend + backend) para la gestión de tareas asociadas a entidades municipales, desarrollada como parte de una prueba técnica.

---

## 🚀 Tecnologías utilizadas

### 📦 Backend (Spring Boot)
- Java 21
- Spring Boot 3.4.4
- Spring Web / Spring Data JPA
- PostgreSQL
- Arquitectura MVC
- API RESTful

### 💻 Frontend (React)
- React 18 (con Hooks)
- TailwindCSS
- Axios
- React Toastify
- Diseño responsive

---

## ✅ Funcionalidades implementadas

### Frontend:
- Formulario para crear nuevas tareas asociadas a una entidad municipal
- Lista visual de tareas (ordenada, con eliminación)
- Filtro de búsqueda en tiempo real
- Diseño moderno y responsive
- Validación de campos con notificaciones
- Paleta institucional de Quito Honesto y logos oficiales

### Backend:
- API RESTful con endpoints:
  - `GET /api/tareas` → Lista todas las tareas
  - `POST /api/tareas` → Crea una nueva tarea
  - `DELETE /api/tareas/{id}` → Elimina una tarea
- Uso de Spring Data JPA con PostgreSQL
- Eliminación de dependencias innecesarias (como la consulta fallida a API externa)
- Validación y control de errores
- Limpieza de código y seguridad básica integrada

---

## ⚙️ Instrucciones para correr el proyecto

### 📦 Backend (Spring Boot)

1. Crear una base de datos PostgreSQL: `tareasdb`
2. Configurar `application.properties` con tus credenciales
3. Compilar y ejecutar:

```bash
./mvnw spring-boot:run
```

### 💻 Frontend (React)

1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar la app:

```bash
npm start
```

---

## 📂 Organización del código

```
├── backend/
│   └── src/main/java/com/quitohonesto/tareasapp/
│       ├── controller/
│       ├── model/
│       ├── repository/
│       └── service/
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── services/
│       └── App.js
```

---

## 📌 Notas técnicas

- El consumo de entidades municipales se hace desde el frontend, ya que la API pública externa no permite acceso desde backend Java.
- Se eliminaron clases no utilizadas para mantener el código limpio y profesional.
- No hay uso de `dangerouslySetInnerHTML`, lo que evita vulnerabilidades XSS.
- JPA evita inyecciones SQL al utilizar métodos precompilados.

---

## 👤 Autor

Desarrollado por Daniel Fernández como parte de una prueba técnica para Quito Honesto.
