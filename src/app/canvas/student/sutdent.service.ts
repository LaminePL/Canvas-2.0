import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { KeycloakService} from 'keycloak-angular';

const API_URL = environment.CanvasApi.apiUrl

@Injectable({
  providedIn: 'root'
})
export class SutdentService {
  userId: any;

  constructor(private http: HttpClient,
    private keycloakService : KeycloakService
    ) { }

  getStudentId() {
    return this.keycloakService.loadUserProfile()
      .then(profile => {
        return profile.email
      })
      .catch(reason => { console.log("reason =>" + reason) });
  }

  getStudentInfo(studentEmail: string): Observable<any[]>  {
    return this.http.get<any[]>(`${API_URL}userinfos/${studentEmail}`);
  }



   getStudentGrade(user_id: any):Observable<any[]> {
     console.log(user_id)
    return this.http.get<any[]>(`${API_URL}student_notes/credits/${user_id}`)

  }
  getComptaInfo(user_id:any): Observable<any[]>{
    return this.http.get<any[]>(`${API_URL}compta/${user_id}`)

  }

}
