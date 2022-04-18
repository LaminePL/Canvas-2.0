const RoleModel = require('../models/role.model');


//get roles list
exports.getRoleList = (req, res) => {
  console.log("List of Role:")
  RoleModel.getAllRole((err, roles) => {
    console.log("Role")
    if (err)
      res.send(err);
    console.log('Role: ', roles);
    res.send(roles);
  });
}

//get role by id
exports.getRoleByID = (req, res)=>{
    console.log('Get Role by ID ');
    RoleModel.getRoleByID(req.params.id, (err, role)=>{
        if(err)
        res.send(err);
        console.log('Role', role);
        res.send(role);
    })
}


//create role
exports.createNewRole = (req, res)=>{
    console.log('req data', req.body);
    const roleReqData = new RoleModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        RoleModel.createRole(roleReqData, (err, role)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'Role added successfully', data: role});
        })

    }
}

// update role
exports.updateRole = (req, res) => {
    console.log('req data update', req.body);
    const roleReqData = new RoleModel(req.body);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: 'Please fill all fields' });
  
    } else {
      console.log('Valid data');
      RoleModel.updateRole(req.params.id, roleReqData, (err, role) => {
        if (err)
          res.send(err);
        res.json({ status: true, message: 'Role updated successfully', data: role });
      })
  
    }
  }
  
  //delete role
  exports.deleteRole = (req,res) => {
    roleModel.deleteRole(req.params.id, (err, role)=>{
      if(err)
        res.send(err);
      res.json({success: true, message: 'Role deleted successfully'});
    })
  }
  