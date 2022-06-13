import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PartnershipModel } from 'src/app/canvas/models/partnership.model';
import { Observable } from 'rxjs';


const API_URL = environment.CanvasApi.apiUrl

@Injectable({providedIn: 'root'})

export class PartnershipsService {
  constructor(private httpClient: HttpClient) { }



  getPartnerships():Observable<PartnershipModel[]>{
    return this.httpClient.get<PartnershipModel[]>(`${API_URL}partnership/list`);
  }

}
