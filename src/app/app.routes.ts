import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import { Footer } from './layout/footer/footer';

export const routes: Routes = [
  {
    path: '',
    component: Homepage
  },
  /** @TODO: Change this stuff */
  {
    path: 'about',
    component: Homepage
  },
  {
    path: 'gallery',
    component: Homepage
  }
];
