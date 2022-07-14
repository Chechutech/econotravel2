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

export const insertExperiencias = async (experiencia:Experiencia) => {
  const {id_experiencias, titulo, descripcion, precio, ubicacion, transporte, duracion, accesibilidad, tiempo_duracion, img_url} = experiencia
  const queryExp = `INSERT INTO experiencias (id_experiencias,
    titulo,
    descripcion,
    precio,
    ubicacion,
    transporte,
    duracion,
    accesibilidad,
    tiempo_duracion,
    img_url )
    VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
    RETURNING *`
  const result = await pool.query(queryExp, [id_experiencias, titulo, descripcion, precio, ubicacion, transporte, duracion, accesibilidad, tiempo_duracion, img_url]);
  console.log(result.rows[0])
  return result.rows[0]
};

export type Experiencia = {
  id_experiencias:number,
  titulo:string,
  descripcion:string,
  precio: number,
  ubicacion: string,
  transporte:string,
  duracion:string,
  accesibilidad:string,
  tiempo_duracion:string,
  img_url:string
}

export const updateExperiencias = async (id: number, experiencia: Experiencia) => {
  const {titulo, descripcion, precio, ubicacion, transporte, duracion, accesibilidad, tiempo_duracion, img_url} = experiencia
  const queryExp = `
    UPDATE experiencias SET
    titulo = $2,
    descripcion = $3,
    precio = $4,
    ubicacion = $5,
    transporte = $6,
    duracion = $7,
    accesibilidad = $8,
    tiempo_duracion = $9,
    img_url = $10
    WHERE id_experiencias = $1 returning *;`
  const result = await pool.query(queryExp, [id, titulo, descripcion, precio, ubicacion, transporte, duracion, accesibilidad, tiempo_duracion, img_url]);
  return result.rows[0]
};
