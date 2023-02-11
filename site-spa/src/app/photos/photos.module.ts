import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPhotosComponent } from './list-photos/list-photos.component';
import { PhotosRoutingModule } from './photos-routing.module';

const declarations = [
  ListPhotosComponent
];

@NgModule({
  declarations: [
    ...declarations
  ],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
