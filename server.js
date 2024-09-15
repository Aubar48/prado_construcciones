const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta para servir el archivo JSON con el contenido
app.get('/data/content.json', (req, res) => {
  res.sendFile(path.join(__dirname, 'config.json'));
});

// Ruta para actualizar el contenido del archivo JSON
app.post('/update-content', (req, res) => {
  const newContent = req.body;
  fs.writeFile(path.join(__dirname, 'config.json'), JSON.stringify(newContent, null, 2), (err) => {
    if (err) {
      return res.status(500).send('Error al actualizar el contenido');
    }
    res.send('Contenido actualizado');
  });
});

// Ruta para servir la página principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para servir la interfaz de administración
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
