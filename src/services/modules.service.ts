import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModuleModel } from 'src/app/canvas/models/module.model';
import { environment } from 'src/environments/environment';
import { StudentStatusModel } from 'src/app/canvas/models/student-status.model';

const API_URL = environment.CanvasApi.apiUrl

@Injectable({providedIn: 'root'})
export class ModulesService {
  constructor(private httpClient: HttpClient) { }


  getModules():Observable<ModuleModel[]>{
    return this.httpClient.get<ModuleModel[]>(`${API_URL}modules/list`);
  }
  getStudentStatus(moduleID): Observable<StudentStatusModel []>{
    return this.httpClient.get<StudentStatusModel []>(`${API_URL}modules/status/${moduleID}`)
  }


  getModulebyId(id):Observable<ModuleModel[]>{
    return this.httpClient.get<ModuleModel[]>(`${API_URL}modules/${id}`);
  }


}
