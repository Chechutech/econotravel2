import  pool from './database'



export const getExperiencias = async () => {
  const queryExp = 'SELECT * FROM experiencias;'
  const result = await pool.query(queryExp);
  return  result.rows
};




export const deleteExperiencias = async (id: number) => {
  const queryExp = `
  DELETE FROM experiencias WHERE id_experiencias = $1 returning *;`
  const result = await pool.query(queryExp, [id]);
  console.log(result.rows[0])
  return result.rows[0]
};

