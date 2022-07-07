import { Pool, Client } from 'pg';
const pool = new Pool()

export const getExperiencias = async () => {
    const res = await pool.query('SELECT * FROM experiencias')
    return res.rows
};