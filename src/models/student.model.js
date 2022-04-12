var dbConn = require('../../config/db.config');


var Student = function(student) {
    this.id_user = student.id_user;
    this.id_campus = student.id_campus;
    this.id_speciality = student.id_speciality;
    this.id_level = student.id_level;
    this.id_compta = student.id_compta;
    this.id_contrat_pro = student.id_contrat_pro;
    this.id_hiring = student.id_hiring;
    this.date_of_birth = student.date_of_birth;
    this.gender = student.gender;
    this.region = student.region;
    this.address = student.address;
    this.still_student = student.still_student;
    this.number_absence = student.number_absence;
}


//get all students
Student.getAllStudents = (data)=> {
    dbConn.query("SELECT * FROM student", (err, res)=>{
        if(err){
            console.log('Error fetching students :', err);
            data(null,err); 
        }else{
            console.log('Students fetched successfully');
            data(null,res);
        }

    })
}

//get student by ID
Student.getStudentByID = (id, data)=>{
    dbConn.query("SELECT * FROM student WHERE id=?", id, (err, res)=>{
        if(err){
            console.log('Error fetching student with id', err);
            data(null, err);
        }else{
            data(null, res);
        }
    })
}

//create new student
Student.createStudent = (studentReqData, result)=>{
    dbConn.query("INSERT INTO student SET ?", studentReqData, (err, res)=>{
        if(err){
            console.log('Error inserting data');
            result(null, err);
        }else{
            console.log('Student created successfully');
            result(null, res)
        }
    })

}


//update student
Student.updateStudent = (id, studentReqData, result) => {
  dbConn.query("UPDATE student SET id_user =?,id_campus = ?,id_speciality = ?,id_level = ?,id_compta = ?,id_contrat_pro = ?,id_hiring = ?,date_of_birth = ?,gender = ?,region = ?,address = ?,still_student = ?,number_absence = ? WHERE id=?", [studentReqData.id_user, studentReqData.id_campus, studentReqData.id_speciality, studentReqData.id_level, studentReqData.id_compta, studentReqData.id_contrat_pro, studentReqData.id_hiring, studentReqData.date_of_birth, studentReqData.gender, studentReqData.region, studentReqData.address, studentReqData.still_student, studentReqData.number_absence, id], (err, res)=>{
    if(err){
            console.log('Error updating data');
            result(null, err);
        }else{
            console.log('Student updated successfully');
            result(null, res)
        }
  })
}

//delete student
Student.deleteStudent = (id, result) => {
  dbConn.query("DELETE FROM student WHERE id=?", id, (err, res)=>{
    if(err){
            console.log('Error deleting data');
            result(null, err);
        }else{
            console.log('Student deleted successfully');
            result(null, res)
        }
  })
}



module.exports = Student;