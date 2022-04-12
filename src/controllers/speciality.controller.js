

const SpecialityModel = require('../models/speciality.model');


//get specialitys list
exports.getSpecialityList = (req,res)=>{
    console.log("List of Specialities:")
    SpecialityModel.getAllSpecialities((err, specialities) => {
        console.log("Specialities")
        if(err)
        res.send(err);
        console.log('Specialities: ', specialities);
        res.send(specialities);
    });
}

//get speciality by id
exports.getSpecialityByID = (req, res)=>{
    console.log('Get speciality by ID ');
    SpecialityModel.getSpecialityByID(req.params.id, (err, speciality)=>{
        if(err)
        res.send(err);
        console.log('Speciality', speciality);
        res.send(speciality);
    })
}


//create speciality
exports.createNewSpeciality = (req, res)=>{
    console.log('req data', req.body);
    const specialityReqData = new SpecialityModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        SpecialityModel.createSpeciality(specialityReqData, (err, speciality)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'Speciality added successfully', data: speciality});
        })

    }
}

// update speciality
exports.updateSpeciality = (req, res) => {
    console.log('req data update', req.body);
    const specialityReqData = new SpecialityModel(req.body);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: 'Please fill all fields' });
  
    } else {
      console.log('Valid data');
      SpecialityModel.updateSpeciality(req.params.id, specialityReqData, (err, speciality) => {
        if (err)
          res.send(err);
        res.json({ status: true, message: 'Speciality updated successfully', data: speciality });
      })
  
    }
  }
  
  //delete speciality
  exports.deleteSpeciality = (req,res) => {
    SpecialityModel.deleteSpeciality(req.params.id, (err, speciality)=>{
      if(err)
        res.send(err);
      res.json({success: true, message: 'speciality deleted successfully'});
    })
  }