import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import type { Amenity } from '../hero.model';

@Component({
  selector: 'app-hero-amenities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-amenities.component.html',
  styleUrl: './hero-amenities.component.css',
})
export class HeroAmenitiesComponent {
  readonly amenities = input.required<Amenity[]>();
}
