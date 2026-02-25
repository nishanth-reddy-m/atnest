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

  readonly avatarPlaceholders = computed(() =>

    Array.from({ length: this.avatarCount() }, (_, i) => i + 1)

  );

}

