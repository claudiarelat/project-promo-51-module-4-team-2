const connection = require("../db/connection");

async function getAll() {
const conn = await connection.getConnection();
const [rows] = await conn.query('SELECT * from OBRAS');
return rows;
};


// Add a new project to the database
async function addMovie(projectData) {
    const { titulo_obra, link_reseñas, link_plataforma, genero, sinopsis, imagen_obra } = projectData;
   
    const sql = 'INSERT INTO OBRAS (titulo_obra, link_reseñas, link_plataforma, genero, sinopsis, imagen_obra) VALUES (?, ?, ?, ?, ?, ?)';
    const conn = await connection.getConnection();
    try {
      const [result] = await conn.execute(sql, [titulo_obra, link_reseñas, link_plataforma, genero, sinopsis, imagen_obra]);
      return result.insertId; // or return result if you want more info
    } catch (error) {
        console.error('Error al crear la peli:', error);
        res.status(500).json({
          success: false,
          message: 'Error al crear la peli'
        });
      }
  }

  async function getById(id) {
    const conn = await connection.getConnection();
    const sql = "SELECT * FROM OBRAS WHERE id = ?";
    const [rows] = await conn.query(sql, [id]); //rows array con todas las filas encontradas
    return rows[0]; // una única obra (o undefined si no existe) 0 par aque devuelva la primera fila que encuentres
  }
  
  module.exports = { getAll, addMovie, getById };
  