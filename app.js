//importing set of packages
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser'); //body-parser used to get form data
const apiRoute = require('./api/routes/got-battle');
require('dotenv').config();

//setting boy-parser form-data limit 
app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({limit: '5mb', extended: true}));

//creating connection with MongoDB Atlas database
mongoose.connect(process.env.DB,{ useNewUrlParser: true},(err,db)=>{
    if(!err){
        console.log("Connected to database");
    }
});


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      if(req.method === 'OPTIONS'){
          res.header('Access-Control-Allow-Methods', 'PUT,POST, PATCH, DELETE');
          return res.status(200).json({}); 
      }
      next();
});

//running the route

app.use('/got-api', apiRoute);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      if(req.method === 'OPTIONS'){
          res.header('Access-Control-Allow-Methods', 'PUT,POST, PATCH, DELETE');
          return res.status(200).json({}); 
      }
      next();
});

module.exports = app;
