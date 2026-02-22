import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { DifferentComponent } from './different/different.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, HeroComponent, DifferentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly title = 'atnest';

  constructor(private readonly theme: ThemeService) {}
}
