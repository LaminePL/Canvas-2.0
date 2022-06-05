import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ContributorModel } from 'src/app/canvas/models/contributor.model';
import { Observable } from 'rxjs';


const API_URL = environment.CanvasApi.apiUrl

@Injectable({providedIn: 'root'})
export class ContributorsService {
  constructor(private httpClient: HttpClient) { }


  getContributors():Observable<ContributorModel[]>{
    return this.httpClient.get<ContributorModel[]>(`${API_URL}contributors/list`);
  }

}
