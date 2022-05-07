var dbConn = require('../../config/db.config');


var Level = function(level) {
    this.id_student = level.id_student;
    this.level = level.level;
    this.age_of_entry = level.age_of_entry;
    this.previous_level = level.previous_level;
    this.entry_level = level.entry_level;
    this.exit_level = level.exit_level;
    this.study_length = level.study_length;
    this.year_of_entry = level.year_of_entry;
    this.year_of_exit = level.year_of_exit;

}


//get all levels
Level.getAllLevels = (data)=> {
    dbConn.query("SELECT * FROM level", (err, res)=>{
        if(err){
            console.log('Error fetching level :', err);
            data(null,err); 
        }else{
            console.log('Level fetched successfully');
            data(null,res);
        }

    })
}

//get level by ID
Level.getLevelByID = (id, data)=>{
    dbConn.query("SELECT * FROM level WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching level with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new level
Level.createLevel = (levelReqData, result)=>{
    dbConn.query("INSERT INTO level SET ?", levelReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Level created successfully');
            result(null, res)
        }
    })

}

//update level
Level.updateLevel = (id, levelReqData, result) => {
    dbConn.query("UPDATE level SET level=?, age_of_entry =?, previous_level=?,entry_level=?,exit_level=?,study_length=?,year_of_entry=?,year_of_exit=? WHERE id=?", [levelReqData.level, levelReqData.age_of_entry, levelReqData.previous_level,levelReqData.entry_level,levelReqData.exit_level,levelReqData.study_length,levelReqData.year_of_entry,levelReqData.year_of_exit, id], (err, res)=>{
      if(err){
              console.log('Error updating data');
              result(null, err);
          }else{
              console.log('Level updated successfully');
              result(null, res)
          }
    })
  }
  
  //delete level
  Level.deleteLevel = (id, result) => {
    dbConn.query("DELETE FROM level WHERE id=?", id, (err, res)=>{
      if(err){
              console.log('Error deleting data');
              result(null, err);
          }else{
              console.log('Level deleted successfully');
              result(null, res)
          }
    })
  }
  
 module.exports = Level;