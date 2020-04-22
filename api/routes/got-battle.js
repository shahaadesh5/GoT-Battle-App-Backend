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

router.get('/list',(req,res,next)=>{
    battleModel.find({}).select("location -_id")
    .exec()
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})
router.get('/count',(req,res,next)=>{
    battleModel.find().count()
    .exec()
    .then(count=>{
        res.status(200).json({
            "BattleCount": count
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        })
    })
})

router.get('/search', (req,res,next)=>{
    battleModel.find({$or: [
        {attacker_king: req.query.king},
        {location: req.query.location},
        {defender_king: req.query.king},
        {battle_type: req.query.type}
    ]})
    .exec()
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(error=>{
        console.log(error);
        res.status(500).json({
            error: error
        })
    })
})

//exporting the routes
module.exports = router;
