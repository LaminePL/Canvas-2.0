import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Compta } from 'src/interfaces/compta-interface';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private studentCopmta = new BehaviorSubject<Compta[]>(null);

  constructor() { }

  loadComptaInfo(compta:Compta[]){
    this.studentCopmta.next(compta)
  }
  getComptaInfo(): Observable<Compta[]> {
    return this.studentCopmta.asObservable();
  }
}
