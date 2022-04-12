var dbConn = require('../../config/db.config');


var Module = function(module) {
    this.module_name = module.module_name;
}


//get all modules
Module.getAllModules = (data)=> {
    dbConn.query("SELECT * FROM modules", (err, res)=>{
        if(err){
            console.log('Error fetching modules :', err);
            data(null,err); 
        }else{
            console.log('Modules fetched successfully');
            data(null,res);
        }

    })
}

//get module by ID
Module.getModuleByID = (id, data)=>{
    dbConn.query("SELECT * FROM module WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching module with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new module
Module.createModule = (moduleReqData, result)=>{
    dbConn.query("INSERT INTO modules SET ?", moduleReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Module created successfully');
            result(null, res)
        }
    })

}

//update module
Module.updateModule = (id, moduleReqData, result) => {
    dbConn.query("UPDATE modules SET module_name=? WHERE id=?", [moduleReqData.module_name, id], (err, res)=>{
      if(err){
              console.log('Error updating data');
              result(null, err);
          }else{
              console.log('Module updated successfully');
              result(null, res)
          }
    })
  }
  
  //delete module
  Module.deleteModule = (id, result) => {
    dbConn.query("DELETE FROM modules WHERE id=?", id, (err, res)=>{
      if(err){
              console.log('Error deleting data');
              result(null, err);
          }else{
              console.log('Module deleted successfully');
              result(null, res)
          }
    })
  }
  
  module.exports = Module;