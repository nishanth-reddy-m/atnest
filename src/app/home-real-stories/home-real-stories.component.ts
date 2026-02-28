import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface MicroReview {
  initials: string;
  initialsVariant?: 'muted' | 'accent';
  quote: string;
  verified?: boolean;
}

@Component({
  selector: 'app-home-real-stories',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-real-stories.component.html',
  styleUrl: './home-real-stories.component.css',
})
export class HomeRealStoriesComponent {
  readonly arrowLeftSrc = 'https://www.figma.com/api/mcp/asset/a69ab4fe-1e45-428b-aa93-9894d993bc89';
  readonly arrowRightSrc = 'https://www.figma.com/api/mcp/asset/e903493f-94d4-4a52-9e6b-c1c93250c783';
  readonly starSrc = 'https://www.figma.com/api/mcp/asset/ab96ece7-9e02-4ee1-b49c-2b3b42341393';
  readonly safetyShieldSrc = 'https://www.figma.com/api/mcp/asset/60a6e251-7fa1-45f2-a30e-944a56a0ebf5';

  readonly heroImageSrc = 'https://www.figma.com/api/mcp/asset/8184d1a8-a1fd-4be1-85ab-aed6b5146ac1';
  readonly quoteMarkSrc = 'https://www.figma.com/api/mcp/asset/797d0157-7fa3-4beb-8acc-df23e4b7aa71';

  readonly checkIconSrc = 'https://www.figma.com/api/mcp/asset/4144c237-b975-43de-8f2b-973e3b41e451';
  readonly shieldIconSrc = 'https://www.figma.com/api/mcp/asset/5c8ae9db-da19-493e-95ba-df13e59f31fd';
  readonly wifiIconSrc = 'https://www.figma.com/api/mcp/asset/1783a46e-f995-4dfe-9511-83a790032ce1';
  readonly checkmarkIconSrc = 'https://www.figma.com/api/mcp/asset/708866e1-0859-43b6-8f3d-48ce43150608';
  
  readonly mainReview = {
    quote: '"Top-class amenities and extremely professional staff. My stay was peaceful and very productive."',
    personName: 'Vikram Singh',
    personRole: 'Project Manager',
    initials: 'VS',
    verified: true
  };

  readonly stats = [
    { count: 'U1', label: 'Just Now' },
    { count: 'U2', label: 'Just Now' },
    { count: 'U3', label: 'Just Now' }
  ];
  
  readonly bookedToday = '+12 booked today';

}
