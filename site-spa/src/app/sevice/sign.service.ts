import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class SignService {

  readonly api: string = environment.apiUrl;

  constructor(private http: HttpClient, private authToken: TokenService) { }

  authenticate = (userName: string, password: string) =>
    this.http.post(`${this.api}/user/login`, { userName, password }, { observe: 'response' })
      .pipe(tap((token) => {
        const headersToken = token.headers.get('x-access-token');
        this.authToken.setToken(headersToken ? headersToken : '')
      }));
}
