const Student_notesModel = require('../models/student_notes.model');


//get student_notess list
exports.getStudent_notesList = (req, res) => {
  console.log("List of Student_notes:")
  Student_notesModel.getAllStudent_notes((err, student_notes) => {
    console.log("Student_notes")
    if (err)
      res.send(err);
    console.log('Student_notes: ', student_notes);
    res.send(student_notes);
  });
}

//get student_notes by id
exports.getStudent_notesByID = (req, res)=>{
    console.log('Get Student_notes by ID ');
    Student_notesModel.getStudent_notesByID(req.params.id, (err, student_notes)=>{
        if(err)
        res.send(err);
        console.log('Student_notes', student_notes);
        res.send(student_notes);
    })
}


//create student_notes
exports.createNewStudent_notes = (req, res)=>{
    console.log('req data', req.body);
    const student_notesReqData = new Student_notesModel(req.body);
    //check null
    if(req.body.contructor === Object && Object.keys(req.body).length === 0){
        res.send(400).send({success:false, message: 'Please fill all fields'});

    }else{
        console.log('Valid data');
        Student_notesModel.createStudent_notes(student_notesReqData, (err, student_notes)=>{
            if(err)
            res.send(err);
            res.json({status: true, message : 'Student_notes added successfully', data: student_notes});
        })

    }
}

// update student_notes
exports.updateStudent_notes = (req, res) => {
    console.log('req data update', req.body);
    const student_notesReqData = new Student_notesModel(req.body);
    //check null
    if (req.body.contructor === Object && Object.keys(req.body).length === 0) {
      res.send(400).send({ success: false, message: 'Please fill all fields' });
  
    } else {
      console.log('Valid data');
      Student_notesModel.updateStudent_notes(req.params.id, student_notesReqData, (err, student_notes) => {
        if (err)
          res.send(err);
        res.json({ status: true, message: 'Student_notes updated successfully', data: student_notes });
      })
  
    }
  }
  
  //delete student_notes
  exports.deleteStudent_notes = (req,res) => {
    student_notesModel.deleteStudent_notes(req.params.id, (err, student_notes)=>{
      if(err)
        res.send(err);
      res.json({success: true, message: 'Student_notes deleted successfully'});
    })
  }
  