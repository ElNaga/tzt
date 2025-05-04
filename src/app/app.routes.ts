import { Routes } from '@angular/router';
import { HomeComponent }  from './pages/home.component';
import { AboutComponent } from './pages/about.component';

export const routes: Routes = [
  { path: '',      component: HomeComponent,  title: 'Home'  },
  { path: 'about', component: AboutComponent, title: 'About' },
];
