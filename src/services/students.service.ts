import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { UserInfo } from 'src/interfaces/user-info.interface';
import { LocalService } from './local.service';
import { Campus } from 'src/interfaces/campus.Interface';

const API_URL = environment.CanvasApi.apiUrl

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient,
    private keycloakService: KeycloakService,
    private localService: LocalService) { }

  getStudentInfo(studentEmail: string): Observable<any[]> {
    return this.http.get<UserInfo[]>(`${API_URL}userinfos/${studentEmail}`);
  }


  async getUserData() {
    let userDetails = await this.keycloakService.loadUserProfile();
    let email = userDetails.email;
    return this.getStudentInfo(email).pipe(
      map((user) => {
        return user[0]
      })
    )
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

  getStudentGrade(user_id: any): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}student_notes/credits/${user_id}`)
  }
  getStudentYearlyGrade(user_id:number, grade:number): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}student_notes/creditsbyyear/${user_id}/${grade}`)

  }
  getComptaInfo(user_id: any): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}compta/${user_id}`)
  }
  getCampus(campus_id: number): Observable<Campus[]> {
    return this.http.get<Campus[]>(`${API_URL}campus/${campus_id}`)
  }
}
