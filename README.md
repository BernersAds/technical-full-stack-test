# To-Do List App - Prueba Técnica

Prueba técnica: Aplicación de lista de tareas con Node.js, Express, SQLite y Vue.js.

## Objetivo

Crear una aplicación simple de lista de tareas (To-Do List) que permita:
- Agregar una tarea
- Marcar una tarea como completada
- Eliminar una tarea

## Estructura del Proyecto

```
technical-full-stack-test/
├── backend/
│   ├── server.js          # Servidor Express con API REST (a completar)
│   ├── package.json       # Dependencias del backend
│   └── tasks.db          # Base de datos SQLite (se crea automáticamente)
└── frontend/
    └── index.html        # Interfaz Vue.js (a completar)
```

## Tareas a Implementar

### Backend (server.js)

1. **Configurar la base de datos SQLite**
   - Crear conexión a `tasks.db`
   - Crear tabla `tasks` con campos:
     - `id` (autoincremental)
     - `description` (texto)
     - `completed` (booleano)

2. **Implementar los endpoints:**

   **GET /tasks** - Devolver todas las tareas
   ```
   Response: 200 OK
   [
     {
       "id": 1,
       "description": "Completar la prueba técnica",
       "completed": false
     },
     {
       "id": 2,
       "description": "Revisar el código",
       "completed": true
     }
   ]
   ```

   **POST /tasks** - Crear una nueva tarea
   ```
   Request Body:
   {
     "description": "Nueva tarea"
   }

   Response: 201 Created
   {
     "id": 3,
     "description": "Nueva tarea",
     "completed": false
   }
   ```

   **PUT /tasks/:id** - Actualizar una tarea (marcar como completada)
   ```
   Request Body:
   {
     "completed": true
   }

   Response: 200 OK
   {
     "id": 1,
     "completed": true,
     "message": "Tarea actualizada correctamente"
   }
   ```

   **DELETE /tasks/:id** - Eliminar una tarea
   ```
   Response: 200 OK
   {
     "message": "Tarea eliminada correctamente",
     "id": 1
   }
   ```

### Frontend (index.html)

1. **Implementar los métodos Vue.js:**
   - `loadTasks()` - Cargar tareas desde el backend
   - `addTask()` - Agregar nueva tarea
   - `toggleTask(task)` - Marcar/desmarcar tarea como completada
   - `deleteTask(id)` - Eliminar tarea

## Instalación

```bash
cd backend
npm install
```

## Ejecutar el proyecto

```bash
cd backend
npm start
```

Luego abrir `frontend/index.html` en el navegador.

## Tecnologías

- **Backend:** Node.js, Express, SQLite3, CORS
- **Frontend:** Vue.js 3, HTML5, CSS3

## Notas

- El servidor corre en `http://localhost:3000`
- Las dependencias ya están instaladas
- La estructura HTML y CSS ya están completas
- Solo debes implementar la lógica en los TODOs marcados

## Recursos Útiles

### Documentación Oficial

- **Vue.js 3**: https://vuejs.org/guide/introduction.html
  - Guía de inicio: https://vuejs.org/guide/essentials/reactivity-fundamentals.html
  - API Composition: https://vuejs.org/api/

- **Express.js**: https://expressjs.com/
  - Routing: https://expressjs.com/en/guide/routing.html
  - Request/Response: https://expressjs.com/en/4x/api.html

- **SQLite3 (Node.js)**: https://github.com/TryGhost/node-sqlite3
  - API Reference: https://github.com/TryGhost/node-sqlite3/wiki/API

- **Fetch API**: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
  - Peticiones HTTP con JavaScript

### Tutoriales Recomendados

- **REST API con Express**: https://expressjs.com/en/starter/basic-routing.html
- **Vue.js Tutorial**: https://vuejs.org/tutorial/
- **SQLite Tutorial**: https://www.sqlitetutorial.net/
