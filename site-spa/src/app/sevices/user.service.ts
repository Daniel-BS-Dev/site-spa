import { TokenService } from './../sevices/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { User } from '../models/user';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userSubject = new BehaviorSubject<User | null>(null);
  userName = '';

  constructor(private serviceToken: TokenService) {
    this.serviceToken.hasToken() && this.decodeAndNotify();
  }

  setToken = (token: string) => {
    this.serviceToken.setToken(token);
    this.decodeAndNotify()
  }

  getToken = () =>
    this.userSubject.asObservable();

  logout = () => {
    this.serviceToken.removeToken();
    this.userSubject.next(null);
  }

  isLogged = () =>
    this.serviceToken.hasToken();

  private decodeAndNotify = () => {
    const token = this.serviceToken.getToken();
    const user = jwtDecode(token ? token : '') as User;
    this.userName = user.name;
    this.userSubject.next(user);
  }
}
