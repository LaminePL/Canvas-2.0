import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileModel } from 'src/app/canvas/models/file.model';
import { environment } from 'src/environments/environment';


const API_URL = environment.CanvasApi.apiUrl

@Injectable({providedIn: 'root'})
export class FileService {
  constructor(private httpClient: HttpClient) { }

  getFilesByStudentByType(studentId,fileTypeId): Observable<FileModel[]>{
    return this.httpClient.get<FileModel[]>(`${API_URL}file/byStudent/${studentId}/byType/${fileTypeId}`)
  }

}
