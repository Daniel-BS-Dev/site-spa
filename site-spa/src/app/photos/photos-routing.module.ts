import { Routes, RouterModule } from '@angular/router';

import { ListPhotosComponent } from './list-photos/list-photos.component';


const routes: Routes = [
  {
    path: '', children: [
      { path: 'photos/:userName', component: ListPhotosComponent }
    ]
  },
];

export const PhotosRoutingModule = RouterModule.forChild(routes);
