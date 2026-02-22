import { CommonModule } from '@angular/common';
import { Component, input, output } from '@angular/core';
import type { HeroTab } from '../hero.model';

@Component({
  selector: 'app-hero-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-tabs.component.html',
  styleUrl: './hero-tabs.component.css',
})
export class HeroTabsComponent {
  readonly tabs = input.required<readonly HeroTab[]>();
  readonly activeTab = input.required<HeroTab>();

  readonly tabChange = output<HeroTab>();

  readonly tabIcons: Record<HeroTab, string> = {
    'Co Living': 'assets/icons/tab-coliving.svg',
    Hotels: 'assets/icons/tab-hotels.svg',
    'Service Apartments': 'assets/icons/tab-service-apartments.svg',
  };

  onTabClick(tab: HeroTab): void {
    this.tabChange.emit(tab);
  }
}
