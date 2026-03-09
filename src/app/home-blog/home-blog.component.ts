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
  readonly blogPosts: readonly BlogPost[] = [
    {
      id: '1',
      title: 'How to Choose the Perfect Co-living Space in Hyderabad',
      description: 'Finding the right place to live can be overwhelming. Here\'s our comprehensive guide to choosing a space that fits your lifestyle...',
      imageSrc: 'assets/images/Blog Card/Image (How to Choose the Perfect Co-living Space in Hyderabad).png',
      category: 'Living Tips',
      date: 'Jan 24, 2026',
      author: 'Sneha Reddy',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'The Rise of Digital Nomadism: Why @nest is the Future',
      description: 'With more people working remotely, the need for flexible, high-end housing is growing. Discover why we\'re the preferred choice...',
      imageSrc: 'assets/images/Blog Card/Image (The Rise of Digital Nomadism_ Why @nest is the Future).png',
      category: 'Trends',
      date: 'Jan 20, 2026',
      author: 'Rahul Varma',
      readTime: '7 min read'
    },
    {
      id: '3',
      title: 'Community & Networking: The Secret Sauce of Co-living',
      description: 'It\'s not just about four walls. It\'s about the people you meet. Learn how our community events change the way you live...',
      imageSrc: 'assets/images/Blog Card/Image (Community & Networking_ The Secret Sauce of Co-living).png',
      category: 'Community',
      date: 'Jan 15, 2026',
      author: 'Priya Sharma',
      readTime: '6 min read'
    }
  ];
}
