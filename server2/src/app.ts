import express, {Request,Response} from 'express';
import  router  from './route/expRoute';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(router);






export default app;

