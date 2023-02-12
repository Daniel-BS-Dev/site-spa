import { Photo } from './../../models/photos';
import { Observable, takeUntil, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

  unsubscribe$ = new Subject();

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.listPhotos = this.activatedRoute.snapshot.data['photos'];
  }

  findPhotosByFilter = (filterValue: Searching): void => {
    const { filter, loading } = filterValue;

    this.filterPhotosValue = filter;
    this.loading = loading;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
