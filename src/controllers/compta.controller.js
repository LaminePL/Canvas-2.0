const ComptaModel = require('../models/compta.model');


//get comptas list
exports.getComptaList = (req, res) => {
  console.log("List of Compta:")
  ComptaModel.getAllCompta((err, compta) => {
    console.log("Compta")
    if (err)
      res.send(err);
    console.log('Compta: ', compta);
    res.send(compta);
  });
}

//get compta by id
exports.getComptaByID = (req, res)=>{
    console.log('Get Compta by ID ');
    ComptaModel.getComptaByID(req.params.id, (err, compta)=>{
        if(err)
        res.send(err);
        console.log('Compta', compta);
        res.send(compta);
    })
}


//create compta
exports.createNewCompta = (req, res)=>{
    console.log('req data', req.body);
    const comptaReqData = new ComptaModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        ComptaModel.createCompta(comptaReqData, (err, compta)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'Compta added successfully', data: compta});
        })

    }
}

// update compta
exports.updateCompta = (req, res) => {
    console.log('req data update', req.body);
    const comptaReqData = new ComptaModel(req.body);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: 'Please fill all fields' });
  
    } else {
      console.log('Valid data');
      ComptaModel.updateCompta(req.params.id, comptaReqData, (err, compta) => {
        if (err)
          res.send(err);
        res.json({ status: true, message: 'Compta updated successfully', data: compta });
      })
  
    }
  }
  
  //delete compta
  exports.deleteCompta = (req,res) => {
    comptaModel.deleteCompta(req.params.id, (err, compta)=>{
      if(err)
        res.send(err);
      res.json({success: true, message: 'Compta deleted successfully'});
    })
  }
  