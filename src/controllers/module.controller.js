const ModuleModel = require('../models/module.model');


//get modules list
exports.getModuleList = (req, res) => {
  console.log("List of Modules:")
  ModuleModel.getAllModules((err, modules) => {
    console.log("Modules")
    if (err)
      res.send(err);
    console.log('Modules: ', modules);
    res.send(modules);
  });
}

//get module by id
exports.getModuleByID = (req, res)=>{
    console.log('Get Module by ID ');
    ModuleModel.getModuleByID(req.params.id, (err, module)=>{
        if(err)
        res.send(err);
        console.log('Module', module);
        res.send(module);
    })
}


//create module
exports.createNewModule = (req, res)=>{
    console.log('req data', req.body);
    const moduleReqData = new ModuleModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        ModuleModel.createModule(moduleReqData, (err, module)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'Module added successfully', data: module});
        })

    }
}

// update module
exports.updateModule = (req, res) => {
    console.log('req data update', req.body);
    const moduleReqData = new ModuleModel(req.body);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: 'Please fill all fields' });
  
    } else {
      console.log('Valid data');
      ModuleModel.updateModule(req.params.id, moduleReqData, (err, module) => {
        if (err)
          res.send(err);
        res.json({ status: true, message: 'Module updated successfully', data: module });
      })
  
    }
  }
  
  //delete module
  exports.deleteModule = (req,res) => {
    moduleModel.deleteModule(req.params.id, (err, module)=>{
      if(err)
        res.send(err);
      res.json({success: true, message: 'Module deleted successfully'});
    })
  }
  