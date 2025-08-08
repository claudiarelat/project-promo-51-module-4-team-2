const connection = require("../db/connection");

async function getAll() {
const conn = await connection.getConnection();
const [rows] = await conn.query('SELECT OBRAS.*, nombre_personaje, rol_personaje, frase_estrella, imagen_personaje from OBRAS LEFT JOIN PERSONAJES ON OBRAS.id = PERSONAJES.obra_id');
return rows;
};


// Añadir una obra y su único personaje
async function addMovie(projectData) {
  const {
    titulo_obra,
    link_reseñas,
    link_plataforma,
    genero,
    sinopsis,
    imagen_obra,
    nombre_personaje,
    rol_personaje,
    frase_estrella,
    imagen_personaje
  } = projectData;

  const sqlObra = 'INSERT INTO OBRAS (titulo_obra, link_reseñas, link_plataforma, genero, sinopsis, imagen_obra) VALUES (?, ?, ?, ?, ?, ?)';
  const sqlPersonaje = 'INSERT INTO PERSONAJES (nombre_personaje, rol_personaje, frase_estrella, imagen_personaje, obra_id) VALUES (?, ?, ?, ?, ?)';

  const conn = await connection.getConnection();

  try {
    // Insertar obra y obtener id
    const [result] = await conn.execute(sqlObra, [titulo_obra, link_reseñas, link_plataforma, genero, sinopsis, imagen_obra]);
    const obraId = result.insertId;

    // Insertar personaje con obraId
    await conn.execute(sqlPersonaje, [nombre_personaje, rol_personaje, frase_estrella, imagen_personaje, obraId]);

    return obraId;
  } catch (error) {
        console.error('Error al crear la peli:', error);
        throw error;
      }
}

module.exports = { getAll, addMovie };