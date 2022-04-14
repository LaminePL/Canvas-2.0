var dbConn = require('../../config/db.config');


var Campus = function(campus) {
    this.campus_name = campus.campus_name;
}


//get all campuss
Campus.getAllCampuss = (data)=> {
    dbConn.query("SELECT * FROM campus", (err, res)=>{
        if(err){
            console.log('Error fetching campus :', err);
            data(null,err); 
        }else{
            console.log('Campus fetched successfully');
            data(null,res);
        }

    })
}

//get campus by ID
Campus.getCampusByID = (id, data)=>{
    dbConn.query("SELECT * FROM campus WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching campus with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new campus
Campus.createCampus = (campusReqData, result)=>{
    dbConn.query("INSERT INTO campus SET ?", campusReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Campus created successfully');
            result(null, res)
        }
    })

}

//update campus
Campus.updateCampus = (id, campusReqData, result) => {
    dbConn.query("UPDATE campus SET campus_name=? WHERE id=?", [campusReqData.campus_name, id], (err, res)=>{
      if(err){
              console.log('Error updating data');
              result(null, err);
          }else{
              console.log('Campus updated successfully');
              result(null, res)
          }
    })
  }
  
  //delete campus
  Campus.deleteCampus = (id, result) => {
    dbConn.query("DELETE FROM campus WHERE id=?", id, (err, res)=>{
      if(err){
              console.log('Error deleting data');
              result(null, err);
          }else{
              console.log('Campus deleted successfully');
              result(null, res)
          }
    })
  }
  
 module.exports = Campus;