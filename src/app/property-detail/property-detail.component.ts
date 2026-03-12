import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface SearchFormData {
  dateRange: {
    checkIn: string;
    checkOut: string;
  };
  sharing: string;
  occupancy: string;
  ac: boolean;
}

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  private router = inject(Router);

  searchForm: SearchFormData = {
    dateRange: {
      checkIn: '12 Feb 2026',
      checkOut: '16 Feb 2026'
    },
    sharing: '1 BHK',
    occupancy: '2 Adults & 1 Child',
    ac: true
  };

  propertyData = {
    title: 'Nest Premium - Hitech City',
    rating: 4.8,
    ratingCount: 124,
    location: 'Hitech City, Hyderabad',
    description: 'Experience premium co-living in the heart of Hyderabad\'s tech hub. This property offers fully furnished shared accommodations with state-of-the-art amenities, ensuring a comfortable and productive lifestyle...',
    mainImage: 'https://www.figma.com/api/mcp/asset/2d8f502f-4df5-42c5-b0ac-9d25c42882a2',
    thumbnailImages: [
      'https://www.figma.com/api/mcp/asset/dd65236b-5073-40f8-a884-6c23b3826537',
      'https://www.figma.com/api/mcp/asset/539900db-bb0f-4b32-bb0f-32dd0c5093ba',
      'https://www.figma.com/api/mcp/asset/daf1598b-9b37-485e-832e-dc3dfbf0bb9f',
      'https://www.figma.com/api/mcp/asset/d640819b-37e3-4113-8395-73104967a108',
      'https://www.figma.com/api/mcp/asset/7165a5f3-428d-41e9-b20a-054947fb3d88',
      'https://www.figma.com/api/mcp/asset/fd1c9307-dee5-4528-b905-6a52583afa4e'
    ]
  };

  sharingOptions = ['1 BHK', '2 BHK', '3 BHK', 'Studio'];
  occupancyOptions = ['1 Adult', '2 Adults', '2 Adults & 1 Child', '3 Adults'];
  acOptions = ['AC', 'Non AC'];

  selectedThumbnail = 0;

  constructor() { }

  ngOnInit(): void {
    // Initialize component
  }

  onSearch() {
    console.log('Search clicked with data:', this.searchForm);
    // Implement search functionality
  }

  selectThumbnail(index: number) {
    this.selectedThumbnail = index;
  }

  onSharingChange(value: string) {
    this.searchForm.sharing = value;
  }

  onOccupancyChange(value: string) {
    this.searchForm.occupancy = value;
  }

  onAcChange(value: string) {
    this.searchForm.ac = value === 'AC';
  }

  goBack() {
    this.router.navigate(['/properties']);
  }
}
