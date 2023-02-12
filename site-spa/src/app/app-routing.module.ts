import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './guard/auth-guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'sign' },
  {
    path: 'sign',
    canActivate: [AuthGuardService],
    loadChildren: () => import('./sign/sign.module').then((m) => m.SignModule)
  },
  { path: 'photos', loadChildren: () => import('./photos/photos.module').then((m) => m.PhotosModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
