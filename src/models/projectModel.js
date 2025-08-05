const connection = require("./db/connection.js");

async function getAll() {
const conn = await connection.getConnection();
const [rows] = await conn.query('SELECT * from obras');
return rows;
};

module.exports = { getAll };