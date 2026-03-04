import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface PropertyCardModel {
  title: string;
  location: string;
  category: string;
  sqft: string;
  rating: string;
  ratingCount: string;
  priceFrom: string;
  priceSuffix: string;
  bedTags: readonly string[];
  imageSrc: string;
}

@Component({
  selector: 'app-our-properties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-properties.component.html',
  styleUrl: './our-properties.component.css',
})
export class OurPropertiesComponent {
  readonly cards: readonly PropertyCardModel[] = [
    {
      title: 'Voila Suites @nest',
      location: 'Madhapur',
      category: 'Service Apartments',
      sqft: '420 sqft',
      rating: '4.6',
      ratingCount: '(245)',
      priceFrom: '₹2,500',
      priceSuffix: 'Per night',
      bedTags: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Voila Suites @nest',
      location: 'Madhapur',
      category: 'Service Apartments',
      sqft: '420 sqft',
      rating: '4.9',
      ratingCount: '(245)',
      priceFrom: '₹2,500',
      priceSuffix: 'Per night',
      bedTags: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Voila Suites @nest',
      location: 'Madhapur',
      category: 'Service Apartments',
      sqft: '420 sqft',
      rating: '4.9',
      ratingCount: '(245)',
      priceFrom: '₹2,500',
      priceSuffix: 'Per night',
      bedTags: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
  ];

  readonly underlineSrc = 'assets/icons/properties/underline-doodle.svg';
}
