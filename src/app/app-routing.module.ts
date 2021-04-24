import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  AboutComponent
} from './about/about/about.component';
import {
  BlogComponent
} from './blog/blog.component';
import {
  HomeHeroComponent
} from './home-hero/home-hero.component';
import {
  ServicesComponent
} from './outservice/services.component';

const routes: Routes = [{
    path: '',
    component: HomeHeroComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ServicesComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },

  {
    path: 'blog/:name',
    component: BlogComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
