import { Photo } from './../../../models/photos';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnChanges {

  @Input() photos: Photo[] = [];
  @Input() emptyList!: boolean;

  rows: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['photos'])
      this.rows = this.groupColumns();
  }

  groupColumns = () => {
    const newRows: any[] = [];

    for (let i = 0; i < this.photos.length; i++) {
      newRows.push(this.photos.slice(i, i + 3));
    }

    return newRows;
  }
}
