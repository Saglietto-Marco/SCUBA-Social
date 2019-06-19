const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/api');

//middleware
app.use(bodyParser.json());

//api routes
app.use('/api',routes);

// May not need urlEncoded
// app.use(bodyParser.urlencoded({extended: true}));

const port = 4000;
app.listen(port, function(){
    console.log(`listening on port: ${port}`);
});