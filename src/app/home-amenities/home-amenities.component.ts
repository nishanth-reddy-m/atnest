import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface AmenityCard {
  title: string;
  description: string;
  iconSrc: string;
}

@Component({
  selector: 'app-home-amenities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-amenities.component.html',
  styleUrl: './home-amenities.component.css',
})
export class HomeAmenitiesComponent {
  readonly cards: readonly AmenityCard[] = [
    {
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary ultra-fast internet access throughout your stay.',
      iconSrc: 'https://www.figma.com/api/mcp/asset/cd962162-27a5-4280-92dd-da627d8a7c21',
    },
    {
      title: 'Clean Spaces',
      description: 'Aesthetically created regularly maintained through dedicated staff.',
      iconSrc: 'https://www.figma.com/api/mcp/asset/b7974b2c-a67a-485f-b6ba-0266293db002',
    },
    {
      title: 'Free Parking',
      description: 'Secure complimentary parking facilities for both cars and bikes available for all guests.',
      iconSrc: 'https://www.figma.com/api/mcp/asset/87d117fd-e7d3-48bf-9ec0-d2bf71bb3351',
    },
    {
      title: 'Fitness Center',
      description: 'Modern gym equipment, yoga mats, and personal training services available 24/7.',
      iconSrc: 'https://www.figma.com/api/mcp/asset/824747ee-6a26-4120-804c-d34d5fa4ac7f',
    },
    {
      title: 'Fine Dining',
      description: 'Savour exquisite cuisine prepared by award-winning chefs in our restaurants.',
      iconSrc: 'https://www.figma.com/api/mcp/asset/086f6bf7-2664-405a-a68d-dd802c54bc25',
    },
    {
      title: 'Technology Driven',
      description: 'Manage your stay on mobile app covering bill payments to help desk.',
      iconSrc: 'https://www.figma.com/api/mcp/asset/1e548c39-fd86-49c9-b5d1-a21b8c5017b0',
    },
    {
      title: 'Room Service',
      description: '24/7 in-room dining service delivering culinary excellence to your doorstep.',
      iconSrc: 'https://www.figma.com/api/mcp/asset/425ee7e8-6216-47c1-b59e-ca2e5c7b97d6',
    },
    {
      title: 'Laundry Service',
      description: 'Professional laundry and dry-cleaning services available at your convenience.',
      iconSrc: 'https://www.figma.com/api/mcp/asset/83d2af23-df52-4cd0-bfe0-abde2ce7145a',
    },
  ];
}
