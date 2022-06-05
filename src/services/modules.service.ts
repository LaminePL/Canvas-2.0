import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ModuleModel } from 'src/app/canvas/models/module.model';
import { environment } from 'src/environments/environment';

const API_URL = environment.CanvasApi.apiUrl

@Injectable({providedIn: 'root'})
export class ModulesService {
  constructor(private httpClient: HttpClient) { }


  getModules():Observable<ModuleModel[]>{
    return this.httpClient.get<ModuleModel[]>(`${API_URL}modules/list`);
  }

}
