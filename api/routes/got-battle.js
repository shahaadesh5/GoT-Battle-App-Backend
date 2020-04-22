const express = require('express');
const router = express.Router();
//importing the BattleModel schema defined in the model
const battleModel = require('../models/got-battle');


//route to get all users from the database
router.get('/battles', (req, res, next)=>{
    battleModel.find()
    .exec()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });
});

//exporting the routes
module.exports = router;
