var dbConn = require('../../config/db.config');


var Student_notes = function(student_notes) {
    this.id_student = student_notes.id_student;
    this.id_module = student_notes.id_module;
    this.notes = student_notes.notes;
    this.credits = student_notes.credits;
}


//get all student_notess
Student_notes.getAllStudent_notes = (data)=> {
    dbConn.query("SELECT * FROM student_notes", (err, res)=>{
        if(err){
            console.log('Error fetching student_notes :', err);
            data(null,err); 
        }else{
            console.log('Student_notes fetched successfully');
            data(null,res);
        }

    })
}

//get student_notes by ID_student
Student_notes.getStudent_notesByID = (id, data)=>{
    dbConn.query("SELECT * FROM student_notes WHERE id_student=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching student_notes with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new student_notes
Student_notes.createStudent_notes = (student_notesReqData, result)=>{
    dbConn.query("INSERT INTO student_notes SET ?", student_notesReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Student_notes created successfully');
            result(null, res)
        }
    })

}

//update student_notes
Student_notes.updateStudent_notes = (id, student_notesReqData, result) => {
    dbConn.query("UPDATE student_notes SET id_student=?, id_module=?, notes=? WHERE id=?", [student_notesReqData.id_student, student_notesReqData.id_module, student_notesReqData.notes, id], (err, res)=>{
      if(err){
              console.log('Error updating data');
              result(null, err);
          }else{
              console.log('Student_notes updated successfully');
              result(null, res)
          }
    })
  }
  
  //delete student_notes
  Student_notes.deleteStudent_notes = (id, result) => {
    dbConn.query("DELETE FROM student_notes WHERE id=?", id, (err, res)=>{
      if(err){
              console.log('Error deleting data');
              result(null, err);
          }else{
              console.log('Student_notes deleted successfully');
              result(null, res)
          }
    })
  }
  
 module.exports = Student_notes;