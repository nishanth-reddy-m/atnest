import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-life-nest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-life-nest.component.html',
  styleUrl: './home-life-nest.component.css',
})
export class HomeLifeNestComponent {
  readonly instagramIconSrc = 'https://www.figma.com/api/mcp/asset/344737f9-5f2b-43a6-a7ed-14c0ade11e6b';
  readonly facebookIconSrc = 'https://www.figma.com/api/mcp/asset/9de9b4e4-a1ce-418f-a353-84cebf38d3e0';
  readonly playIconSrc = 'https://www.figma.com/api/mcp/asset/1a400b14-0a72-4d9d-ac42-bc3951240f09';
  readonly playIconAltSrc = 'https://www.figma.com/api/mcp/asset/820d0e0b-0053-441f-8549-887ae36c1905';

  readonly socialImages = [
    'https://www.figma.com/api/mcp/asset/82600107-c72f-4e48-8c26-cdedb1b268d5',
    'https://www.figma.com/api/mcp/asset/9c8871f0-2eea-479c-805e-ebb8f31e10fd',
    'https://www.figma.com/api/mcp/asset/24c017ed-f95f-4592-8b10-fc46cb327472',
    'https://www.figma.com/api/mcp/asset/bb2109b7-c5b9-40f4-af7c-b6279faf1036',
    'https://www.figma.com/api/mcp/asset/18309522-d4df-447e-8c57-44d94b0f4023',
    'https://www.figma.com/api/mcp/asset/727a3ab7-fb92-4e4c-baf8-b03c16ce9ec4',
    'https://www.figma.com/api/mcp/asset/18309522-d4df-447e-8c57-44d94b0f4023'
  ];

  readonly playIconTypes = [true, false, true, false, true, false, true];
}
