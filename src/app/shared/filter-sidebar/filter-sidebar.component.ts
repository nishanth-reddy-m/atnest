import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

export interface FilterState {
  priceRange: {
    min: number;
    max: number;
  };
  locations: string[];
  propertyTypes: string[];
}

@Component({
  selector: 'app-filter-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-sidebar.component.html',
  styleUrl: './filter-sidebar.component.css'
})
export class FilterSidebarComponent {
  @Output() filtersChanged = new EventEmitter<FilterState>();

  readonly locations = [
    'Hitech City',
    'Madhapur', 
    'Gachibowli',
    'Jubilee Hills',
    'Banjara Hills'
  ];

  readonly propertyTypes = [
    'Coliving',
    'Service Apartments',
    'Hotel'
  ];

  // Price range state
  priceMin = 0;
  priceMax = 50000;
  currentMin = 0;
  currentMax = 50000;

  // Drag state
  isDragging = false;
  activeSlider: 'min' | 'max' | null = null;

  // Slider position calculations based on dynamic container width
  get sliderContainerWidth(): number {
    const container = document.querySelector('.price-range__slider-container') as HTMLElement;
    if (container) {
      return container.offsetWidth;
    }
    // Fallback widths for different screen sizes
    if (typeof window !== 'undefined') {
      if (window.innerWidth <= 360) return 280;
      if (window.innerWidth <= 480) return 320;
      if (window.innerWidth <= 768) return 350;
      return 434;
    }
    return 434; // Default desktop width
  }

  get minSliderPixelPosition(): number {
    const percentage = (this.currentMin / this.priceMax) * 100;
    return (percentage / 100) * this.sliderContainerWidth;
  }

  get maxSliderPixelPosition(): number {
    const percentage = (this.currentMax / this.priceMax) * 100;
    return (percentage / 100) * this.sliderContainerWidth;
  }

  get trackFillWidth(): number {
    return this.maxSliderPixelPosition - this.minSliderPixelPosition;
  }

  get trackFillLeft(): number {
    return this.minSliderPixelPosition;
  }

  constructor() {
    // Add global event listeners
    this.addGlobalEventListeners();
  }

  private addGlobalEventListeners() {
    document.addEventListener('mousemove', this.onMouseMove.bind(this));
    document.addEventListener('mouseup', this.onMouseUp.bind(this));
    document.addEventListener('touchmove', this.onTouchMove.bind(this), { passive: false });
    document.addEventListener('touchend', this.onTouchEnd.bind(this));
  }

  // Selected filters
  selectedLocations: Set<string> = new Set(['Hitech City', 'Madhapur', 'Gachibowli']);
  selectedPropertyTypes: Set<string> = new Set(['Coliving', 'Service Apartments']);

  // Slider interaction methods
  onMinSliderDrag(event: MouseEvent) {
    event.preventDefault();
    this.isDragging = true;
    this.activeSlider = 'min';
  }

  onMaxSliderDrag(event: MouseEvent) {
    event.preventDefault();
    this.isDragging = true;
    this.activeSlider = 'max';
  }

  // Touch support for mobile
  onMinSliderTouch(event: TouchEvent) {
    event.preventDefault();
    this.isDragging = true;
    this.activeSlider = 'min';
  }

  onMaxSliderTouch(event: TouchEvent) {
    event.preventDefault();
    this.isDragging = true;
    this.activeSlider = 'max';
  }

  private onMouseMove(event: MouseEvent) {
    if (!this.isDragging) return;
    
    const container = document.querySelector('.price-range__slider-container') as HTMLElement;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const newValue = Math.round((percentage / 100) * this.priceMax);
    
    this.updateSliderValue(newValue);
  }

  private onTouchMove(event: TouchEvent) {
    if (!this.isDragging) return;
    event.preventDefault();
    
    const container = document.querySelector('.price-range__slider-container') as HTMLElement;
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    const touch = event.touches[0];
    const x = touch.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const newValue = Math.round((percentage / 100) * this.priceMax);
    
    this.updateSliderValue(newValue);
  }

  private updateSliderValue(newValue: number) {
    if (this.activeSlider === 'min') {
      if (newValue < this.currentMax - 1000) {
        this.currentMin = newValue;
        this.emitFiltersChanged();
      }
    } else if (this.activeSlider === 'max') {
      if (newValue > this.currentMin + 1000) {
        this.currentMax = newValue;
        this.emitFiltersChanged();
      }
    }
  }

  private onMouseUp() {
    this.isDragging = false;
    this.activeSlider = null;
  }

  private onTouchEnd() {
    this.isDragging = false;
    this.activeSlider = null;
  }

  onLocationChange(location: string, checked: boolean) {
    if (checked) {
      this.selectedLocations.add(location);
    } else {
      this.selectedLocations.delete(location);
    }
    this.emitFiltersChanged();
  }

  onPropertyTypeChange(type: string, checked: boolean) {
    if (checked) {
      this.selectedPropertyTypes.add(type);
    } else {
      this.selectedPropertyTypes.delete(type);
    }
    this.emitFiltersChanged();
  }

  resetAllFilters() {
    this.currentMin = 0;
    this.currentMax = 50000;
    this.selectedLocations.clear();
    this.selectedPropertyTypes.clear();
    this.emitFiltersChanged();
  }

  private emitFiltersChanged() {
    const filters: FilterState = {
      priceRange: {
        min: this.currentMin,
        max: this.currentMax
      },
      locations: Array.from(this.selectedLocations),
      propertyTypes: Array.from(this.selectedPropertyTypes)
    };
    this.filtersChanged.emit(filters);
  }

  formatPrice(price: number): string {
    return `₹${price.toLocaleString('en-IN')}`;
  }
}
