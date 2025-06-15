import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="header">
      <nav class="nav">
        <div class="container">
          <div class="nav-content">
            <!-- Logo -->
            <div class="nav-brand">
              <a routerLink="/" class="brand-link">
                <i class="fas fa-graduation-cap brand-icon"></i>
                <span class="brand-text">Code Hunter</span>
              </a>
            </div>

            <!-- Desktop Navigation -->
            <div class="nav-menu desktop-only">
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" class="nav-link">Home</a>
              <a routerLink="/courses" routerLinkActive="active" class="nav-link">Courses</a>
              <a routerLink="/categories" routerLinkActive="active" class="nav-link">Categories</a>
              <a routerLink="/instructors" routerLinkActive="active" class="nav-link">Instructors</a>
              <a routerLink="/about" routerLinkActive="active" class="nav-link">About</a>
            </div>

            <!-- Search Bar -->
            <div class="nav-search desktop-only">
              <div class="search-container">
                <i class="fas fa-search search-icon"></i>
                <input type="text" placeholder="Search courses..." class="search-input" #searchInput>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="nav-actions">
              <button class="btn btn-outline desktop-only">Sign In</button>
              <button class="btn btn-primary">Get Started</button>
              
              <!-- Mobile Menu Toggle -->
              <button class="mobile-menu-btn mobile-only" (click)="toggleMobileMenu()">
                <i class="fas" [class.fa-bars]="!mobileMenuOpen" [class.fa-times]="mobileMenuOpen"></i>
              </button>
            </div>
          </div>

          <!-- Mobile Menu -->
          <div class="mobile-menu" [class.mobile-menu-open]="mobileMenuOpen">
            <div class="mobile-menu-content">
              <a routerLink="/" (click)="closeMobileMenu()" class="mobile-nav-link">Home</a>
              <a routerLink="/courses" (click)="closeMobileMenu()" class="mobile-nav-link">Courses</a>
              <a routerLink="/categories" (click)="closeMobileMenu()" class="mobile-nav-link">Categories</a>
              <a routerLink="/instructors" (click)="closeMobileMenu()" class="mobile-nav-link">Instructors</a>
              <a routerLink="/about" (click)="closeMobileMenu()" class="mobile-nav-link">About</a>
              
              <div class="mobile-search">
                <div class="search-container">
                  <i class="fas fa-search search-icon"></i>
                  <input type="text" placeholder="Search courses..." class="search-input">
                </div>
              </div>
              
              <div class="mobile-actions">
                <button class="btn btn-outline mobile-btn">Sign In</button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-bottom: 1px solid var(--neutral-200);
      transition: all var(--transition-normal);
    }

    .nav {
      padding: var(--space-4) 0;
    }

    .nav-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: var(--space-8);
    }

    .nav-brand {
      flex-shrink: 0;
    }

    .brand-link {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      text-decoration: none;
      color: var(--primary-600);
      font-weight: 700;
      font-size: 1.5rem;
    }

    .brand-icon {
      font-size: 1.75rem;
    }

    .nav-menu {
      display: flex;
      align-items: center;
      gap: var(--space-8);
    }

    .nav-search {
      flex: 1;
      max-width: 400px;
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
      padding: var(--space-3) var(--space-4) var(--space-3) var(--space-10);
      border: 2px solid var(--neutral-200);
      border-radius: var(--radius-xl);
      font-size: 14px;
      background: var(--neutral-50);
      transition: all var(--transition-normal);
    }

    .search-input:focus {
      outline: none;
      border-color: var(--primary-400);
      background: white;
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .nav-actions {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      flex-shrink: 0;
    }

    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      font-size: 1.25rem;
      color: var(--neutral-600);
      cursor: pointer;
      padding: var(--space-2);
    }

    .mobile-menu {
      display: none;
      background: white;
      border-top: 1px solid var(--neutral-200);
      box-shadow: var(--shadow-lg);
    }

    .mobile-menu-content {
      padding: var(--space-6);
    }

    .mobile-nav-link {
      display: block;
      padding: var(--space-4) 0;
      text-decoration: none;
      color: var(--neutral-700);
      font-weight: 500;
      border-bottom: 1px solid var(--neutral-100);
      transition: color var(--transition-fast);
    }

    .mobile-nav-link:hover {
      color: var(--primary-600);
    }

    .mobile-search {
      margin: var(--space-6) 0;
    }

    .mobile-actions {
      margin-top: var(--space-6);
    }

    .mobile-btn {
      width: 100%;
      justify-content: center;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .desktop-only {
        display: none !important;
      }

      .mobile-only {
        display: block !important;
      }

      .mobile-menu-btn {
        display: block;
      }

      .mobile-menu-open {
        display: block;
      }

      .nav-content {
        gap: var(--space-4);
      }

      .brand-text {
        font-size: 1.25rem;
      }
    }

    @media (min-width: 769px) {
      .mobile-only {
        display: none;
      }

      .desktop-only {
        display: flex;
      }
    }
  `]
})
export class HeaderComponent {
  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }
}