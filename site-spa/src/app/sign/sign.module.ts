import { SignComponent } from './view/sign.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignRoutingModule } from './sign-routing.module';


@NgModule({
  declarations: [SignComponent],
  imports: [
    CommonModule,
    SignRoutingModule
  ],
})
export class SignModule { }
