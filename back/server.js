// Importar Express
const express = require('express');
const cors = require('cors');

// Crear una aplicación Express
const app = express();

// Definir el puerto en el que el servidor escuchará
const port = 3001;

app.use(cors());  // Usar CORS para permitir solicitudes desde cualquier origen

// Definir una ruta GET que devuelva un mensaje estático
app.get('/api/hola', (req, res) => {
  res.json({ message: '¡Hola desde el servidor!' });
});

// Hacer que el servidor escuche en el puerto especificado
app.listen(port, () => {
  console.log(`Servidor RESTful corriendo en http://0.0.0.0:${port}`);
});

