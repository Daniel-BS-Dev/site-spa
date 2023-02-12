import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  KeyToken = 'authToken';
  localStorage = window.localStorage;

  constructor() { }

  hasToken = () =>
    !!this.getToken();

  setToken = (token: string) =>
    this.localStorage.setItem(this.KeyToken, token);

  getToken = () =>
    this.localStorage.getItem(this.KeyToken);

  removeToken = () =>
    this.localStorage.removeItem(this.KeyToken);
}
