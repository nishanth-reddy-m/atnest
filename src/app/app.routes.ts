import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'ATNEST - Premium Hotels'
  },
  {
    path: 'properties',
    component: PropertiesComponent,
    title: 'ATNEST - Properties'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

