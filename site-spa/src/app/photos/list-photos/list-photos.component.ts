import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeUntil, Subject } from 'rxjs';

import { PhotosService } from '../../sevices/photos.service';
import { Photo } from './../../models/photos';
import { Searching } from 'src/app/shared/searching/searching.component';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photos.component.scss']
})
export class ListPhotosComponent implements OnInit, OnDestroy {

  listPhotos: Photo[] = [];
  filterPhotosValue: string = '';
  loading: boolean = true;
  hasMore: boolean = true;
  currentPage: number = 1;
  userName: string = '';

  unsubscribe$ = new Subject();

  constructor(private service: PhotosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let snapshot = this.activatedRoute.snapshot;

    this.userName = snapshot.params['userName'];
    this.listPhotos = snapshot.data['photos'];
  }

  findPhotosByFilter = (filterValue: Searching): void => {
    const { filter, loading } = filterValue;

    this.filterPhotosValue = filter;
    this.loading = loading;
  }

  loadMore = () => {
    this.service.findPaginatedPhotos(this.userName, ++this.currentPage).pipe(
      takeUntil(this.unsubscribe$)
    ).subscribe((photos: Photo[]) => {
      this.listPhotos = [...photos];

      if (!photos.length) this.hasMore = false;
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
