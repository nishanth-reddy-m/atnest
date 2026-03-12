import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';

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
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent {
  @Input() property!: PropertyCardModel;
  private router = inject(Router);

  onViewDetails() {
    // Navigate to property detail page with property ID
    // For now, using title as ID, but in real app this would be a proper ID
    const propertyId = this.property.title.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/property', propertyId]);
  }
}
