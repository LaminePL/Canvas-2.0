var dbConn = require('../../config/db.config');


var Contrat_pro = function(contrat_pro) {
    this.id_student = contrat_pro.id_student;
    this.company_name = contrat_pro.company_name;
    this.company_adress = contrat_pro.company_adress;
    this.post_occupation = contrat_pro.post_occupation;
    this.activity_sector = contrat_pro.activity_sector;
    this.start_date = contrat_pro.start_date;
}


//get all contrat_pros
Contrat_pro.getAllContrat_pros = (data)=> {
    dbConn.query("SELECT * FROM contrat_pro", (err, res)=>{
        if(err){
            console.log('Error fetching contrat_pro :', err);
            data(null,err); 
        }else{
            console.log('Contrat_pro fetched successfully');
            data(null,res);
        }

    })
}

//get contrat_pro by ID
Contrat_pro.getContrat_proByID = (id, data)=>{
    dbConn.query("SELECT * FROM contrat_pro WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching contrat_pro with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new contrat_pro
Contrat_pro.createContrat_pro = (contrat_proReqData, result)=>{
    dbConn.query("INSERT INTO contrat_pro SET ?", contrat_proReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Contrat_pro created successfully');
            result(null, res)
        }
    })

}

//update contrat_pro
Contrat_pro.updateContrat_pro = (id, contrat_proReqData, result) => {
    dbConn.query("UPDATE contrat_pro SET company_name=?, company_adress=?, post_occupation=?, activity_sector=?, start_date=? WHERE id=?", [contrat_proReqData.company_name, contrat_proReqData.company_adress, contrat_proReqData.post_occupation, contrat_proReqData.activity_sector, contrat_proReqData.start_date, id], (err, res)=>{
      if(err){
              console.log('Error updating data');
              result(null, err);
          }else{
              console.log('Contrat_pro updated successfully');
              result(null, res)
          }
    })
  }
  
  //delete contrat_pro
  Contrat_pro.deleteContrat_pro = (id, result) => {
    dbConn.query("DELETE FROM contrat_pro WHERE id=?", id, (err, res)=>{
      if(err){
              console.log('Error deleting data');
              result(null, err);
          }else{
              console.log('Contrat_pro deleted successfully');
              result(null, res)
          }
    })
  }
  
 module.exports = Contrat_pro;