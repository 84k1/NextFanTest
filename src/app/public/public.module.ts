import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './wrapper/public.component';
import { MainNavComponent } from './wrapper/main-nav/main-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './wrapper/footer/footer.component';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/components.module';
import { TopCardsComponent } from '../components/top-cards/top-cards.component';


@NgModule({
  declarations: [
    PublicComponent,
    FooterComponent,
    MainNavComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule

  ],
  entryComponents: [TopCardsComponent],
  bootstrap: []
})
export class PublicModule {}
