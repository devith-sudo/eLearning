import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="footer-brand">
              <a routerLink="/" class="brand-link">
                <i class="fas fa-graduation-cap brand-icon"></i>
                <span class="brand-text">Code Hunter</span>
              </a>
              <p class="brand-description">
                Transform your career with premium online learning. Join millions of students worldwide.
              </p>
            </div>
            
            <div class="social-links">
              <a href="#" class="social-link">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-link">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">Courses</h4>
            <ul class="footer-links">
              <li><a href="#" class="footer-link">Web Development</a></li>
              <li><a href="#" class="footer-link">Data Science</a></li>
              <li><a href="#" class="footer-link">Design</a></li>
              <li><a href="#" class="footer-link">Marketing</a></li>
              <li><a href="#" class="footer-link">Business</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">Company</h4>
            <ul class="footer-links">
              <li><a routerLink="/about" class="footer-link">About Us</a></li>
              <li><a routerLink="/careers" class="footer-link">Careers</a></li>
              <li><a routerLink="/press" class="footer-link">Press</a></li>
              <li><a routerLink="/blog" class="footer-link">Blog</a></li>
              <li><a routerLink="" class="footer-link">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">Support</h4>
            <ul class="footer-links">
              <li><a routerLink="/help" class="footer-link">Help Center</a></li>
              <li><a routerLink="/terms" class="footer-link">Terms of Service</a></li>
              <li><a routerLink="/privacy" class="footer-link">Privacy Policy</a></li>
              <li><a routerLink="/accessibility" class="footer-link">Accessibility</a></li>
              <li><a routerLink="/student-discount" class="footer-link">Student Discount</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">Stay Updated</h4>
            <p class="newsletter-text">Get the latest courses and news delivered to your inbox.</p>
            <form class="newsletter-form">
              <input type="email" placeholder="Enter your email" class="newsletter-input">
              <button type="submit" class="btn btn-primary newsletter-btn">
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-content">
            <p class="copyright">© 2025 Code Hunter. All rights reserved.</p>
            <div class="footer-bottom-links">
              <a routerLink="/terms" class="footer-bottom-link">Terms</a>
              <a routerLink="/privacy" class="footer-bottom-link">Privacy</a>
              <a routerLink="" class="footer-bottom-link">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: var(--neutral-900);
      color: white;
      padding: var(--space-20) 0 var(--space-8);
    }

    .footer-content {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1fr 1.5fr;
      gap: var(--space-12);
      margin-bottom: var(--space-16);
    }

    .footer-section {
      display: flex;
      flex-direction: column;
    }

    .footer-brand {
      margin-bottom: var(--space-6);
    }

    .brand-link {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      text-decoration: none;
      color: white;
      font-weight: 700;
      font-size: 1.5rem;
      margin-bottom: var(--space-4);
    }

    .brand-icon {
      font-size: 1.75rem;
      color: var(--primary-400);
    }

    .brand-description {
      color: var(--neutral-400);
      line-height: 1.6;
      margin-bottom: var(--space-6);
    }

    .social-links {
      display: flex;
      gap: var(--space-4);
    }

    .social-link {
      width: 40px;
      height: 40px;
      background: var(--neutral-800);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--neutral-400);
      text-decoration: none;
      transition: all var(--transition-normal);
    }

    .social-link:hover {
      background: var(--primary-600);
      color: white;
      transform: translateY(-2px);
    }

    .footer-title {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: var(--space-6);
      color: white;
    }

    .footer-links {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-links li {
      margin-bottom: var(--space-3);
    }

    .footer-link {
      color: var(--neutral-400);
      text-decoration: none;
      transition: color var(--transition-fast);
    }

    .footer-link:hover {
      color: var(--primary-400);
    }

    .newsletter-text {
      color: var(--neutral-400);
      margin-bottom: var(--space-4);
      line-height: 1.5;
    }

    .newsletter-form {
      display: flex;
      gap: var(--space-2);
    }

    .newsletter-input {
      flex: 1;
      padding: var(--space-3);
      border: 2px solid var(--neutral-700);
      border-radius: var(--radius-lg);
      background: var(--neutral-800);
      color: white;
      font-size: 14px;
    }

    .newsletter-input:focus {
      outline: none;
      border-color: var(--primary-500);
    }

    .newsletter-input::placeholder {
      color: var(--neutral-500);
    }

    .newsletter-btn {
      padding: var(--space-3);
      flex-shrink: 0;
    }

    .footer-bottom {
      border-top: 1px solid var(--neutral-800);
      padding-top: var(--space-8);
    }

    .footer-bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .copyright {
      color: var(--neutral-400);
      font-size: 0.875rem;
    }

    .footer-bottom-links {
      display: flex;
      gap: var(--space-6);
    }

    .footer-bottom-link {
      color: var(--neutral-400);
      text-decoration: none;
      font-size: 0.875rem;
      transition: color var(--transition-fast);
    }

    .footer-bottom-link:hover {
      color: var(--primary-400);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .footer {
        padding: var(--space-16) 0 var(--space-6);
      }

      .footer-content {
        grid-template-columns: 1fr;
        gap: var(--space-8);
        text-align: center;
      }

      .footer-section {
        align-items: center;
      }

      .brand-description {
        text-align: center;
      }

      .footer-links {
        text-align: center;
      }

      .newsletter-form {
        max-width: 300px;
        margin: 0 auto;
      }

      .footer-bottom-content {
        flex-direction: column;
        gap: var(--space-4);
        text-align: center;
      }

      .footer-bottom-links {
        justify-content: center;
      }
    }

    @media (max-width: 480px) {
      .social-links {
        justify-content: center;
      }

      .footer-bottom-links {
        flex-direction: column;
        gap: var(--space-2);
      }
    }
  `]
})
export class FooterComponent {}