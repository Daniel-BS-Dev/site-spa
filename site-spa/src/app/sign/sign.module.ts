import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SignComponent } from './view/sign.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignRoutingModule } from './sign-routing.module';


@NgModule({
  declarations: [SignComponent],
  imports: [
    CommonModule,
    SignRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
})
export class SignModule { }
