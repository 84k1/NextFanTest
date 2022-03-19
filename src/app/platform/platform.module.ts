import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { WrapperComponent } from './wrapper/wrapper.component';
import { MainNavComponent } from './wrapper/main-nav/main-nav.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FooterComponent } from './wrapper/footer/footer.component';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from '../components/components.module';
import { TopCardsComponent } from '../components/top-cards/top-cards.component';


@NgModule({
  declarations: [
    WrapperComponent,
    MainNavComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  entryComponents: [
    TopCardsComponent
  ]
})
export class PlatformModule { }
