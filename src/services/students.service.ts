import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from 'src/app/canvas/models/student.model';
import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = environment.CanvasApi.apiUrl

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly rootUrl = `${environment.apiUrl}/students`

  constructor(private httpClient : HttpClient) { }


   getAllStudents():Observable<StudentModel[]>{
     return this.httpClient.get<StudentModel[]>(this.rootUrl);
   }
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
    console.log(studentEmail)
    return this.http.get<any[]>(`${API_URL}userinfos/${studentEmail}`);
  }



  getStudentGrade(user_id: any): Observable<any[]> {
    console.log(user_id)
    return this.http.get<any[]>(`${API_URL}student_notes/credits/${user_id}`)

  }
  getComptaInfo(user_id: any): Observable<any[]> {
    console.log(user_id)
    return this.http.get<any[]>(`${API_URL}compta/${user_id}`)

  }

}
