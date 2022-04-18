const HiringModel = require('../models/hiring.model');


//get hirings list
exports.getHiringList = (req, res) => {
  console.log("List of Hiring:")
  HiringModel.getAllHiring((err, hiring) => {
    console.log("Hiring")
    if (err)
      res.send(err);
    console.log('Hiring: ', hiring);
    res.send(hiring);
  });
}

//get hiring by id
exports.getHiringByID = (req, res)=>{
    console.log('Get Hiring by ID ');
    HiringModel.getHiringByID(req.params.id, (err, hiring)=>{
        if(err)
        res.send(err);
        console.log('Hiring', hiring);
        res.send(hiring);
    })
}


//create hiring
exports.createNewHiring = (req, res)=>{
    console.log('req data', req.body);
    const hiringReqData = new HiringModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        HiringModel.createHiring(hiringReqData, (err, hiring)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'Hiring added successfully', data: hiring});
        })

    }
}

// update hiring
exports.updateHiring = (req, res) => {
    console.log('req data update', req.body);
    const hiringReqData = new HiringModel(req.body);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: 'Please fill all fields' });
  
    } else {
      console.log('Valid data');
      HiringModel.updateHiring(req.params.id, hiringReqData, (err, hiring) => {
        if (err)
          res.send(err);
        res.json({ status: true, message: 'Hiring updated successfully', data: hiring });
      })
  
    }
  }
  
  //delete hiring
  exports.deleteHiring = (req,res) => {
    hiringModel.deleteHiring(req.params.id, (err, hiring)=>{
      if(err)
        res.send(err);
      res.json({success: true, message: 'Hiring deleted successfully'});
    })
  }
  