var dbConn = require('../../config/db.config');


var Compta = function(compta) {
    this.id_student = compta.id_student;
    this.compta_payment_type = compta.compta_payment_type;
    this.compta_paid = compta.compta_paid;
    this.compta_payment_due = compta.compta_payment_due;
    this.compta_relance = compta.compta_relance;
}


//get all comptas
Compta.getAllComptas = (data)=> {
    dbConn.query("SELECT * FROM compta", (err, res)=>{
        if(err){
            console.log('Error fetching compta :', err);
            data(null,err); 
        }else{
            console.log('Compta fetched successfully');
            data(null,res);
        }

    })
}

//get compta by ID
Compta.getComptaByID = (id, data)=>{
    dbConn.query("SELECT * FROM compta WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching compta with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new compta
Compta.createCompta = (comptaReqData, result)=>{
    dbConn.query("INSERT INTO compta SET ?", comptaReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Compta created successfully');
            result(null, res)
        }
    })

}

//update compta
Compta.updateCompta = (id, comptaReqData, result) => {
    dbConn.query("UPDATE compta SET compta_payment_type=?, compta_paid=?, compta_payment_due=?, compta_relance=? WHERE id=?", [comptaReqData.compta_payment_type, comptaReqData.compta_paid, comptaReqData.compta_payment_due, comptaReqData.compta_relance, id], (err, res)=>{
      if(err){
              console.log('Error updating data');
              result(null, err);
          }else{
              console.log('Compta updated successfully');
              result(null, res)
          }
    })
  }
  
  //delete compta
  Compta.deleteCompta = (id, result) => {
    dbConn.query("DELETE FROM compta WHERE id=?", id, (err, res)=>{
      if(err){
              console.log('Error deleting data');
              result(null, err);
          }else{
              console.log('Compta deleted successfully');
              result(null, res)
          }
    })
  }
  
 module.exports = Compta;