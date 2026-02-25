import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AmenityIconComponent, AmenityIconName } from './icons/amenity-icon.component';

interface AmenityCard {
  title: string;
  description: string;
  iconName: AmenityIconName;
}

@Component({
  selector: 'app-home-amenities',
  standalone: true,
  imports: [CommonModule, AmenityIconComponent],
  templateUrl: './home-amenities.component.html',
  styleUrl: './home-amenities.component.css',
})
export class HomeAmenitiesComponent {
  readonly cards: readonly AmenityCard[] = [
    {
      title: 'High-Speed WiFi',
      description: 'Stay connected with complimentary ultra-fast internet access throughout your stay.',
      iconName: 'high-speed-wifi',
    },
    {
      title: 'Clean Spaces',
      description: 'Aesthetically created regularly maintained through dedicated staff.',
      iconName: 'clean-spaces',
    },
    {
      title: 'Free Parking',
      description: 'Secure complimentary parking facilities for both cars and bikes available for all guests.',
      iconName: 'free-parking',
    },
    {
      title: 'Fitness Center',
      description: 'Modern gym equipment, yoga mats, and personal training services available 24/7.',
      iconName: 'fitness-center',
    },
    {
      title: 'Fine Dining',
      description: 'Savour exquisite cuisine prepared by award-winning chefs in our restaurants.',
      iconName: 'fine-dining',
    },
    {
      title: 'Technology Driven',
      description: 'Manage your stay on mobile app covering bill payments to help desk.',
      iconName: 'technology-driven',
    },
    {
      title: 'Room Service',
      description: '24/7 in-room dining service delivering culinary excellence to your doorstep.',
      iconName: 'room-service',
    },
    {
      title: 'Laundry Service',
      description: 'Professional laundry and dry-cleaning services available at your convenience.',
      iconName: 'laundry-service',
    },
  ];
}
