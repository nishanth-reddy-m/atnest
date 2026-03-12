import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertiesComponent } from './properties/properties.component';
import { PropertyDetailComponent } from './property-detail/property-detail.component';

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
    path: 'property/:id',
    component: PropertyDetailComponent,
    title: 'ATNEST - Property Details'
  },
  {
    path: '**',
    redirectTo: ''
  }
];

