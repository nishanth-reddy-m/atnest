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
  
  readonly wifiIconSrc = 'https://www.figma.com/api/mcp/asset/d31c21ba-3bc8-40b5-961b-417e181e35bb';
  readonly airConditioningIconSrc = 'https://www.figma.com/api/mcp/asset/99dadb23-1815-455e-ad07-ad5c4169987d';
  readonly breakfastIconSrc = 'https://www.figma.com/api/mcp/asset/831f6008-4614-4222-855b-29963254a554';
  readonly laundryIconSrc = 'https://www.figma.com/api/mcp/asset/334ef669-6c1b-4295-a37f-c888722a393e';
  readonly roomServiceIconSrc = 'https://www.figma.com/api/mcp/asset/a9a88496-896c-443b-ac91-0f93ee47705f';
  readonly parkingIconSrc = 'https://www.figma.com/api/mcp/asset/e902f8bb-78b1-4376-b5d9-01dd427d44af';
}
