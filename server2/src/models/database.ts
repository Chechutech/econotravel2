import { Pool } from 'pg';
import dotenv from 'dotenv'; 
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

export default pool;








/*const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'econotravel',
  password: 'Ordenando',
  port: 5432,
  idleTimeoutMillis: 0,
  connectionTimeoutMillis: 0

});

module.exports = pool;*/