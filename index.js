//bring in express
const express = require('express');
//use path to serve up static files
const path = require('path');
const app = express(); 
//to handle json body
const bodyParser = require('body-parser');
const mongoose= require('mongoose');

//set the port 
const port = process.env.PORT || 8080;

// mpromise is depreciated, use native es6 Promise
mongoose.Promise = global.Promise;

// mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost:27017')
mongoose.connect((process.env.MONGODB_URL || 'mongodb://localhost:27017'), {useMongoClient: true})

// If the Node process ends, close the Mongoose connection
// see: http://theholmesoffice.com/mongoose-connection-best-practice/
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination')
        process.exit(0)
    })
});


app.use(bodyParser.json());

app.use(require('./app/routes/routes'));

app.use(
    '/public', 
    express.static(path.join(__dirname, 'public'),
    {fallthrough: false}
    )
);

app.listen(port, () => {
    console.log(`Something is happening at port: ${port}`)
})