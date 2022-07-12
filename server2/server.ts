import express from 'express';
import  router  from './route/expRoute';
import cors from 'cors';
import dotenv from 'dotenv'; 

//const experienciaLista = require('./controller/getExperiencias')

 dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use(router);


app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});














