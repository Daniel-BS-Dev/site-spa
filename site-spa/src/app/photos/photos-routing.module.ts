import { Routes, RouterModule } from '@angular/router';

import { ListPhotosComponent } from './list-photos/list-photos.component';
import { PhotosResolver } from './resolver/photos-resolver';


const routes: Routes = [
  {
    path: '', children: [
      {
        path: 'photos/:userName', component: ListPhotosComponent,
        resolve: {
          photos: PhotosResolver
        }
      }
    ]
  },
];

export const PhotosRoutingModule = RouterModule.forChild(routes);
