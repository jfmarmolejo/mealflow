'use strict'
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const lambdaCheck = require('./backend/lambdas/src/checker')

app.get('/', (req, res)=>{
    res.send('Home API')
})

app.get('/api', async (req, res)=>{
    try{
        const lambdaResponse = await lambdaCheck.handler('Greetings.')
        res.json(lambdaResponse) 
    } catch(err){
        res.send(`Lambda error: ${err.message}`) 
    }
})

app.listen(3001, ()=>{
    console.log(`Server listen at http://localhost:3001`)
})
