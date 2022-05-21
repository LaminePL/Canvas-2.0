import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserInfo } from 'src/interfaces/user-info.interface';

const API_URL = environment.CanvasApi.apiUrl

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient) { }

  getStudentInfo(studentEmail: string): Observable<any[]> {
    return this.http.get<UserInfo[]>(`${API_URL}userinfos/${studentEmail}`);
  }



  getStudentGrade(user_id: any): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}student_notes/credits/${user_id}`)

  }
  getComptaInfo(user_id: any): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}compta/${user_id}`)

  }

}
