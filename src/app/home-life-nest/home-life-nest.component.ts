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
  readonly instagramIconSrc = 'https://www.figma.com/api/mcp/asset/9890ff6d-5711-4024-87f1-5906164a2b96';
  readonly facebookIconSrc = 'https://www.figma.com/api/mcp/asset/679c585c-a19f-4178-b9bd-3b7b7ef3705c';
  readonly playIconSrc = 'https://www.figma.com/api/mcp/asset/c6c936bc-86c3-42b0-8600-8ff1581e5b0c';
  readonly playIconAltSrc = 'https://www.figma.com/api/mcp/asset/68e77f2b-9e61-45e3-b284-cfa2a5e29152';

  readonly socialImages = [
    'https://www.figma.com/api/mcp/asset/2e2b7128-0559-493f-b818-89d5321e6d17',
    'https://www.figma.com/api/mcp/asset/114baa34-64f8-4f93-a161-46cea14390fe',
    'https://www.figma.com/api/mcp/asset/68086f1b-242d-43ad-9a64-2c480ff91591',
    'https://www.figma.com/api/mcp/asset/a1ceda5d-7fd7-44cd-ae35-fdc0123e5495',
    'https://www.figma.com/api/mcp/asset/8eaf49da-6839-4337-a113-83b85d5abefa',
    'https://www.figma.com/api/mcp/asset/13f59dbb-c266-4eac-9d95-03592024a072'
  ];

  readonly playIconTypes = [true, false, true, false, true, false];
}
