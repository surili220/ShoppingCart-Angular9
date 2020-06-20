import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  constructor() { }

  subject = new Subject();

  sendMessage(product){
    this.subject.next(product);
  }

  getMessage(){
   return this.subject.asObservable();
  }
}
