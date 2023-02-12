import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SearchingComponent } from './searching/searching.component';
import { LoadingComponent } from './loading/loading.component';
import { CardComponent } from './card/card.component';
import { DarkenOnHoverDirective } from './directives/darken-on-hover.directive';
import { ErrorMessageComponent } from './error-message/error-message.component';

const declarations = [
  SearchingComponent,
  LoadingComponent,
  CardComponent,
  DarkenOnHoverDirective,
  ErrorMessageComponent
];

@NgModule({
  declarations: [
    ...declarations,
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
