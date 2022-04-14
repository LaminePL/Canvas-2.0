var dbConn = require('../../config/db.config');


var Role = function(role) {
    this.role_name = role.role_name;
}


//get all roles
Role.getAllRoles = (data)=> {
    dbConn.query("SELECT * FROM roles", (err, res)=>{
        if(err){
            console.log('Error fetching role :', err);
            data(null,err); 
        }else{
            console.log('Role fetched successfully');
            data(null,res);
        }

    })
}

//get role by ID
Role.getRoleByID = (id, data)=>{
    dbConn.query("SELECT * FROM roles WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching role with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new role
Role.createRole = (roleReqData, result)=>{
    dbConn.query("INSERT INTO roles SET ?", roleReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Role created successfully');
            result(null, res)
        }
    })

}

//update role
Role.updateRole = (id, roleReqData, result) => {
    dbConn.query("UPDATE roles SET role_name=? WHERE id=?", [roleReqData.role_name, id], (err, res)=>{
      if(err){
              console.log('Error updating data');
              result(null, err);
          }else{
              console.log('Role updated successfully');
              result(null, res)
          }
    })
  }
  
  //delete role
  Role.deleteRole = (id, result) => {
    dbConn.query("DELETE FROM roles WHERE id=?", id, (err, res)=>{
      if(err){
              console.log('Error deleting data');
              result(null, err);
          }else{
              console.log('Role deleted successfully');
              result(null, res)
          }
    })
  }
  
 module.exports = Role;