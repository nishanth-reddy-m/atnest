import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { DifferentComponent } from './different/different.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { OurPropertiesComponent } from './properties/our-properties/our-properties.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, DifferentComponent, OurPropertiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly title = 'atnest';

  constructor(private readonly theme: ThemeService) {}
}
