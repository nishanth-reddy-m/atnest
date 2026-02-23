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
      iconSrc: 'https://www.figma.com/api/mcp/asset/a4f65705-7c67-4ce8-88b9-37e0a432bbd1',
      items: ['Shared facilities', 'Daily meals', 'Housekeeping', 'Value added Services'],
    },
    {
      title: 'Hotels',
      subtitle: 'premium experiences within budget',
      iconSrc: 'https://www.figma.com/api/mcp/asset/5f532a2d-237e-4d17-8c37-76db9187e355',
      items: ['Private rooms', 'Room service', 'Modern amenities'],
      highlighted: true,
    },
    {
      title: 'Service Apartments',
      subtitle: 'Premium long term stays',
      iconSrc: 'https://www.figma.com/api/mcp/asset/f3e65f29-e06d-4b6b-9b94-c4005e30b0d9',
      items: ['Fully furnished', 'Kitchen facilities', 'Long-term stays'],
    },
  ];
}
