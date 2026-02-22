import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  HERO_AMENITIES,
  HERO_AVATAR_COUNT,
  HERO_CITIES,
  HERO_PRICE_PER_DAY,
  HERO_RATING,
  HERO_RATING_CAPTION,
  HERO_TABS,
  type HeroTab,
} from './hero.model';
import { HeroAmenitiesComponent } from './hero-amenities/hero-amenities.component';
import { HeroGalleryComponent } from './hero-gallery/hero-gallery.component';
import { HeroPriceRatingComponent } from './hero-price-rating/hero-price-rating.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { HeroTabsComponent } from './hero-tabs/hero-tabs.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule,
    HeroTabsComponent,
    HeroSearchComponent,
    HeroAmenitiesComponent,
    HeroPriceRatingComponent,
    HeroGalleryComponent,
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  readonly tabs = HERO_TABS;
  readonly activeTab = signal<HeroTab>(HERO_TABS[0]);
  readonly cities = HERO_CITIES;
  readonly amenities = HERO_AMENITIES;
  readonly pricePerDay = HERO_PRICE_PER_DAY;
  readonly rating = HERO_RATING;
  readonly ratingCaption = HERO_RATING_CAPTION;
  readonly avatarCount = HERO_AVATAR_COUNT;
}
