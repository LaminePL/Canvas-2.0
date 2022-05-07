var dbConn = require('../../config/db.config');


var Hiring = function(hiring) {
    this.id_student = hiring.id_student;
    this.lenght_month_hired = hiring.lenght_month_hired;
    this.company_hired = hiring.company_hired;
}


//get all hirings
Hiring.getAllHirings = (data)=> {
    dbConn.query("SELECT * FROM hiring", (err, res)=>{
        if(err){
            console.log('Error fetching hiring :', err);
            data(null,err); 
        }else{
            console.log('Hiring fetched successfully');
            data(null,res);
        }

    })
}

//get hiring by ID
Hiring.getHiringByID = (id, data)=>{
    dbConn.query("SELECT * FROM hiring WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching hiring with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new hiring
Hiring.createHiring = (hiringReqData, result)=>{
    dbConn.query("INSERT INTO hiring SET ?", hiringReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Hiring created successfully');
            result(null, res)
        }
    })

}

//update hiring
Hiring.updateHiring = (id, hiringReqData, result) => {
    dbConn.query("UPDATE hiring SET lenght_month_hired=?, company_hired=? WHERE id=?", [hiringReqData.lenght_month_hired, hiringReqData.company_hired, id], (err, res)=>{
      if(err){
              console.log('Error updating data');
              result(null, err);
          }else{
              console.log('Hiring updated successfully');
              result(null, res)
          }
    })
  }
  
  //delete hiring
  Hiring.deleteHiring = (id, result) => {
    dbConn.query("DELETE FROM hiring WHERE id=?", id, (err, res)=>{
      if(err){
              console.log('Error deleting data');
              result(null, err);
          }else{
              console.log('Hiring deleted successfully');
              result(null, res)
          }
    })
  }
  
 module.exports = Hiring;