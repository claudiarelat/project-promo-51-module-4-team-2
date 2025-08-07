const connection = require("../db/connection");

async function getAll() {
const conn = await connection.getConnection();
const [rows] = await conn.query('SELECT * from OBRAS');
return rows;
};

module.exports = { getAll };