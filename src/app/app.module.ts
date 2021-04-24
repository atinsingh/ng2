import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './nav/nav.module'
import { AboutModule } from './about/about.module';
import { ServicesComponent } from './outservice/services.component';
import { HomeHeroComponent } from './home-hero/home-hero.component'


@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    HomeHeroComponent
  ],
  imports: [
    BrowserModule,
    NavModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
