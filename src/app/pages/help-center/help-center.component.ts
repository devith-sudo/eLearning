import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

interface HelpCategory {
  id: string;
  name: string;
  icon: string;
  description: string;
  articleCount: number;
}

@Component({
  selector: 'app-help-center',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="help-center-page">
      <div class="help-header">
        <div class="container">
          <h1 class="page-title">Help Center</h1>
          <p class="page-description">
            Find answers to your questions and get the support you need to make the most of your learning experience.
          </p>
          
          <div class="search-section">
            <div class="search-container">
              <i class="fas fa-search search-icon"></i>
              <input type="text" placeholder="Search for help articles..." class="search-input" (input)="onSearchChange($event)">
            </div>
          </div>
        </div>
      </div>
      
      <div class="help-content">
        <div class="container">
          <div class="categories-section">
            <h2 class="section-title">Browse by Category</h2>
            <div class="categories-grid">
              <div *ngFor="let category of helpCategories" class="category-card">
                <div class="category-icon">
                  <i [class]="category.icon"></i>
                </div>
                <h3 class="category-name">{{ category.name }}</h3>
                <p class="category-description">{{ category.description }}</p>
                <span class="article-count">{{ category.articleCount }} articles</span>
              </div>
            </div>
          </div>
          
          <div class="content-layout">
            <div class="main-content">
              <div class="faq-section">
                <h2 class="section-title">Frequently Asked Questions</h2>
                <div class="faq-list">
                  <div *ngFor="let faq of filteredFAQs" class="faq-item">
                    <div class="faq-question" (click)="toggleFAQ(faq.id)">
                      <h3>{{ faq.question }}</h3>
                      <i class="fas fa-chevron-down" [class.rotated]="expandedFAQ === faq.id"></i>
                    </div>
                    <div class="faq-answer" [class.expanded]="expandedFAQ === faq.id">
                      <p>{{ faq.answer }}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="popular-articles">
                <h2 class="section-title">Popular Articles</h2>
                <div class="articles-list">
                  <a href="#" class="article-link">
                    <i class="fas fa-file-alt"></i>
                    <span>How to enroll in a course</span>
                  </a>
                  <a href="#" class="article-link">
                    <i class="fas fa-file-alt"></i>
                    <span>Understanding course certificates</span>
                  </a>
                  <a href="#" class="article-link">
                    <i class="fas fa-file-alt"></i>
                    <span>Troubleshooting video playback issues</span>
                  </a>
                  <a href="#" class="article-link">
                    <i class="fas fa-file-alt"></i>
                    <span>How to download course materials</span>
                  </a>
                  <a href="#" class="article-link">
                    <i class="fas fa-file-alt"></i>
                    <span>Managing your account settings</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div class="sidebar">
              <div class="contact-card">
                <h3>Still Need Help?</h3>
                <p>Can't find what you're looking for? Our support team is here to help.</p>
                <div class="contact-options">
                  <button class="btn btn-primary">
                    <i class="fas fa-comments"></i>
                    Live Chat
                  </button>
                  <button class="btn btn-outline">
                    <i class="fas fa-envelope"></i>
                    Email Support
                  </button>
                </div>
                <div class="contact-info">
                  <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <span>Response time: 2-4 hours</span>
                  </div>
                  <div class="info-item">
                    <i class="fas fa-globe"></i>
                    <span>24/7 support available</span>
                  </div>
                </div>
              </div>
              
              <div class="quick-links-card">
                <h3>Quick Links</h3>
                <div class="quick-links">
                  <a href="#" class="quick-link">
                    <i class="fas fa-user"></i>
                    <span>Account Settings</span>
                  </a>
                  <a href="#" class="quick-link">
                    <i class="fas fa-credit-card"></i>
                    <span>Billing & Payments</span>
                  </a>
                  <a href="#" class="quick-link">
                    <i class="fas fa-download"></i>
                    <span>Mobile App</span>
                  </a>
                  <a href="#" class="quick-link">
                    <i class="fas fa-shield-alt"></i>
                    <span>Privacy & Security</span>
                  </a>
                </div>
              </div>
              
              <div class="feedback-card">
                <h3>Feedback</h3>
                <p>Help us improve our help center by sharing your feedback.</p>
                <button class="btn btn-secondary">
                  <i class="fas fa-comment-alt"></i>
                  Give Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .help-center-page {
      min-height: 100vh;
      padding-top: 80px;
    }

    .help-header {
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
      margin: 0 auto var(--space-8);
    }

    .search-section {
      max-width: 500px;
      margin: 0 auto;
    }

    .search-container {
      position: relative;
    }

    .search-icon {
      position: absolute;
      left: var(--space-4);
      top: 50%;
      transform: translateY(-50%);
      color: var(--neutral-400);
      z-index: 1;
    }

    .search-input {
      width: 100%;
      padding: var(--space-4) var(--space-4) var(--space-4) var(--space-10);
      border: none;
      border-radius: var(--radius-xl);
      font-size: 16px;
      background: white;
      box-shadow: var(--shadow-lg);
    }

    .search-input:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
    }

    .help-content {
      padding: var(--space-20) 0;
      background: var(--neutral-50);
    }

    .categories-section {
      margin-bottom: var(--space-20);
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--neutral-900);
      margin-bottom: var(--space-8);
      text-align: center;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-6);
    }

    .category-card {
      background: white;
      padding: var(--space-8);
      border-radius: var(--radius-xl);
      text-align: center;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-normal);
      cursor: pointer;
    }

    .category-card:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-xl);
    }

    .category-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--primary-500), var(--primary-600));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--space-6);
      color: white;
      font-size: 2rem;
    }

    .category-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-3);
    }

    .category-description {
      color: var(--neutral-600);
      line-height: 1.6;
      margin-bottom: var(--space-4);
    }

    .article-count {
      color: var(--primary-600);
      font-size: 0.875rem;
      font-weight: 500;
    }

    .content-layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--space-16);
    }

    .faq-section {
      background: white;
      padding: var(--space-8);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
      margin-bottom: var(--space-8);
    }

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .faq-item {
      border: 1px solid var(--neutral-200);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .faq-question {
      padding: var(--space-6);
      background: var(--neutral-50);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color var(--transition-fast);
    }

    .faq-question:hover {
      background: var(--neutral-100);
    }

    .faq-question h3 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin: 0;
    }

    .faq-question i {
      color: var(--primary-500);
      transition: transform var(--transition-normal);
    }

    .faq-question i.rotated {
      transform: rotate(180deg);
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height var(--transition-normal);
    }

    .faq-answer.expanded {
      max-height: 200px;
    }

    .faq-answer p {
      padding: var(--space-6);
      margin: 0;
      color: var(--neutral-600);
      line-height: 1.6;
    }

    .popular-articles {
      background: white;
      padding: var(--space-8);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
    }

    .articles-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .article-link {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-4);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--neutral-700);
      transition: all var(--transition-fast);
    }

    .article-link:hover {
      background: var(--primary-50);
      color: var(--primary-600);
    }

    .article-link i {
      color: var(--primary-500);
      width: 16px;
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      gap: var(--space-8);
    }

    .contact-card,
    .quick-links-card,
    .feedback-card {
      background: white;
      padding: var(--space-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
    }

    .contact-card h3,
    .quick-links-card h3,
    .feedback-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-4);
    }

    .contact-card p,
    .feedback-card p {
      color: var(--neutral-600);
      line-height: 1.6;
      margin-bottom: var(--space-6);
    }

    .contact-options {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      margin-bottom: var(--space-6);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: 0.875rem;
      color: var(--neutral-600);
    }

    .info-item i {
      color: var(--primary-500);
      width: 16px;
    }

    .quick-links {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    .quick-link {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--neutral-700);
      transition: all var(--transition-fast);
    }

    .quick-link:hover {
      background: var(--primary-50);
      color: var(--primary-600);
    }

    .quick-link i {
      color: var(--primary-500);
      width: 16px;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2.25rem;
      }

      .categories-grid {
        grid-template-columns: 1fr;
      }

      .content-layout {
        grid-template-columns: 1fr;
      }

      .faq-question {
        padding: var(--space-4);
      }

      .faq-answer p {
        padding: var(--space-4);
      }

      .contact-options {
        gap: var(--space-2);
      }
    }
  `]
})
export class HelpCenterComponent {
  expandedFAQ: string | null = null;
  searchQuery: string = '';
  filteredFAQs: FAQItem[] = [];

  helpCategories: HelpCategory[] = [
    {
      id: '1',
      name: 'Getting Started',
      icon: 'fas fa-rocket',
      description: 'Learn the basics of using WeLearn platform',
      articleCount: 12
    },
    {
      id: '2',
      name: 'Courses & Learning',
      icon: 'fas fa-graduation-cap',
      description: 'Everything about courses, enrollment, and learning',
      articleCount: 25
    },
    {
      id: '3',
      name: 'Account & Billing',
      icon: 'fas fa-user-circle',
      description: 'Manage your account, payments, and subscriptions',
      articleCount: 18
    },
    {
      id: '4',
      name: 'Technical Support',
      icon: 'fas fa-tools',
      description: 'Troubleshoot technical issues and problems',
      articleCount: 15
    },
    {
      id: '5',
      name: 'Mobile App',
      icon: 'fas fa-mobile-alt',
      description: 'Using WeLearn on your mobile device',
      articleCount: 8
    },
    {
      id: '6',
      name: 'Certificates',
      icon: 'fas fa-certificate',
      description: 'Information about course certificates and credentials',
      articleCount: 10
    }
  ];

  faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'How do I enroll in a course?',
      answer: 'To enroll in a course, simply browse our course catalog, select the course you want, and click the "Enroll Now" button. You can pay with a credit card or use any available payment methods.',
      category: 'courses'
    },
    {
      id: '2',
      question: 'Can I get a refund if I\'m not satisfied with a course?',
      answer: 'Yes, we offer a 30-day money-back guarantee for all courses. If you\'re not satisfied, you can request a full refund within 30 days of purchase.',
      category: 'billing'
    },
    {
      id: '3',
      question: 'How do I download course materials?',
      answer: 'Course materials can be downloaded from the course page. Look for the "Resources" section where you\'ll find downloadable files, slides, and additional materials.',
      category: 'courses'
    },
    {
      id: '4',
      question: 'Do I get a certificate when I complete a course?',
      answer: 'Yes, you receive a certificate of completion for every course you finish. Certificates are automatically generated and can be downloaded from your profile.',
      category: 'certificates'
    },
    {
      id: '5',
      question: 'Can I access courses on my mobile device?',
      answer: 'Absolutely! Our mobile app is available for both iOS and Android devices. You can download courses for offline viewing and learn on the go.',
      category: 'mobile'
    },
    {
      id: '6',
      question: 'How do I reset my password?',
      answer: 'To reset your password, go to the login page and click "Forgot Password". Enter your email address and we\'ll send you instructions to reset your password.',
      category: 'account'
    }
  ];

  constructor() {
    this.filteredFAQs = this.faqItems;
  }

  toggleFAQ(faqId: string) {
    this.expandedFAQ = this.expandedFAQ === faqId ? null : faqId;
  }

  onSearchChange(event: any) {
    this.searchQuery = event.target.value.toLowerCase();
    this.filteredFAQs = this.faqItems.filter(faq =>
      faq.question.toLowerCase().includes(this.searchQuery) ||
      faq.answer.toLowerCase().includes(this.searchQuery)
    );
  }
}