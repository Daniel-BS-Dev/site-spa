import { Photo } from '../../models/photos';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotosService } from 'src/app/sevice/photos.service';

@Injectable({
  providedIn: 'root'
})
export class PhotosResolver implements Resolve<Observable<Photo[]>>{

  constructor(private service: PhotosService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> | Observable<Observable<Photo[]>> | Promise<Observable<Photo[]>> {
    const userName = route.params['userName'];
    return this.service.findPaginatedPhotos(userName, 1);
  }
}
