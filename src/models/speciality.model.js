var dbConn = require('../../config/db.config');


var Speciality = function(speciality) {
    this.speciality_name = speciality.name_spec;
}


//get all specialitys
Speciality.getAllSpecialities = (data)=> {
    dbConn.query("SELECT * FROM speciality", (err, res)=>{
        if(err){
            console.log('Error fetching speciality :', err);
            data(null,err); 
        }else{
            console.log('Speciality fetched successfully');
            data(null,res);
        }

    })
}

//get speciality by ID
Speciality.getSpecialityByID = (id, data)=>{
    dbConn.query("SELECT * FROM speciality WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching speciality with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new speciality
Speciality.createSpeciality = (specialityReqData, result)=>{
    dbConn.query("INSERT INTO speciality SET ?", specialityReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Speciality created successfully');
            result(null, res)
        }
    })

}

//update speciality
Speciality.updateSpeciality = (id, specialityReqData, result) => {
    dbConn.query("UPDATE speciality SET name_spec=? WHERE id=?", [specialityReqData.speciality_name, id], (err, res)=>{
      if(err){
              console.log('Error updating data');
              result(null, err);
          }else{
              console.log('Speciality updated successfully');
              result(null, res)
          }
    })
  }
  
  //delete speciality
  Speciality.deleteSpeciality = (id, result) => {
    dbConn.query("DELETE FROM speciality WHERE id=?", id, (err, res)=>{
      if(err){
              console.log('Error deleting data');
              result(null, err);
          }else{
              console.log('Speciality deleted successfully');
              result(null, res)
          }
    })
  }
  
  module.exports = Speciality;