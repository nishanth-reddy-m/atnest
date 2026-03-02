import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PropertyTypeCard {
  title: string;
  subtitle: string;
  iconSrc: string;
  items: readonly string[];
  highlighted?: boolean;
}

@Component({
  selector: 'app-home-property-types',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-property-types.component.html',
  styleUrl: './home-property-types.component.css',
})
export class HomePropertyTypesComponent {
  readonly cards: readonly PropertyTypeCard[] = [
    {
      title: 'Co-Living/PG',
      subtitle: 'Home away from home',
      iconSrc: 'assets/icons/home-property-types/Co-Living.svg',
      items: ['Shared facilities', 'Daily meals', 'Housekeeping', 'Value added Services'],
    },
    {
      title: 'Hotels',
      subtitle: 'premium experiences within budget',
      iconSrc: 'assets/icons/home-property-types/hotels.svg',
      items: ['Private rooms', 'Room service', 'Modern amenities'],
      highlighted: true,
    },
    {
      title: 'Service Apartments',
      subtitle: 'Premium long term stays',
      iconSrc: 'assets/icons/home-property-types/serviceApartments.svg',
      items: ['Fully furnished', 'Kitchen facilities', 'Long-term stays'],
    },
  ];
}
