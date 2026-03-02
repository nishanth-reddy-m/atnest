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
  
  readonly mainReview = {
    quote: '"Top-class amenities and extremely professional staff. My stay was peaceful and very productive."',
    personName: 'Vikram Singh',
    personRole: 'Project Manager',
    initials: 'VS',
    verified: true
  };

  readonly bookedToday = '+12 booked today';

}
