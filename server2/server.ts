import "dotenv/config"
import express from 'express'

import { getExperiencias } from "./database"

// pools will use environment variables
// for connection information

const app = express()

app.get('/experiencias', async (request:any, response:any) =>{
    response.json(await getExperiencias())
})

app.listen(3000) 
console.log('server listening on port 3000')