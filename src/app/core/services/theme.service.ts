import { Injectable, signal, computed } from '@angular/core';

export type ThemeId = 'light' | 'dark';

const STORAGE_KEY = 'atnest-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeSignal = signal<ThemeId>(this.loadStoredTheme());

  readonly theme = this.themeSignal.asReadonly();
  readonly isDark = computed(() => this.themeSignal() === 'dark');

  constructor() {
    this.applyTheme(this.themeSignal());
  }

  setTheme(theme: ThemeId): void {
    this.themeSignal.set(theme);
    this.applyTheme(theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // ignore
    }
  }

  toggleTheme(): void {
    this.setTheme(this.themeSignal() === 'dark' ? 'light' : 'dark');
  }

  private applyTheme(theme: ThemeId): void {
    const doc = document.documentElement;
    doc.classList.remove('theme-light', 'theme-dark');
    doc.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
  }

  private loadStoredTheme(): ThemeId {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'dark' || stored === 'light') return stored;
    } catch {
      // ignore
    }
    return 'light';
  }
}
