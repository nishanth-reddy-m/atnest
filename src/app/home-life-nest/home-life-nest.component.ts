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
  readonly instagramIconSrc = 'https://www.figma.com/api/mcp/asset/d9fa4a2d-c06a-4f3d-bef3-4118fdfde029';
  readonly facebookIconSrc = 'https://www.figma.com/api/mcp/asset/bb2d93c2-1f58-40a7-b0ba-8e0c9f5a870c';
  readonly playIconSrc = 'https://www.figma.com/api/mcp/asset/aefd2261-1e22-49bf-8516-7ead774c579d';
  readonly playIconAltSrc = 'https://www.figma.com/api/mcp/asset/3f90b85a-a360-410a-9b35-d4be7d1ef9e8';

  readonly socialImages = [
    'https://www.figma.com/api/mcp/asset/6155b8f4-37cd-4446-87d4-87476ff0f40c',
    'https://www.figma.com/api/mcp/asset/9039b4eb-7d9f-4907-9836-78d10aa886de',
    'https://www.figma.com/api/mcp/asset/a2958c48-c985-45aa-a796-855a7a123209',
    'https://www.figma.com/api/mcp/asset/f93ce96a-9c80-424c-957e-85eaa62ecdd6',
    'https://www.figma.com/api/mcp/asset/2add9d9a-1a33-418c-a8ab-f34bc57fc58d',
    'https://www.figma.com/api/mcp/asset/34cda19e-7d82-4287-8f37-7fcab7c0bf54'
  ];

  readonly playIconTypes = [true, false, true, false, true, false];
}
