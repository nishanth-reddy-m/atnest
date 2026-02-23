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
  readonly emailIconSrc = 'https://www.figma.com/api/mcp/asset/f9452a7a-e1c9-4034-96e2-6e4539c961d1';
  readonly inputIconSrc = 'https://www.figma.com/api/mcp/asset/5acf0eed-5943-44e5-b08a-10d1a69f297c';
  readonly arrowIconSrc = 'https://www.figma.com/api/mcp/asset/b65e6800-6e10-4ecb-9522-e113c7bcdd61';
  readonly logoSrc = 'https://www.figma.com/api/mcp/asset/2675aff4-0f76-45c4-a552-a22406b66ab4';
  readonly locationIconSrc = 'https://www.figma.com/api/mcp/asset/37c52cd6-5937-416d-938b-8388581b1bd6';
  readonly facebookIconSrc = 'https://www.figma.com/api/mcp/asset/927a1d62-0241-4b11-addd-1f3ec7cbe84c';
  readonly twitterIconSrc = 'https://www.figma.com/api/mcp/asset/93ce5a65-a852-4791-a428-50c964c80956';
  readonly instagramIconSrc = 'https://www.figma.com/api/mcp/asset/dfb132dc-b80c-4964-9823-e44a7c0a62f9';
  readonly linkedinIconSrc = 'https://www.figma.com/api/mcp/asset/137aea42-805e-4ff5-bfb8-88bec6bc5d15';
  readonly youtubeIconSrc = 'https://www.figma.com/api/mcp/asset/e5522365-eb89-447e-b88b-e2a0a735fb5a';
  readonly heartIconSrc = 'https://www.figma.com/api/mcp/asset/f509f38a-bd16-4327-bde7-b9d185db58c6';
  readonly secureIconSrc = 'https://www.figma.com/api/mcp/asset/ac69fa1e-07f1-418e-aff6-9942ad91dd88';
  readonly flagIconSrc = 'https://www.figma.com/api/mcp/asset/d04ca13c-1f31-4309-958a-1554cf7df138';
}
