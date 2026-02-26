import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  readonly emailIconSrc = 'https://www.figma.com/api/mcp/asset/c0130501-97b9-4efa-aa60-98b7ba86440b';
  readonly inputIconSrc = 'https://www.figma.com/api/mcp/asset/90eaf9f2-ac3c-4623-8596-31b7e92cb22e';
  readonly arrowIconSrc = 'https://www.figma.com/api/mcp/asset/cecfce41-0ea8-408e-893a-78424f0192d3';
  readonly logoSrc = 'https://www.figma.com/api/mcp/asset/644b9de8-6495-414d-8d7c-7eefad2ec3b4';
  readonly locationIconSrc = 'https://www.figma.com/api/mcp/asset/200759fb-f314-49e6-ad6a-34cc369860ae';
  readonly facebookIconSrc = 'https://www.figma.com/api/mcp/asset/9be19a22-204d-4959-b4ce-f1f4cc4af0e0';
  readonly twitterIconSrc = 'https://www.figma.com/api/mcp/asset/eaf392dd-fc59-4c63-86fe-dfad6acbdd67';
  readonly instagramIconSrc = 'https://www.figma.com/api/mcp/asset/2efee10b-b914-4558-a7af-69f0c6070e35';
  readonly linkedinIconSrc = 'https://www.figma.com/api/mcp/asset/367a492e-f7e0-4adb-b08d-0c543a777d17';
  readonly youtubeIconSrc = 'https://www.figma.com/api/mcp/asset/cc38bc02-a191-44fb-b9e8-17aeaa4aa7b6';
  readonly heartIconSrc = 'https://www.figma.com/api/mcp/asset/2e77a9d2-a2c7-466e-b98c-7ae6a9cf4731';
  readonly secureIconSrc = 'https://www.figma.com/api/mcp/asset/c241ebe6-2168-42ba-88ca-9419d680a372';
  readonly flagIconSrc = 'https://www.figma.com/api/mcp/asset/b7407411-3539-4e2f-8d0f-ba71d8940013';
}
