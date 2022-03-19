import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TopCardsComponent } from './top-cards/top-cards.component';
import { CardComponent } from './card/card.component';


@NgModule({
  declarations: [
    TopCardsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [TopCardsComponent],
  entryComponents: [],
  bootstrap: []
})
export class ComponentsModule {}
