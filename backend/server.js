const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Configurar base de datos SQLite
const dbPath = path.join(__dirname, 'tasks.db');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err.message);
  } else {
    console.log('Conectado a la base de datos SQLite');
    initDatabase();
  }
});

// Inicializar la base de datos y crear la tabla tasks si no existe
function initDatabase() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      description TEXT NOT NULL,
      completed BOOLEAN DEFAULT 0
    )
  `;
  
  db.run(createTableQuery, (err) => {
    if (err) {
      console.error('Error al crear la tabla:', err.message);
    } else {
      console.log('Tabla "tasks" lista');
    }
  });
}

// ===== ENDPOINTS =====

// TODO: GET /tasks - Obtener todas las tareas


// TODO: POST /tasks - Crear una nueva tarea


// TODO: PUT /tasks/:id - Actualizar una tarea (marcar como completada/no completada)


// TODO: DELETE /tasks/:id - Eliminar una tarea


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
