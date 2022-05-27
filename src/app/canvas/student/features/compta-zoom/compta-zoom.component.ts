import { Component, Input, OnInit } from '@angular/core';
import { map, mergeMap } from 'rxjs';
import { Compta } from 'src/interfaces/compta-interface';
import { UserInfo } from 'src/interfaces/user-info.interface';
import { LocalService } from 'src/services/local.service';
import { SharedService } from 'src/services/shared.service';
import { StudentsService } from 'src/services/students.service';

@Component({
  selector: 'app-compta-zoom',
  templateUrl: './compta-zoom.component.html',
  styleUrls: ['./compta-zoom.component.css']
})
export class ComptaZoomComponent implements OnInit {

  comptaDetails: Compta[]
  studentInfo: UserInfo[]
  campus:string
  firstName:string;
  lastName: string;

  constructor(private sharedService: SharedService,
    private studentsService: StudentsService,
    private localService: LocalService) { }

  ngOnInit(): void {
    this.getUserComptaDetails(this.localService.getJsonValue('userId'));
    this.getUserAdditionalData()
  }

  getUserComptaDetails(userId) {
    this.studentsService.getComptaInfo(userId).pipe(
      map((compta) => {
        return compta
      })
    ).subscribe((res) => {
      this.comptaDetails = res
      return res
    })
  }
  getUserAdditionalData(){
    this.studentsService.getUserData().then((res)=>{
      res.subscribe((studentInfo)=>{
        console.log(studentInfo["last_name"])
        this.studentInfo = studentInfo
        this.firstName = studentInfo.first_name
        this.lastName = studentInfo.last_name
        this.getCampusName(studentInfo.id_campus);
        return studentInfo
      }
      )
    }
    )
  }
  getCampusName(campusId: number){
    this.studentsService.getCampus(campusId).subscribe(
      (res)=> {
        this.campus = res['campus_name']
        return res
      }
    )

  }


}

