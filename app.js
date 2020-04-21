//importing set of packages
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //body-parser used to get form data

//setting boy-parser form-data limit 
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));
//running the route

module.exports = app;