import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SearchingComponent } from './searching/searching.component';
import { LoadingComponent } from './loading/loading.component';
import { CardComponent } from './card/card.component';

const declarations = [
  SearchingComponent,
  LoadingComponent,
  CardComponent
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
