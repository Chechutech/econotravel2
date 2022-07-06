import  pool from './database'


const getExperiencias = async () => {
  const queryExp = 'SELECT * FROM experiencias;'
  const result = await pool.query(queryExp);
  return result.rows
};

export default  getExperiencias ;