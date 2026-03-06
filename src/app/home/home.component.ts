import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { DifferentComponent } from '../different/different.component';
import { OurPropertiesComponent } from '../properties/our-properties/our-properties.component';
import { HomeAmenitiesComponent } from '../home-amenities/home-amenities.component';
import { HomePropertyTypesComponent } from '../home-property-types/home-property-types.component';
import { HomeRealStoriesComponent } from '../home-real-stories/home-real-stories.component';
import { HomeLifeNestComponent } from '../home-life-nest/home-life-nest.component';
import { HomeBlogComponent } from '../home-blog/home-blog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    DifferentComponent,
    OurPropertiesComponent,
    HomeAmenitiesComponent,
    HomePropertyTypesComponent,
    HomeRealStoriesComponent,
    HomeLifeNestComponent,
    HomeBlogComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
