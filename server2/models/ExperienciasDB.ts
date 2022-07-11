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

export type Experiencia = {
  precio: number,
  ubicacion: string
}

export const updateExperiencias = async (id: number, experiencia: Experiencia) => {
  const {precio, ubicacion} = experiencia
  const queryExp = `
    UPDATE experiencias SET
      precio = $2,
      ubicacion = $3
    WHERE id_experiencias = $1 returning *;`
  const result = await pool.query(queryExp, [id, precio, ubicacion]);
  return result.rows[0]
};
