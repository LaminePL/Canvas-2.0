var dbConn = require('../../config/db.config');


var Contributor = function(contributor) {
    this.id_user = contributor.id_user;
    this.id_module = contributor.id_module;
    this.section = contributor.section;
}


//get all contributors
Contributor.getAllContributors = (data)=> {
    dbConn.query("SELECT * FROM contributor", (err, res)=>{
        if(err){
            console.log('Error fetching contributor :', err);
            data(null,err); 
        }else{
            console.log('Contributor fetched successfully');
            data(null,res);
        }

    })
}

//get contributor by ID
Contributor.getContributorByID = (id, data)=>{
    dbConn.query("SELECT * FROM contributor WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching contributor with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new contributor
Contributor.createContributor = (contributorReqData, result)=>{
    dbConn.query("INSERT INTO contributor SET ?", contributorReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Contributor created successfully');
            result(null, res)
        }
    })

}

//update contributor
Contributor.updateContributor = (id, contributorReqData, result) => {
    dbConn.query("UPDATE contributor SET id_user=?, id_module=?, section=? WHERE id=?", [contributorReqData.id_user, contributorReqData.id_module, contributorReqData.section, id], (err, res)=>{
      if(err){
              console.log('Error updating data');
              result(null, err);
          }else{
              console.log('Contributor updated successfully');
              result(null, res)
          }
    })
  }
  
  //delete contributor
  Contributor.deleteContributor = (id, result) => {
    dbConn.query("DELETE FROM contributor WHERE id=?", id, (err, res)=>{
      if(err){
              console.log('Error deleting data');
              result(null, err);
          }else{
              console.log('Contributor deleted successfully');
              result(null, res)
          }
    })
  }
  
 module.exports = Contributor;