const express = require('express')
const app = express()
const port = 3000
const { lab5} = require('./lab5');

app.get('/', (req, res) => res.send('Hello World!'))

lab5();
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))