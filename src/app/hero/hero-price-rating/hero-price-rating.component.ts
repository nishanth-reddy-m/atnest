import { Component, computed, input } from '@angular/core';



@Component({

  selector: 'app-hero-price-rating',

  standalone: true,

  templateUrl: './hero-price-rating.component.html',

  styleUrl: './hero-price-rating.component.css',

})

export class HeroPriceRatingComponent {

  readonly pricePerDay = input.required<string>();

  readonly rating = input.required<number>();

  readonly ratingCaption = input.required<string>();

  readonly avatarCount = input.required<number>();

  readonly avatars = computed(() => [
    'assets/images/hero avatars/pexels-stefanstefancik-91227 1.png',
    'assets/images/hero avatars/pexels-olly-874158 1.png',
    'assets/images/hero avatars/pexels-enginakyurt-1642228 1.png',
    'assets/images/hero avatars/pexels-chloekalaartist-1043474 1.png'
  ]);

}
