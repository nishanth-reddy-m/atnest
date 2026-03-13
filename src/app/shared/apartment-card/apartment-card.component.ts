import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ApartmentData {
  type: string;
  size: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  balconies: number;
  isSelected?: boolean;
}

@Component({
  selector: 'app-apartment-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './apartment-card.component.html',
  styleUrls: ['./apartment-card.component.css']
})
export class ApartmentCardComponent {
  @Input() apartment: ApartmentData;
  @Output() select = new EventEmitter<ApartmentData>();

  constructor() {
    this.apartment = {
      type: '',
      size: '',
      price: '',
      bedrooms: 1,
      bathrooms: 1,
      balconies: 1,
      isSelected: false
    };
  }

  onSelectApartment() {
    this.select.emit(this.apartment);
  }
}
