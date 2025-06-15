import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  authorAvatar: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="blog-page">
      <div class="blog-header">
        <div class="container">
          <h1 class="page-title">WeLearn Blog</h1>
          <p class="page-description">
            Insights, tips, and stories from the world of online learning and education technology.
          </p>
        </div>
      </div>
      
      <div class="blog-content">
        <div class="container">
          <div class="featured-post">
            <div class="featured-image">
              <img [src]="featuredPost.image" [alt]="featuredPost.title" loading="lazy">
              <div class="featured-overlay">
                <div class="featured-category">{{ featuredPost.category }}</div>
              </div>
            </div>
            <div class="featured-content">
              <h2 class="featured-title">{{ featuredPost.title }}</h2>
              <p class="featured-excerpt">{{ featuredPost.excerpt }}</p>
              <div class="featured-meta">
                <div class="author-info">
                  <img [src]="featuredPost.authorAvatar" [alt]="featuredPost.author" class="author-avatar">
                  <span class="author-name">{{ featuredPost.author }}</span>
                </div>
                <div class="post-meta">
                  <span class="publish-date">{{ featuredPost.publishDate }}</span>
                  <span class="read-time">{{ featuredPost.readTime }} read</span>
                </div>
              </div>
              <button class="btn btn-primary">Read More</button>
            </div>
          </div>
          
          <div class="blog-grid">
            <div class="posts-section">
              <h2 class="section-title">Latest Posts</h2>
              <div class="posts-grid">
                <article *ngFor="let post of blogPosts" class="post-card">
                  <div class="post-image">
                    <img [src]="post.image" [alt]="post.title" loading="lazy">
                    <div class="post-category">{{ post.category }}</div>
                  </div>
                  <div class="post-content">
                    <h3 class="post-title">{{ post.title }}</h3>
                    <p class="post-excerpt">{{ post.excerpt }}</p>
                    <div class="post-meta">
                      <div class="author-info">
                        <img [src]="post.authorAvatar" [alt]="post.author" class="author-avatar">
                        <span class="author-name">{{ post.author }}</span>
                      </div>
                      <div class="meta-info">
                        <span class="publish-date">{{ post.publishDate }}</span>
                        <span class="read-time">{{ post.readTime }}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            
            <div class="sidebar">
              <div class="sidebar-card">
                <h3>Categories</h3>
                <div class="categories-list">
                  <a href="#" class="category-link">
                    <span>Web Development</span>
                    <span class="post-count">12</span>
                  </a>
                  <a href="#" class="category-link">
                    <span>Data Science</span>
                    <span class="post-count">8</span>
                  </a>
                  <a href="#" class="category-link">
                    <span>Design</span>
                    <span class="post-count">15</span>
                  </a>
                  <a href="#" class="category-link">
                    <span>Career Tips</span>
                    <span class="post-count">6</span>
                  </a>
                  <a href="#" class="category-link">
                    <span>Technology</span>
                    <span class="post-count">10</span>
                  </a>
                </div>
              </div>
              
              <div class="sidebar-card">
                <h3>Popular Tags</h3>
                <div class="tags-cloud">
                  <span class="tag">JavaScript</span>
                  <span class="tag">React</span>
                  <span class="tag">Python</span>
                  <span class="tag">UI/UX</span>
                  <span class="tag">Machine Learning</span>
                  <span class="tag">CSS</span>
                  <span class="tag">Node.js</span>
                  <span class="tag">Career</span>
                </div>
              </div>
              
              <div class="sidebar-card">
                <h3>Newsletter</h3>
                <p class="newsletter-text">Get the latest posts delivered right to your inbox.</p>
                <form class="newsletter-form">
                  <input type="email" placeholder="Your email address" class="newsletter-input">
                  <button type="submit" class="btn btn-primary">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .blog-page {
      min-height: 100vh;
      padding-top: 80px;
    }

    .blog-header {
      background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
      color: white;
      padding: var(--space-20) 0;
      text-align: center;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: var(--space-4);
    }

    .page-description {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
    }

    .blog-content {
      padding: var(--space-20) 0;
      background: var(--neutral-50);
    }

    .featured-post {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-12);
      background: white;
      border-radius: var(--radius-2xl);
      overflow: hidden;
      box-shadow: var(--shadow-xl);
      margin-bottom: var(--space-20);
    }

    .featured-image {
      position: relative;
      aspect-ratio: 4/3;
      overflow: hidden;
    }

    .featured-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .featured-overlay {
      position: absolute;
      top: var(--space-6);
      left: var(--space-6);
    }

    .featured-category {
      background: var(--primary-600);
      color: white;
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-lg);
      font-size: 0.875rem;
      font-weight: 500;
    }

    .featured-content {
      padding: var(--space-8);
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .featured-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--neutral-900);
      margin-bottom: var(--space-4);
      line-height: 1.3;
    }

    .featured-excerpt {
      font-size: 1.125rem;
      color: var(--neutral-600);
      line-height: 1.6;
      margin-bottom: var(--space-6);
    }

    .featured-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-6);
    }

    .author-info {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }

    .author-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .author-name {
      font-weight: 500;
      color: var(--neutral-700);
    }

    .post-meta {
      display: flex;
      gap: var(--space-4);
      font-size: 0.875rem;
      color: var(--neutral-500);
    }

    .blog-grid {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--space-16);
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--neutral-900);
      margin-bottom: var(--space-8);
    }

    .posts-grid {
      display: grid;
      gap: var(--space-8);
    }

    .post-card {
      background: white;
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-normal);
    }

    .post-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
    }

    .post-image {
      position: relative;
      aspect-ratio: 16/9;
      overflow: hidden;
    }

    .post-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-slow);
    }

    .post-card:hover .post-image img {
      transform: scale(1.05);
    }

    .post-category {
      position: absolute;
      top: var(--space-4);
      left: var(--space-4);
      background: var(--primary-600);
      color: white;
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-lg);
      font-size: 0.75rem;
      font-weight: 500;
    }

    .post-content {
      padding: var(--space-6);
    }

    .post-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-3);
      line-height: 1.3;
    }

    .post-excerpt {
      color: var(--neutral-600);
      line-height: 1.6;
      margin-bottom: var(--space-4);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .meta-info {
      display: flex;
      gap: var(--space-2);
      font-size: 0.875rem;
      color: var(--neutral-500);
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      gap: var(--space-8);
    }

    .sidebar-card {
      background: white;
      padding: var(--space-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
    }

    .sidebar-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-6);
    }

    .categories-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .category-link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-3);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--neutral-700);
      transition: all var(--transition-fast);
    }

    .category-link:hover {
      background: var(--primary-50);
      color: var(--primary-600);
    }

    .post-count {
      background: var(--neutral-100);
      color: var(--neutral-600);
      padding: var(--space-1) var(--space-2);
      border-radius: var(--radius-md);
      font-size: 0.75rem;
      font-weight: 500;
    }

    .tags-cloud {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2);
    }

    .tag {
      background: var(--neutral-100);
      color: var(--neutral-600);
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-lg);
      font-size: 0.875rem;
      text-decoration: none;
      transition: all var(--transition-fast);
      cursor: pointer;
    }

    .tag:hover {
      background: var(--primary-100);
      color: var(--primary-600);
    }

    .newsletter-text {
      color: var(--neutral-600);
      margin-bottom: var(--space-4);
      line-height: 1.5;
    }

    .newsletter-form {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .newsletter-input {
      padding: var(--space-3);
      border: 2px solid var(--neutral-200);
      border-radius: var(--radius-lg);
      font-size: 14px;
    }

    .newsletter-input:focus {
      outline: none;
      border-color: var(--primary-500);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2.25rem;
      }

      .featured-post {
        grid-template-columns: 1fr;
      }

      .featured-content {
        padding: var(--space-6);
      }

      .featured-title {
        font-size: 1.5rem;
      }

      .featured-meta {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-3);
      }

      .blog-grid {
        grid-template-columns: 1fr;
      }

      .section-title {
        font-size: 1.5rem;
      }
    }
  `]
})
export class BlogComponent {
  featuredPost: BlogPost = {
    id: '1',
    title: 'The Future of Online Learning: Trends to Watch in 2024',
    excerpt: 'Discover the latest trends shaping the future of online education, from AI-powered personalization to immersive virtual reality experiences.',
    content: '',
    author: 'Sarah Johnson',
    authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    publishDate: 'Mar 15, 2024',
    readTime: '8 min',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['EdTech', 'Future', 'AI', 'VR']
  };

  blogPosts: BlogPost[] = [
    {
      id: '2',
      title: '10 Essential Skills Every Web Developer Should Master',
      excerpt: 'From HTML fundamentals to advanced JavaScript frameworks, here are the must-have skills for modern web development.',
      content: '',
      author: 'Michael Chen',
      authorAvatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      publishDate: 'Mar 12, 2024',
      readTime: '6 min',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['JavaScript', 'HTML', 'CSS', 'React']
    },
    {
      id: '3',
      title: 'How to Build a Successful Career in Data Science',
      excerpt: 'A comprehensive guide to breaking into data science, including essential skills, portfolio tips, and job search strategies.',
      content: '',
      author: 'Emily Rodriguez',
      authorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      publishDate: 'Mar 10, 2024',
      readTime: '10 min',
      category: 'Career Tips',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Data Science', 'Career', 'Python', 'Analytics']
    },
    {
      id: '4',
      title: 'Design Principles That Every Developer Should Know',
      excerpt: 'Understanding basic design principles can make you a better developer and improve your user interfaces significantly.',
      content: '',
      author: 'David Kim',
      authorAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      publishDate: 'Mar 8, 2024',
      readTime: '7 min',
      category: 'Design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Design', 'UI/UX', 'Principles', 'Development']
    },
    {
      id: '5',
      title: 'The Rise of Remote Learning: Benefits and Challenges',
      excerpt: 'Exploring how remote learning has transformed education and what it means for students and educators worldwide.',
      content: '',
      author: 'Lisa Anderson',
      authorAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      publishDate: 'Mar 5, 2024',
      readTime: '9 min',
      category: 'Education',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Remote Learning', 'Education', 'Online', 'Technology']
    }
  ];
}