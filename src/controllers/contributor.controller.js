const ContributorModel = require('../models/contributor.model');


//get contributors list
exports.getContributorList = (req, res) => {
  console.log("List of Contributor:")
  ContributorModel.getAllContributor((err, contributor) => {
    console.log("Contributor")
    if (err)
      res.send(err);
    console.log('Contributor: ', contributor);
    res.send(contributor);
  });
}

//get contributor by id
exports.getContributorByID = (req, res)=>{
    console.log('Get Contributor by ID ');
    ContributorModel.getContributorByID(req.params.id, (err, contributor)=>{
        if(err)
        res.send(err);
        console.log('Contributor', contributor);
        res.send(contributor);
    })
}


//create contributor
exports.createNewContributor = (req, res)=>{
    console.log('req data', req.body);
    const contributorReqData = new ContributorModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        ContributorModel.createContributor(contributorReqData, (err, contributor)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'Contributor added successfully', data: contributor});
        })

    }
}

// update contributor
exports.updateContributor = (req, res) => {
    console.log('req data update', req.body);
    const contributorReqData = new ContributorModel(req.body);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: 'Please fill all fields' });
  
    } else {
      console.log('Valid data');
      ContributorModel.updateContributor(req.params.id, contributorReqData, (err, contributor) => {
        if (err)
          res.send(err);
        res.json({ status: true, message: 'Contributor updated successfully', data: contributor });
      })
  
    }
  }
  
  //delete contributor
  exports.deleteContributor = (req,res) => {
    contributorModel.deleteContributor(req.params.id, (err, contributor)=>{
      if(err)
        res.send(err);
      res.json({success: true, message: 'Contributor deleted successfully'});
    })
  }
  