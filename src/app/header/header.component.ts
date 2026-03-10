import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

interface NavLink {

  label: string;

  href: string;

  active?: boolean;

}

@Component({

  selector: 'app-header',

  standalone: true,

  imports: [CommonModule, RouterLink],

  templateUrl: './header.component.html',

  styleUrl: './header.component.css',

})

export class HeaderComponent {

  private router = inject(Router);

  readonly navLinks: readonly NavLink[] = [

    { label: 'Home', href: '/' },

    { label: 'Properties', href: '/properties' },

    { label: 'About', href: '/about' },

    { label: 'Amenities', href: '/amenities' },

    { label: 'Blog', href: '/blog' },

    { label: 'Contact', href: '/contact' },

  ];

  isActive(href: string): boolean {
    return this.router.url === href;
  }

}

