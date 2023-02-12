import { Photo } from './../../models/photos';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos: Photo[], descriptionQuery: string): Photo[] {
     descriptionQuery = descriptionQuery.trim().toLowerCase();

    if(descriptionQuery)
     return photos.filter((photo: Photo) => photo.description.includes(descriptionQuery));

    return photos;
  }
}
