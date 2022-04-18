const Contrat_proModel = require('../models/contrat_pro.model');


//get contrat_pros list
exports.getContrat_proList = (req, res) => {
  console.log("List of Contrat_pro:")
  Contrat_proModel.getAllContrat_pro((err, contrat_pro) => {
    console.log("Contrat_pro")
    if (err)
      res.send(err);
    console.log('Contrat_pro: ', contrat_pro);
    res.send(contrat_pro);
  });
}

//get contrat_pro by id
exports.getContrat_proByID = (req, res)=>{
    console.log('Get Contrat_pro by ID ');
    Contrat_proModel.getContrat_proByID(req.params.id, (err, contrat_pro)=>{
        if(err)
        res.send(err);
        console.log('Contrat_pro', contrat_pro);
        res.send(contrat_pro);
    })
}


//create contrat_pro
exports.createNewContrat_pro = (req, res)=>{
    console.log('req data', req.body);
    const contrat_proReqData = new Contrat_proModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        Contrat_proModel.createContrat_pro(contrat_proReqData, (err, contrat_pro)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'Contrat_pro added successfully', data: contrat_pro});
        })

    }
}

// update contrat_pro
exports.updateContrat_pro = (req, res) => {
    console.log('req data update', req.body);
    const contrat_proReqData = new Contrat_proModel(req.body);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: 'Please fill all fields' });
  
    } else {
      console.log('Valid data');
      Contrat_proModel.updateContrat_pro(req.params.id, contrat_proReqData, (err, contrat_pro) => {
        if (err)
          res.send(err);
        res.json({ status: true, message: 'Contrat_pro updated successfully', data: contrat_pro });
      })
  
    }
  }
  
  //delete contrat_pro
  exports.deleteContrat_pro = (req,res) => {
    contrat_proModel.deleteContrat_pro(req.params.id, (err, contrat_pro)=>{
      if(err)
        res.send(err);
      res.json({success: true, message: 'Contrat_pro deleted successfully'});
    })
  }
  