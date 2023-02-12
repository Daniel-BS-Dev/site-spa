import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
  { path:'', pathMatch:'full', redirectTo:'sign' },
  { path:'sign', loadChildren: () => import('./sign/sign.module').then((m) => m.SignModule) },
  { path:'photos', loadChildren: () => import('./photos/photos.module').then((m) => m.PhotosModule) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
