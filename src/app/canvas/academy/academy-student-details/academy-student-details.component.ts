import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/services/students.service';
import { StudentDetailsModel } from '../../models/student-details.model';


@Component({
  selector: 'app-student-details',
  templateUrl: './academy-student-details.component.html',
  styleUrls: ['./academy-student-details.component.css']
})
export class AcademyStudentDetailsComponent implements OnInit {
  studentDetails: StudentDetailsModel;



  constructor(private studentsService: StudentsService, private route: ActivatedRoute,) {
    this.route.paramMap.subscribe(params => {
      this.studentsService.getStudentDetails(Number(params.get('id'))).subscribe(data => {
        this.studentDetails = data;
        console.log(this.studentDetails);
      })
    });
  }


  ngOnInit(): void {

  }

}
