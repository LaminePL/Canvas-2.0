const LevelModel = require('../models/level.model');


//get levels list
exports.getLevelList = (req, res) => {
  console.log("List of Level:")
  LevelModel.getAllLevel((err, levels) => {
    console.log("Level")
    if (err)
      res.send(err);
    console.log('Level: ', levels);
    res.send(levels);
  });
}

//get level by id
exports.getLevelByID = (req, res)=>{
    console.log('Get Level by ID ');
    LevelModel.getLevelByID(req.params.id, (err, level)=>{
        if(err)
        res.send(err);
        console.log('Level', level);
        res.send(level);
    })
}


//create level
exports.createNewLevel = (req, res)=>{
    console.log('req data', req.body);
    const levelReqData = new LevelModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        LevelModel.createLevel(levelReqData, (err, level)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'Level added successfully', data: level});
        })

    }
}

// update level
exports.updateLevel = (req, res) => {
    console.log('req data update', req.body);
    const levelReqData = new LevelModel(req.body);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: 'Please fill all fields' });
  
    } else {
      console.log('Valid data');
      LevelModel.updateLevel(req.params.id, levelReqData, (err, level) => {
        if (err)
          res.send(err);
        res.json({ status: true, message: 'Level updated successfully', data: level });
      })
  
    }
  }
  
  //delete level
  exports.deleteLevel = (req,res) => {
    levelModel.deleteLevel(req.params.id, (err, level)=>{
      if(err)
        res.send(err);
      res.json({success: true, message: 'Level deleted successfully'});
    })
  }
  