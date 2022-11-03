const Pool = require("pg").Pool;

let dbParams = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  host: process.env.DB_HOST
}

const pool = new Pool(dbParams);

module.exports = pool;