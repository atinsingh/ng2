import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HeroComponent } from './hero/hero.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
      NavbarComponent, 
      SearchComponent, 
      HeroComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavModule { }
