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
    description: 'Experience premium co-living in the heart of Hyderabad\'s tech hub. Nest Premium offers modern amenities, spacious living spaces, and a vibrant community atmosphere perfect for professionals and students alike.',
    mainImage: 'https://via.placeholder.com/1057x600/F26622/FFFFFF?text=Main+Property+Image',
    thumbnailImages: [
      'https://via.placeholder.com/133x92/F5F5F5/1A1A1A?text=1',
      'https://via.placeholder.com/133x92/F5F5F5/1A1A1A?text=2',
      'https://via.placeholder.com/133x92/F5F5F5/1A1A1A?text=3',
      'https://via.placeholder.com/133x92/F5F5F5/1A1A1A?text=4',
      'https://via.placeholder.com/133x92/F5F5F5/1A1A1A?text=5',
      'https://via.placeholder.com/133x92/F5F5F5/1A1A1A?text=6',
      'https://via.placeholder.com/133x92/F5F5F5/1A1A1A?text=7'
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
