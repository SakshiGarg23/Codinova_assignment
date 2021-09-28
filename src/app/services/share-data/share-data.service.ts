import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  subject = new Subject<any>()
  constructor() { }

  sendMessage(message:any){
     this.subject.next({text:message});
  }
  getMessage(): Observable<any> {
    return this.subject;
  }
}
