import { CommonModule } from '@angular/common';

import { Component } from '@angular/core';



interface DifferentFeature {

  label: string;

}



@Component({

  selector: 'app-different',

  standalone: true,

  imports: [CommonModule],

  templateUrl: './different.component.html',

  styleUrl: './different.component.css',

})

export class DifferentComponent {

  readonly features: readonly DifferentFeature[] = [

    {

      label: 'Guest is GOD Philosophy',

    },

    {

      label: 'Clean Spaces',

    },

    {

      label: 'Near IT Corridor',

    },

    {

      label: 'Food like at Home',

    },

    {

      label: 'Community Focused',

    },

    {

      label: 'Sustainable Operations',

    },

    {

      label: 'Smart Technology',

    },

    {

      label: '24/7 Concierge',

    },

    {

      label: 'Aesthetically Designed Interiors',

    },

  ];



  readonly modelImageSrc = 'assets/sections/different-model.png';

}

