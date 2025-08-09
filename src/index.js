// Importaciones
const express = require('express'); 
const cors = require('cors');
const path = require('path');

const projectRoutes = require('./routes/projectRoutes'); 

require('dotenv').config();

// Creación del servidor 
const PORT = process.env.PORT || 4000;
const server = express();

// Middlewares
server.use(cors());
server.use(express.json({ limit: '10mb' }));

// Configuración de EJS como motor de plantillas
server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

// Servir carpeta styles (CSS) como estática
server.use(express.static(path.join(__dirname, 'styles')));

// Servir carpeta public como estática (ruta absoluta)

server.use(express.static(path.join(process.cwd(), 'public')));
// Servir carpeta uploads como estática (ruta absoluta)
server.use('/uploads', express.static(path.join(process.cwd(), 'public', 'uploads')));

// Rutas API
server.use('/project', projectRoutes);

// Inicio del servidor
server.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});







