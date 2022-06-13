import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ResitModel } from 'src/app/canvas/models/resit.model';



const API_URL = environment.CanvasApi.apiUrl


@Injectable({providedIn: 'root'})
export class StudentNotesService {
  constructor(private httpClient: HttpClient) { }



  getResitsDetails(studentId): Observable<ResitModel[]>{
    return this.httpClient.get<ResitModel[]>(`${API_URL}student_notes/resits/${studentId}`)
  }

}
