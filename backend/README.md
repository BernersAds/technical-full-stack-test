# Backend - To-Do List API

API REST para gestión de tareas construida con Node.js, Express y SQLite.

## 📋 Requisitos Previos

- Node.js (versión 18 o superior)
- npm (viene incluido con Node.js)

Verificar instalación:
```bash
node --version
npm --version
```

## 🚀 Instalación

1. Navegar a la carpeta del backend:
```bash
cd backend
```

2. Instalar las dependencias:
```bash
npm install
```

Esto instalará:
- `express`: Framework web para Node.js
- `sqlite3`: Base de datos SQLite
- `cors`: Middleware para permitir peticiones cross-origin
- `nodemon`: (dev) Auto-reinicio del servidor en desarrollo

## ▶️ Ejecutar el Proyecto

### Modo Producción
```bash
npm start
```

### Modo Desarrollo (con auto-reload)
```bash
npm run dev
```

El servidor se iniciará en: **http://localhost:3000**

Verás en la consola:
```
Servidor corriendo en http://localhost:3000
Conectado a la base de datos SQLite
Tabla "tasks" lista
```

## 📁 Archivos

- `server.js` - Archivo principal del servidor (aquí implementarás los endpoints)
- `package.json` - Configuración y dependencias del proyecto
- `tasks.db` - Base de datos SQLite (se crea automáticamente al iniciar)

## 🔧 Tareas a Implementar

Debes completar los siguientes endpoints en `server.js`:

### 1. GET /tasks
Devuelve todas las tareas de la base de datos.

### 2. POST /tasks
Crea una nueva tarea con la descripción recibida.

### 3. PUT /tasks/:id
Actualiza el estado `completed` de una tarea específica.

### 4. DELETE /tasks/:id
Elimina una tarea por su ID.

## 🗃️ Esquema de la Base de Datos

La tabla `tasks` ya está creada con la siguiente estructura:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | INTEGER | Primary Key, Autoincremental |
| description | TEXT | Descripción de la tarea (NOT NULL) |
| completed | BOOLEAN | Estado de la tarea (0 = false, 1 = true) |

## 🧪 Probar los Endpoints

Puedes probar los endpoints con:

### Usando curl:
```bash
# GET todas las tareas
curl http://localhost:3000/tasks

# POST nueva tarea
curl -X POST http://localhost:3000/tasks \
  -H "Content-Type: application/json" \
  -d '{"description": "Mi nueva tarea"}'

# PUT actualizar tarea
curl -X PUT http://localhost:3000/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"completed": true}'

# DELETE eliminar tarea
curl -X DELETE http://localhost:3000/tasks/1
```

### Usando el navegador:
- Abre el frontend en `frontend/index.html`
- Interactúa con la interfaz para probar los endpoints

## 📚 Recursos Útiles

- [Express.js - Routing](https://expressjs.com/en/guide/routing.html)
- [SQLite3 Node.js API](https://github.com/TryGhost/node-sqlite3/wiki/API)
- [Express Request/Response](https://expressjs.com/en/4x/api.html)

## ⚠️ Solución de Problemas

**Puerto 3000 ya en uso:**
```bash
# Encuentra el proceso usando el puerto
lsof -i :3000

# Mata el proceso
kill -9 <PID>
```

**Error al instalar dependencias:**
```bash
# Elimina node_modules y reinstala
rm -rf node_modules package-lock.json
npm install
```

**Error de base de datos:**
- Elimina el archivo `tasks.db` y reinicia el servidor
- Se creará una nueva base de datos limpia
