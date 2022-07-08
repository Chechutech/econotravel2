import dotenv from 'dotenv'
import router from './route/expRoute'
import express from 'express'
import cors from 'cors'

dotenv.config();

// pools will use environment variables
// for connection information

const app = express()
const port = process.env.PORT || 8000

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log('listening on http://localhost:${port}');
})
