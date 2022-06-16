import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FileModel } from 'src/app/canvas/models/file.model';
import { environment } from 'src/environments/environment';
import { formatDate } from '@angular/common';


const API_URL = environment.CanvasApi.apiUrl

@Injectable({ providedIn: 'root' })
export class FileService {
  constructor(private httpClient: HttpClient) { }

  getFilesByStudentByType(studentId, fileTypeId): Observable<FileModel[]> {
    return this.httpClient.get<FileModel[]>(`${API_URL}file/byStudent/${studentId}/byType/${fileTypeId}`)
  }

  getFilesByInternshipByType(internshipId, fileTypeId): Observable<FileModel[]> {
    return this.httpClient.get<FileModel[]>(`${API_URL}file/byInternship/${internshipId}/byType/${fileTypeId}`)
  }

  download(file: FileModel) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("path", file.file_path);
    return this.httpClient.get(`${API_URL}file/download`, { params: queryParams, responseType: "blob" })
      .subscribe(
        data => {
          let now = formatDate(new Date(),'ddMMyyyyhhmm','en');
          const fileName = [now,file.file_name].join('_')+'.pdf';

          const objectUrl: string = URL.createObjectURL(data);
          const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;

          a.href = objectUrl;
          a.download = fileName;
          document.body.appendChild(a);
          a.click();

          document.body.removeChild(a);
          URL.revokeObjectURL(objectUrl);
        },
        error => console.log('oops', error)
      );

  }
  view(file:FileModel) {
    let queryParams = new HttpParams();
    queryParams = queryParams.append("path", file.file_path);
    return this.httpClient.get(`${API_URL}file/download`, { params: queryParams, responseType: "blob" })
      .subscribe(
        data => {
          const objectUrl: string = URL.createObjectURL(data);
          const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;
          a.href = objectUrl;
          a.target = '_blank';
          document.body.appendChild(a);
          a.click();

          document.body.removeChild(a);
          URL.revokeObjectURL(objectUrl);
        },
        error => console.log('oops', error)
      );
  }

}




