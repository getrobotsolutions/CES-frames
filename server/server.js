var dir ="D:\\Furoware\\Contents\\lax-furo"
var dir = "Z:\\work\\ars\\Furoware\\Contents\\CES"
var path = require('path');

const express = require('express')
const app = express()
var morgan = require('morgan')


app.use(morgan('tiny'))

app.use(express.static(path.resolve(dir)))
app.listen(3080, () => console.log('Example app listening on port 3080!'))