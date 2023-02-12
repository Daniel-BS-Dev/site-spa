import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListPhotosComponent } from './list-photos/list-photos.component';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosService } from '../sevices/photos.service';
import { PhotoComponent } from './components/photo/photo.component';
import { SharedModule } from '../shared/shared.module';
import { FilterByDescriptionPipe } from './pipe/filter-by-description.pipe';
import { LoadButtonComponent } from './components/load-button/load-button.component';

const declarations = [
  ListPhotosComponent,
  PhotoComponent,
  LoadButtonComponent
];

@NgModule({
  declarations: [
    ...declarations,
    FilterByDescriptionPipe,
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    SharedModule
  ],
  providers: [PhotosService]
})
export class PhotosModule { }
