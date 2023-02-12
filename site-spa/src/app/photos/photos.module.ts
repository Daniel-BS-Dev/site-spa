import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPhotosComponent } from './list-photos/list-photos.component';
import { PhotosRoutingModule } from './photos-routing.module';
import { PhotosService } from '../sevice/photos.service';
import { PhotoComponent } from './components/photo/photo.component';
import { SharedModule } from '../shared/shared/shared.module';

const declarations = [
  ListPhotosComponent
];

@NgModule({
  declarations: [
    ...declarations,
    PhotoComponent
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule,
    SharedModule
  ],
  providers: [PhotosService]
})
export class PhotosModule { }
