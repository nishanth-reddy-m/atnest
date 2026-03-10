import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

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
}
