//importaciones
const express = require('express'); 
const cors = require('cors');

const projectRoutes = require('./routes/projectRoutes'); 

require('dotenv').config();

//creación del servidor 
const PORT = process.env.PORT || 4000;
const server = express();
server.use(cors());
server.use(express.json());

// Aquí sirves los archivos estáticos globalmente
server.use(express.static('public'));

server.use('/project', projectRoutes); //girlflix instead of project

server.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
})





