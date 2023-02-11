import { Photo } from './../../models/photos';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/sevice/photos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.scss']
})
export class ListPhotosComponent implements OnInit {

  photos$!: Observable<Photo[]>;

  constructor(private servicePhotos: PhotosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getListPhotosByUser();
  }

  getListPhotosByUser = (): void => {
   const userName = this.activatedRoute.snapshot.params['userName'];

   this.photos$ = this.servicePhotos.findListPhotos(userName);
  }
}
