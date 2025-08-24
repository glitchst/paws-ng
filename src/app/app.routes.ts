import { Routes } from '@angular/router';
import { Homepage } from './homepage/homepage';
import {AboutMe} from './about-me/about-me';
import {Gallery} from './gallery/gallery';

export const routes: Routes = [
  {
    path: '',
    component: Homepage
  },
  {
    path: 'about',
    component: AboutMe
  },
  {
    path: 'gallery',
    component: Gallery
  }
];
