const express = require('express');
const path = require('path');
const fs = require('fs');
const basicAuth = require('basic-auth');

const app = express();
const port = 3000;

// Usuarios y contraseñas
const users = {
  'prado': 'Prado48@'  // Cambia 'Prado48@' por una contraseña real
};

// Middleware de autenticación básica
function auth(req, res, next) {
  const user = basicAuth(req);

  if (user && users[user.name] === user.pass) {
    return next();
  }

  res.setHeader('WWW-Authenticate', 'Basic realm="Admin Area"');
  res.sendStatus(401);  // No autorizado
}

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

// Ruta principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Aplicar autenticación a la ruta /admin
app.use('/admin', auth);

// Ruta para servir la interfaz de administración (protegida por autenticación)
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin.html'));
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
