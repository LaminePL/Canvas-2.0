import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { KeycloakService } from 'keycloak-angular';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.CanvasApi.apiUrl

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private keycloakService: KeycloakService,
              private http: HttpClient) { }
}
