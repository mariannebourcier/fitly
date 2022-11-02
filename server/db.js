const Pool = require("pg").Pool;

let dbParams = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
}

const pool = new Pool(dbParams);

