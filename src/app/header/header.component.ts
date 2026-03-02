import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';



interface NavLink {

  label: string;

  href: string;

  active?: boolean;

}



@Component({

  selector: 'app-header',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './header.component.html',

  styleUrl: './header.component.css',

})

export class HeaderComponent {

  readonly navLinks: readonly NavLink[] = [

    { label: 'Home', href: '#', active: true },

    { label: 'Properties', href: '#properties' },

    { label: 'About', href: '#about' },

    { label: 'Amenities', href: '#amenities' },

    { label: 'Blog', href: '#blog' },

    { label: 'Contact', href: '#contact' },

  ];

}

