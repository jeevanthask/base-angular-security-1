const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000

const app = express()

app.use(bodyParser.json())

app.get('/',(req,res) => {
    res.send('welcome all guys')
})

app.listen(PORT,() => console.log('listening in port 3000'))

