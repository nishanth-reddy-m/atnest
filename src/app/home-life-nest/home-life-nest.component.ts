import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-life-nest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-life-nest.component.html',
  styleUrl: './home-life-nest.component.css',
})
export class HomeLifeNestComponent {
  readonly socialImages = [
    'assets/images/social wall/Image (Social)-5.png',
    'assets/images/social wall/Image (Social)-4.png',
    'assets/images/social wall/Image (Social)-3.png',
    'assets/images/social wall/Image (Social)-2.png',
    'assets/images/social wall/Image (Social)-1.png',
    'assets/images/social wall/Image (Social).png'
  ];

  readonly playIconTypes = [true, false, true, false, true, false];
}
