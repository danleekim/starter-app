const express = require('express');
const app = express(); 
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/', function (req, res, next){
    // console.log('working test');
    res.status(200).json(req.body);
});

app.listen(8080, () => {
    console.log('server started');
});