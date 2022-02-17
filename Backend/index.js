const express = require('express');
const bodyParser = require('body-parser');


const apiRouter = require('./routes/api');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', apiRouter);


app.listen(5000, ()=>{
    console.log(`Servidor arrancado en el puerto 5000`)
})