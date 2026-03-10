import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyCardComponent } from '../shared/property-card/property-card.component';

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
  selector: 'app-properties',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent],
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css'],
})
export class PropertiesComponent {

  private router = inject(Router);

  readonly propertyCards: readonly PropertyCardModel[] = [
    {
      title: 'Voila Suites @nest',
      location: 'Madhapur',
      category: 'Service Apartments',
      sqft: '420 sqft',
      rating: '4.9',
      ratingCount: '245',
      priceFrom: '₹2,500',
      priceSuffix: 'Per night',
      bedTags: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Premium Residency @nest',
      location: 'Gachibowli',
      category: 'Service Apartments',
      sqft: '550 sqft',
      rating: '4.8',
      ratingCount: '189',
      priceFrom: '₹3,200',
      priceSuffix: 'Per night',
      bedTags: ['2 BHK', '3 BHK', '4 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Luxury Living @nest',
      location: 'Hitech City',
      category: 'Service Apartments',
      sqft: '680 sqft',
      rating: '4.7',
      ratingCount: '156',
      priceFrom: '₹4,100',
      priceSuffix: 'Per night',
      bedTags: ['2 BHK', '3 BHK', '4 BHK', '5 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Comfort Stay @nest',
      location: 'Banjara Hills',
      category: 'Service Apartments',
      sqft: '380 sqft',
      rating: '4.6',
      ratingCount: '203',
      priceFrom: '₹2,800',
      priceSuffix: 'Per night',
      bedTags: ['1 BHK', '2 BHK', '3 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Executive Suites @nest',
      location: 'Jubilee Hills',
      category: 'Service Apartments',
      sqft: '720 sqft',
      rating: '4.9',
      ratingCount: '142',
      priceFrom: '₹5,500',
      priceSuffix: 'Per night',
      bedTags: ['3 BHK', '4 BHK', '5 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Urban Living @nest',
      location: 'Kondapur',
      category: 'Service Apartments',
      sqft: '450 sqft',
      rating: '4.5',
      ratingCount: '178',
      priceFrom: '₹2,900',
      priceSuffix: 'Per night',
      bedTags: ['1 BHK', '2 BHK', '3 BHK', '4 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Voila Suites @nest',
      location: 'Madhapur',
      category: 'Service Apartments',
      sqft: '420 sqft',
      rating: '4.9',
      ratingCount: '245',
      priceFrom: '₹2,500',
      priceSuffix: 'Per night',
      bedTags: ['1 BHK', '2 BHK', '3 BHK', '4 BHK', '5 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Premium Residency @nest',
      location: 'Gachibowli',
      category: 'Service Apartments',
      sqft: '550 sqft',
      rating: '4.8',
      ratingCount: '189',
      priceFrom: '₹3,200',
      priceSuffix: 'Per night',
      bedTags: ['2 BHK', '3 BHK', '4 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Luxury Living @nest',
      location: 'Hitech City',
      category: 'Service Apartments',
      sqft: '680 sqft',
      rating: '4.7',
      ratingCount: '156',
      priceFrom: '₹4,100',
      priceSuffix: 'Per night',
      bedTags: ['2 BHK', '3 BHK', '4 BHK', '5 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Comfort Stay @nest',
      location: 'Banjara Hills',
      category: 'Service Apartments',
      sqft: '380 sqft',
      rating: '4.6',
      ratingCount: '203',
      priceFrom: '₹2,800',
      priceSuffix: 'Per night',
      bedTags: ['1 BHK', '2 BHK', '3 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Executive Suites @nest',
      location: 'Jubilee Hills',
      category: 'Service Apartments',
      sqft: '720 sqft',
      rating: '4.9',
      ratingCount: '142',
      priceFrom: '₹5,500',
      priceSuffix: 'Per night',
      bedTags: ['3 BHK', '4 BHK', '5 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    },
    {
      title: 'Urban Living @nest',
      location: 'Kondapur',
      category: 'Service Apartments',
      sqft: '450 sqft',
      rating: '4.5',
      ratingCount: '178',
      priceFrom: '₹2,900',
      priceSuffix: 'Per night',
      bedTags: ['1 BHK', '2 BHK', '3 BHK', '4 BHK'],
      imageSrc: 'assets/images/properties/voila-suite.jpg',
    }
  ];

}
