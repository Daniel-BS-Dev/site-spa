import { Photo } from './../../models/photos';
import { Observable, takeUntil, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PhotosService } from 'src/app/sevice/photos.service';
import { ActivatedRoute } from '@angular/router';
import { Searching } from 'src/app/shared/searching/searching.component';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.scss']
})
export class ListPhotosComponent implements OnInit, OnDestroy {

  listPhotos: Photo[] = [];
  listPhotosFilter: Photo[] = [];
  loading: boolean = true;

  unsubscribe$ = new Subject();

  constructor(private servicePhotos: PhotosService, private activatedRoute: ActivatedRoute) { }

  get photos() {
    return this.listPhotosFilter.length ? this.listPhotosFilter : this.listPhotos;
  }

  ngOnInit(): void {
    this.getListPhotosByUser();
  }

  findPhotosByFilter = (filterValue: Searching): Photo[] => {
    const { filter, loading } = filterValue;

    this.loading = loading;

    return this.listPhotosFilter = this.listPhotos.filter((photo: Photo) =>
      photo.description.toLowerCase().includes(filter));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }

  private getListPhotosByUser = (): void => {
    const userName = this.activatedRoute.snapshot.params['userName'];

    this.servicePhotos.findListPhotos(userName).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((photos: Photo[]) => {
      this.listPhotos = photos
      this.loading = false
    }
    );
  }

}
