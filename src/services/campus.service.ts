import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CampusModel } from 'src/app/canvas/models/campus.model';


const API_URL = environment.CanvasApi.apiUrl
@Injectable({ providedIn: 'root' })
export class CampusService {
  constructor(private httpClient: HttpClient) { }
  getCampusList(): Observable<CampusModel[]> {
    return this.httpClient.get<CampusModel[]>(`${API_URL}campus/list`);
  }
}
