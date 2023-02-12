import { TokenService } from './../sevices/token.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from '../models/user';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new Subject<User>()

  constructor(private serviceToken: TokenService) {
    this.serviceToken.hasToken() && this.decodeAndNotify();
   }

  setToken = (token: string) => {
    this.serviceToken.setToken(token);
    this.decodeAndNotify()
  }

   getToken = () =>
    this.userSubject.asObservable();

   private decodeAndNotify = () => {
    const token = this.serviceToken.getToken();
    const user = jwtDecode(token ? token : '') as User;
    this.userSubject.next(user);
   }
}
