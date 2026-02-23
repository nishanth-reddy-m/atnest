import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
}

@Component({
  selector: 'app-home-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-blog.component.html',
  styleUrl: './home-blog.component.css',
})
export class HomeBlogComponent {
  readonly calendarIconSrc = 'https://www.figma.com/api/mcp/asset/e3181ecf-433a-4e8c-9e76-f2471b2f6502';
  readonly arrowIconSrc = 'https://www.figma.com/api/mcp/asset/5ce6b614-967b-4ac0-8f84-40330824514b';
  readonly userIconSrc = 'https://www.figma.com/api/mcp/asset/ac47ffd0-af47-47bc-a4bd-7765d2b77e05';

  readonly blogPosts: readonly BlogPost[] = [
    {
      id: '1',
      title: 'How to Choose the Perfect Co-living Space in Hyderabad',
      description: 'Finding the right place to live can be overwhelming. Here\'s our comprehensive guide to choosing a space that fits your lifestyle...',
      imageSrc: 'https://www.figma.com/api/mcp/asset/ac783919-5b11-47b3-a01d-efd68fb5fb6f',
      category: 'Living Tips',
      date: 'Jan 24, 2026',
      author: 'Sneha Reddy',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'The Rise of Digital Nomadism: Why &#64;nest is the Future',
      description: 'With more people working remotely, the need for flexible, high-end housing is growing. Discover why we\'re the preferred choice...',
      imageSrc: 'https://www.figma.com/api/mcp/asset/65231479-84b8-4877-8a18-3c0384c33405',
      category: 'Trends',
      date: 'Jan 20, 2026',
      author: 'Rahul Varma',
      readTime: '7 min read'
    },
    {
      id: '3',
      title: 'Community & Networking: The Secret Sauce of Co-living',
      description: 'It\'s not just about four walls. It\'s about the people you meet. Learn how our community events change the way you live...',
      imageSrc: 'https://www.figma.com/api/mcp/asset/5aa4a241-23a0-4726-a60b-f096a0110cc1',
      category: 'Community',
      date: 'Jan 15, 2026',
      author: 'Priya Sharma',
      readTime: '6 min read'
    }
  ];
}
