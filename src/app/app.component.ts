import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { DifferentComponent } from './different/different.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { HomeAmenitiesComponent } from './home-amenities/home-amenities.component';
import { HomePropertyTypesComponent } from './home-property-types/home-property-types.component';
import { HomeLifeNestComponent } from './home-life-nest/home-life-nest.component';
import { HomeBlogComponent } from './home-blog/home-blog.component';
import { FooterComponent } from './footer/footer.component';
import { HomeRealStoriesComponent } from './home-real-stories/home-real-stories.component';
import { OurPropertiesComponent } from './properties/our-properties/our-properties.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    DifferentComponent,
    OurPropertiesComponent,
    HomeAmenitiesComponent,
    HomePropertyTypesComponent,
    HomeLifeNestComponent,
    HomeBlogComponent,
    FooterComponent,
    HomeRealStoriesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly title = 'atnest';

  constructor(private readonly theme: ThemeService) {}
}
