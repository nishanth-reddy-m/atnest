import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface DifferentFeature {
  iconSrc: string;
  label: string;
}

@Component({
  selector: 'app-different',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './different.component.html',
  styleUrl: './different.component.css',
})
export class DifferentComponent {
  readonly features: readonly DifferentFeature[] = [
    {
      iconSrc: 'assets/icons/different/guest-is-god.svg',
      label: 'Guest is GOD Philosophy',
    },
    {
      iconSrc: 'assets/icons/different/clean-spaces.svg',
      label: 'Clean Spaces',
    },
    {
      iconSrc: 'assets/icons/different/near-it-corridor.svg',
      label: 'Near IT Corridor',
    },
    {
      iconSrc: 'assets/icons/different/food-like-home.svg',
      label: 'Food like at Home',
    },
    {
      iconSrc: 'assets/icons/different/community-focused.svg',
      label: 'Community Focused',
    },
    {
      iconSrc: 'assets/icons/different/sustainable-ops.svg',
      label: 'Sustainable Operations',
    },
    {
      iconSrc: 'assets/icons/different/smart-technology.svg',
      label: 'Smart Technology',
    },
    {
      iconSrc: 'assets/icons/different/concierge.svg',
      label: '24/7 Concierge',
    },
    {
      iconSrc: 'assets/icons/different/aesthetic-interiors.svg',
      label: 'Aesthetically Designed Interiors',
    },
  ];

  readonly modelImageSrc = 'assets/sections/different-model.png';
}
