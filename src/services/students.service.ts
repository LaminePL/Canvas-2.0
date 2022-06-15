import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {StudentModel} from 'src/app/canvas/models/student.model';
import {environment} from 'src/environments/environment';

import {KeycloakService} from 'keycloak-angular';
import {StudentDetailsModel} from 'src/app/canvas/models/student-details.model';
import {UserService} from 'src/services/user.service';
import {CalendarModel} from 'src/app/canvas/models/calendar.model';
import {NotesModel} from 'src/app/canvas/models/notes.models';


const API_URL = environment.CanvasApi.apiUrl

@Injectable({
  providedIn: 'root'
})
export class StudentsService {


  studentDetails: BehaviorSubject<StudentModel[]> = new BehaviorSubject<StudentModel[]>({} as StudentModel[]);

  constructor(private keycloakService: KeycloakService, private userService: UserService,
              private http: HttpClient) {
    this.getStudent()
  }


  getStudentId() {
    return this.keycloakService.loadUserProfile()
      .then(profile => {
        return profile.email
      })
      .catch(reason => {
        console.log("reason =>" + reason)
      });
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

  getAgendaByLevel(levelId): Observable<CalendarModel[]> {
    return this.http.get<CalendarModel[]>(`${API_URL}agenda/${levelId}`);
  }

  getAgendaAllLevel(): Observable<CalendarModel[]> {
    return this.http.get<CalendarModel[]>(`${API_URL}agenda`);
  }

  getAllStudents(): Observable<StudentModel[]> {
    return this.http.get<StudentModel[]>(`${API_URL}students/list`);
  }

  getStudentDetails(studentId): Observable<StudentDetailsModel> {
    return this.http.get<StudentDetailsModel>(`${API_URL}students/details/${studentId}`)
  }

  getStudent() {
    this.userService.currentUser.subscribe(res => {
      if (res)
        this.getAllStudents().subscribe(data => {
          this.studentDetails.next(data.filter(user => user.id_user == res.userId));
          return this.studentDetails
        })
    })
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

  getStudentCreditsPerYear(user_id: number, grade: number): Observable<any[]> {
    return this.http.get<any[]>(`${API_URL}student_notes/creditsbyyear/${user_id}/${grade}`)
  }

  getStudentNotesPerYear(user_id: number, grade: number): Observable<NotesModel[]> {
    return this.http.get<NotesModel[]>(`${API_URL}student_notes/byyear/${user_id}/${grade}`)
  }

}
