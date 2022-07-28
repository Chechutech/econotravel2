import pool from './database'
  

export const getUser = async () => {
  const queryUser = 'SELECT * FROM usuarios;'
  const result = await pool.query(queryUser);
  console.log(result.rows);
  return result.rows;
};

export type User = {
  email: string,
  password: string
}
  
export const postUser = async (email:string, password:string ) => {
  console.log(email, password);
  const queryUser = `INSERT INTO usuarios(email, password) values ($1, $2) returning email`
 
  const result = await pool.query(queryUser, [email, password]);
  //console.log(result.rows)
  return result.rows[0];
}

// login y register
export const selectUser = async (email:string) => {
//const {email, password} = usuario
  const queryUser = `SELECT * FROM  usuarios WHERE email = $1`
 
  const result = await pool.query(queryUser, [email]);
  console.log(result.rows)
  return result.rows[0];
}

