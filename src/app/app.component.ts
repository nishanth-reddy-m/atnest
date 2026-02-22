import { Component } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { HeroComponent } from './hero/hero.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  readonly title = 'atnest';

  constructor(private readonly theme: ThemeService) {}
}
