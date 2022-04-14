const CampusModel = require('../models/campus.model');


//get campuss list
exports.getCampusList = (req, res) => {
  console.log("List of Campus:")
  CampusModel.getAllCampus((err, campus) => {
    console.log("Campus")
    if (err)
      res.send(err);
    console.log('Campus: ', campus);
    res.send(campus);
  });
}

//get campus by id
exports.getCampusByID = (req, res)=>{
    console.log('Get Campus by ID ');
    CampusModel.getCampusByID(req.params.id, (err, campus)=>{
        if(err)
        res.send(err);
        console.log('Campus', campus);
        res.send(campus);
    })
}


//create campus
exports.createNewCampus = (req, res)=>{
    console.log('req data', req.body);
    const campusReqData = new CampusModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        CampusModel.createCampus(campusReqData, (err, campus)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'Campus added successfully', data: campus});
        })

    }
}

// update campus
exports.updateCampus = (req, res) => {
    console.log('req data update', req.body);
    const campusReqData = new CampusModel(req.body);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: 'Please fill all fields' });
  
    } else {
      console.log('Valid data');
      CampusModel.updateCampus(req.params.id, campusReqData, (err, campus) => {
        if (err)
          res.send(err);
        res.json({ status: true, message: 'Campus updated successfully', data: campus });
      })
  
    }
  }
  
  //delete campus
  exports.deleteCampus = (req,res) => {
    campusModel.deleteCampus(req.params.id, (err, campus)=>{
      if(err)
        res.send(err);
      res.json({success: true, message: 'Campus deleted successfully'});
    })
  }
  