import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentModel } from 'src/app/canvas/models/student.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private readonly rootUrl = `${environment.apiUrl}/students`

  constructor(private httpClient : HttpClient) { }


   getAllStudents():Observable<StudentModel[]>{
     return this.httpClient.get<StudentModel[]>(this.rootUrl);
   }
}
