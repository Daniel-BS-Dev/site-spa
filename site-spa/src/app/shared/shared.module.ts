import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SearchingComponent } from './searching/searching.component';
import { LoadingComponent } from './loading/loading.component';

const declarations = [
  SearchingComponent,
  LoadingComponent
];

@NgModule({
  declarations: [
    ...declarations
  ],
  exports: [
    ...declarations
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
