const StudentModel = require('../models/student.model');


//get students list
exports.getStudentList = (req, res) => {
  console.log("List of Students:")
  StudentModel.getAllStudents((err, students) => {
    console.log("Students")
    if (err)
      res.send(err);
    console.log('Students: ', students);
    res.send(students);
  });
}

//get student by id
exports.getStudentByID = (req, res) => {
  console.log('Get student by ID ');
  StudentModel.getStudentByID(req.params.id, (err, student) => {
    if (err)
      res.send(err);
    console.log('Student', student);
    res.send(student);
  })
}

//create student
exports.createNewStudent = (req, res) => {
  console.log('req data', req.body);
  const studentReqData = new StudentModel(req.body);
  //check null
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' });

  } else {
    console.log('Valid data');
    StudentModel.createStudent(studentReqData, (err, student) => {
      if (err)
        res.send(err);
      res.json({ status: true, message: 'Student added successfully', data: student });
    })

  }
}

// update student
exports.updateStudent = (req, res) => {
  console.log('req data update', req.body);
  const studentReqData = new StudentModel(req.body);
  //check null
  if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
    res.send(400).send({ success: false, message: 'Please fill all fields' });

  } else {
    console.log('Valid data');
    StudentModel.updateStudent(req.params.id, studentReqData, (err, student) => {
      if (err)
        res.send(err);
      res.json({ status: true, message: 'User updated successfully', data: student });
    })

  }
}

//delete student
exports.deleteStudent = (req,res) => {
  StudentModel.deleteStudent(req.params.id, (err, student)=>{
    if(err)
      res.send(err);
    res.json({success: true, message: 'user deleted successfully'});
  })
}
