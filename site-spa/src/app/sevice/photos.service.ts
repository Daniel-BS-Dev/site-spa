import { Photo } from '../models/photos';
import { environment } from '../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  readonly api: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  findListPhotos = (userName: string): Observable<Photo[]> =>
    this.http.get<Photo[]>(`${this.api}/${userName}/photos`);

}
