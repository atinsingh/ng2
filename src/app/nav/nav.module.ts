import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HeroComponent } from './hero/hero.component';



@NgModule({
  declarations: [
      NavbarComponent, 
      SearchComponent, HeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class NavModule { }
