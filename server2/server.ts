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














<<<<<<< HEAD
app.listen(3000) 
console.log('server listening on port 3000')


=======
>>>>>>> bbbe33b0119b4b34dd9fdc84790b935b2fb8a9f3
