import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { StudentModel } from 'src/app/canvas/models/student.model';
import { environment } from 'src/environments/environment';

import { KeycloakService } from 'keycloak-angular';
import { StudentDetailsModel } from 'src/app/canvas/models/student-details.model';


const API_URL = environment.CanvasApi.apiUrl

@Injectable({
  providedIn: 'root'
})
export class StudentsService {



  constructor(private keycloakService: KeycloakService,
    private http: HttpClient) { }
  userId: any;

  getStudentId() {
    return this.keycloakService.loadUserProfile()
      .then(profile => {
        return profile.email
      })
      .catch(reason => { console.log("reason =>" + reason) });
  }

  getStudentInfo(studentEmail: string): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}userinfos/${studentEmail}`);
  }



  getStudentGrade(user_id: any): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}student_notes/credits/${user_id}`)

  }
  getComptaInfo(user_id: any): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}compta/${user_id}`)

  }

  getAllStudents():Observable<StudentModel[]>{
    return this.http.get<StudentModel[]>(`${API_URL}students/list`);
  }

  getStudentDetails(studentId): Observable<StudentDetailsModel>{
    return this.http.get<StudentDetailsModel>(`${API_URL}students/details/${studentId}`)
  }
  async getStudentData() {
    let studentDetails = await this.keycloakService.loadUserProfile();
    let email = studentDetails.email;
    return this.getStudentInfo(email).pipe(
      map((user) => {
        return user[1]
      })
    )
  }

  async getStudentLevelData() {
    let studentDetails = await this.keycloakService.loadUserProfile();
    let email = studentDetails.email;
    return this.getStudentInfo(email).pipe(
      map((user) => {
        return user[2]
      })
    )
  }
  getStudentYearlyGrade(user_id:number, grade:number): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}student_notes/creditsbyyear/${user_id}/${grade}`)

  }

}
