import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface PressRelease {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  category: string;
}

interface MediaMention {
  id: string;
  publication: string;
  title: string;
  date: string;
  logo: string;
  url: string;
}

@Component({
  selector: 'app-press',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="press-page">
      <div class="press-header">
        <div class="container">
          <h1 class="page-title">Press & Media</h1>
          <p class="page-description">
            Latest news, press releases, and media coverage about WeLearn's mission to transform online education.
          </p>
        </div>
      </div>
      
      <div class="press-content">
        <div class="container">
          <div class="press-kit-section">
            <div class="press-kit-card">
              <h2 class="kit-title">Press Kit</h2>
              <p class="kit-description">
                Download our press kit for logos, brand guidelines, executive photos, and company information.
              </p>
              <div class="kit-items">
                <div class="kit-item">
                  <i class="fas fa-download"></i>
                  <span>Brand Assets</span>
                </div>
                <div class="kit-item">
                  <i class="fas fa-image"></i>
                  <span>High-res Photos</span>
                </div>
                <div class="kit-item">
                  <i class="fas fa-file-pdf"></i>
                  <span>Company Fact Sheet</span>
                </div>
              </div>
              <button class="btn btn-primary btn-lg">Download Press Kit</button>
            </div>
          </div>
          
          <div class="content-grid">
            <div class="main-content">
              <section class="press-releases">
                <h2 class="section-title">Press Releases</h2>
                <div class="releases-list">
                  <article *ngFor="let release of pressReleases" class="release-card">
                    <div class="release-header">
                      <span class="release-category">{{ release.category }}</span>
                      <span class="release-date">{{ release.date }}</span>
                    </div>
                    <h3 class="release-title">{{ release.title }}</h3>
                    <p class="release-excerpt">{{ release.excerpt }}</p>
                    <button class="btn btn-outline">Read Full Release</button>
                  </article>
                </div>
              </section>
              
              <section class="media-mentions">
                <h2 class="section-title">In the News</h2>
                <div class="mentions-grid">
                  <div *ngFor="let mention of mediaMentions" class="mention-card">
                    <div class="mention-logo">
                      <img [src]="mention.logo" [alt]="mention.publication" loading="lazy">
                    </div>
                    <div class="mention-content">
                      <h4 class="mention-title">{{ mention.title }}</h4>
                      <div class="mention-meta">
                        <span class="mention-publication">{{ mention.publication }}</span>
                        <span class="mention-date">{{ mention.date }}</span>
                      </div>
                    </div>
                    <a href="#" class="mention-link">
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                  </div>
                </div>
              </section>
            </div>
            
            <div class="sidebar">
              <div class="contact-card">
                <h3>Media Contact</h3>
                <div class="contact-info">
                  <div class="contact-item">
                    <strong>Sarah Mitchell</strong>
                    <span>Head of Communications</span>
                  </div>
                  <div class="contact-item">
                    <i class="fas fa-envelope"></i>
                    <span>press&#64;welearn.com</span>
                  </div>
                  <div class="contact-item">
                    <i class="fas fa-phone"></i>
                    <span>+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
              
              <div class="stats-card">
                <h3>Company Stats</h3>
                <div class="stats-list">
                  <div class="stat-item">
                    <span class="stat-number">10M+</span>
                    <span class="stat-label">Students Worldwide</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">5,000+</span>
                    <span class="stat-label">Courses Available</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">500+</span>
                    <span class="stat-label">Expert Instructors</span>
                  </div>
                  <div class="stat-item">
                    <span class="stat-number">190+</span>
                    <span class="stat-label">Countries Served</span>
                  </div>
                </div>
              </div>
              
              <div class="awards-card">
                <h3>Awards & Recognition</h3>
                <div class="awards-list">
                  <div class="award-item">
                    <div class="award-year">2024</div>
                    <div class="award-info">
                      <strong>Best EdTech Platform</strong>
                      <span>TechCrunch Awards</span>
                    </div>
                  </div>
                  <div class="award-item">
                    <div class="award-year">2023</div>
                    <div class="award-info">
                      <strong>Innovation in Education</strong>
                      <span>Education Week</span>
                    </div>
                  </div>
                  <div class="award-item">
                    <div class="award-year">2023</div>
                    <div class="award-info">
                      <strong>Top 50 EdTech Companies</strong>
                      <span>Forbes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .press-page {
      min-height: 100vh;
      padding-top: 80px;
    }

    .press-header {
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

    .press-content {
      padding: var(--space-20) 0;
      background: var(--neutral-50);
    }

    .press-kit-section {
      margin-bottom: var(--space-20);
    }

    .press-kit-card {
      background: linear-gradient(135deg, var(--secondary-500), var(--secondary-600));
      color: white;
      padding: var(--space-12);
      border-radius: var(--radius-2xl);
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .kit-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: var(--space-4);
    }

    .kit-description {
      font-size: 1.125rem;
      opacity: 0.9;
      margin-bottom: var(--space-8);
      line-height: 1.6;
    }

    .kit-items {
      display: flex;
      justify-content: center;
      gap: var(--space-8);
      margin-bottom: var(--space-8);
    }

    .kit-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
      font-weight: 500;
    }

    .kit-item i {
      font-size: 2rem;
      color: var(--accent-300);
    }

    .content-grid {
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

    .press-releases {
      margin-bottom: var(--space-16);
    }

    .releases-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
    }

    .release-card {
      background: white;
      padding: var(--space-8);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
      transition: transform var(--transition-normal);
    }

    .release-card:hover {
      transform: translateY(-2px);
    }

    .release-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-4);
    }

    .release-category {
      background: var(--primary-100);
      color: var(--primary-700);
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-lg);
      font-size: 0.875rem;
      font-weight: 500;
    }

    .release-date {
      font-size: 0.875rem;
      color: var(--neutral-500);
    }

    .release-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-3);
      line-height: 1.3;
    }

    .release-excerpt {
      color: var(--neutral-600);
      line-height: 1.6;
      margin-bottom: var(--space-6);
    }

    .mentions-grid {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .mention-card {
      background: white;
      padding: var(--space-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-sm);
      display: flex;
      align-items: center;
      gap: var(--space-4);
      transition: all var(--transition-normal);
    }

    .mention-card:hover {
      box-shadow: var(--shadow-md);
      transform: translateY(-2px);
    }

    .mention-logo {
      width: 60px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--neutral-50);
      border-radius: var(--radius-lg);
      flex-shrink: 0;
    }

    .mention-logo img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .mention-content {
      flex: 1;
    }

    .mention-title {
      font-size: 1rem;
      font-weight: 500;
      color: var(--neutral-900);
      margin-bottom: var(--space-2);
      line-height: 1.3;
    }

    .mention-meta {
      display: flex;
      gap: var(--space-3);
      font-size: 0.875rem;
      color: var(--neutral-500);
    }

    .mention-link {
      color: var(--primary-500);
      text-decoration: none;
      padding: var(--space-2);
      border-radius: var(--radius-md);
      transition: all var(--transition-fast);
    }

    .mention-link:hover {
      background: var(--primary-50);
      color: var(--primary-600);
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      gap: var(--space-8);
    }

    .contact-card,
    .stats-card,
    .awards-card {
      background: white;
      padding: var(--space-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
    }

    .contact-card h3,
    .stats-card h3,
    .awards-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-6);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .contact-item {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    .contact-item strong {
      color: var(--neutral-900);
    }

    .contact-item span {
      color: var(--neutral-600);
      font-size: 0.875rem;
    }

    .contact-item i {
      color: var(--primary-500);
      width: 16px;
      margin-right: var(--space-2);
    }

    .stats-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .stat-item {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    .stat-number {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-600);
    }

    .stat-label {
      font-size: 0.875rem;
      color: var(--neutral-600);
    }

    .awards-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .award-item {
      display: flex;
      gap: var(--space-4);
      align-items: flex-start;
    }

    .award-year {
      background: var(--primary-100);
      color: var(--primary-700);
      padding: var(--space-1) var(--space-2);
      border-radius: var(--radius-md);
      font-size: 0.75rem;
      font-weight: 600;
      flex-shrink: 0;
    }

    .award-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    .award-info strong {
      color: var(--neutral-900);
      font-size: 0.875rem;
    }

    .award-info span {
      color: var(--neutral-600);
      font-size: 0.75rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2.25rem;
      }

      .kit-items {
        flex-direction: column;
        gap: var(--space-4);
      }

      .content-grid {
        grid-template-columns: 1fr;
      }

      .release-header {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-2);
      }

      .mention-card {
        flex-direction: column;
        text-align: center;
      }

      .mention-meta {
        justify-content: center;
      }
    }
  `]
})
export class PressComponent {
  pressReleases: PressRelease[] = [
    {
      id: '1',
      title: 'WeLearn Raises $50M Series B to Expand Global Online Learning Platform',
      date: 'March 15, 2024',
      excerpt: 'Funding will accelerate international expansion and development of AI-powered personalized learning features.',
      category: 'Funding'
    },
    {
      id: '2',
      title: 'WeLearn Partners with Top Universities to Offer Accredited Online Degrees',
      date: 'February 28, 2024',
      excerpt: 'New partnership program brings university-level education to millions of learners worldwide.',
      category: 'Partnership'
    },
    {
      id: '3',
      title: 'WeLearn Launches Mobile App with Offline Learning Capabilities',
      date: 'February 10, 2024',
      excerpt: 'New mobile application enables students to download courses and learn without internet connection.',
      category: 'Product'
    },
    {
      id: '4',
      title: 'WeLearn Reaches 10 Million Students Milestone',
      date: 'January 20, 2024',
      excerpt: 'Platform celebrates major growth milestone as demand for online learning continues to surge.',
      category: 'Milestone'
    }
  ];

  mediaMentions: MediaMention[] = [
    {
      id: '1',
      publication: 'TechCrunch',
      title: 'How WeLearn is Revolutionizing Online Education',
      date: 'March 12, 2024',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      url: '#'
    },
    {
      id: '2',
      publication: 'Forbes',
      title: 'The Future of EdTech: WeLearn\'s Vision for Personalized Learning',
      date: 'March 8, 2024',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      url: '#'
    },
    {
      id: '3',
      publication: 'Education Week',
      title: 'Online Learning Platform WeLearn Sees Explosive Growth',
      date: 'February 25, 2024',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      url: '#'
    },
    {
      id: '4',
      publication: 'The Verge',
      title: 'WeLearn\'s AI-Powered Learning Platform is Changing Education',
      date: 'February 18, 2024',
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200',
      url: '#'
    }
  ];
}