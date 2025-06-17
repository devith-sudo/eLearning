import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="hero">
      <div class="hero-background">
        <div class="hero-gradient"></div>
      </div>
      
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge animate-fade-in-up">
              <i class="fas fa-star"></i>
              <span>Trusted by 100,000+ students worldwide</span>
            </div>
            
            <h1 class="hero-title animate-fade-in-up">
              Transform Your Career with
              <span class="title-highlight">Premium Learning</span>
            </h1>
            
            <p class="hero-description animate-fade-in-up">
              Join millions of learners worldwide and master new skills with our expert-led courses. 
              From web development to data science, we have everything you need to succeed.
            </p>
            
            <div class="hero-actions animate-fade-in-up">
              <button class="btn btn-primary btn-lg" routerLink="/courses">
                <i class="fas fa-play"></i>
                Start Learning Today
              </button>
              <button class="btn btn-outline btn-lg" routerLink="/courses">
                <i class="fas fa-search"></i>
                Browse Courses
              </button>
            </div>
            
            <div class="hero-stats animate-fade-in-up">
              <div class="stat-item">
                <div class="stat-number">10M+</div>
                <div class="stat-label">Students</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">5K+</div>
                <div class="stat-label">Courses</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">1K+</div>
                <div class="stat-label">Instructors</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">50+</div>
                <div class="stat-label">Categories</div>
              </div>
            </div>
          </div>
          
          <div class="hero-visual">
            <div class="hero-card-stack">
              <div class="hero-card card-1">
                <div class="card-header">
                  <img src="../../../assets/images/instructor/Devith.jpg" alt="Instructor" class="instructor-avatar">
                  <div class="instructor-info">
                    <div class="instructor-name">Dul Devith</div>
                    <div class="course-rating">
                      <i class="fas fa-star"></i>
                      <span>4.9 (2.1k reviews)</span>
                    </div>
                  </div>
                </div>
                <h3 class="course-title">Complete Web Development</h3>
                <div class="course-progress">
                  <div class="progress-bar">
                    <div class="progress-fill" style="width: 65%"></div>
                  </div>
                  <span class="progress-text">65% Complete</span>
                </div>
              </div>
              
              <div class="hero-card card-2">
                <div class="achievement-icon">
                  <i class="fas fa-trophy"></i>
                </div>
                <h3 class="achievement-title">Course Completed!</h3>
                <p class="achievement-text">React Fundamentals</p>
                <div class="achievement-badge">Certificate Earned</div>
              </div>
              
              <div class="hero-card card-3">
                <div class="stats-grid">
                  <div class="mini-stat">
                    <div class="mini-number">12</div>
                    <div class="mini-label">Courses</div>
                  </div>
                  <div class="mini-stat">
                    <div class="mini-number">847</div>
                    <div class="mini-label">Hours</div>
                  </div>
                  <div class="mini-stat">
                    <div class="mini-number">23</div>
                    <div class="mini-label">Certificates</div>
                  </div>
                  <div class="mini-stat">
                    <div class="mini-number">4.8</div>
                    <div class="mini-label">Rating</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
      padding-top: 80px;
    }

    .hero-background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 50%, var(--primary-900) 100%);
    }

    .hero-gradient {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    }

    .hero-content {
      position: relative;
      z-index: 2;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-16);
      align-items: center;
      padding: var(--space-16) 0;
    }

    .hero-text {
      color: white;
    }

    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      padding: var(--space-2) var(--space-4);
      border-radius: var(--radius-xl);
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: var(--space-6);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: var(--space-6);
    }

    .title-highlight {
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .hero-description {
      font-size: 1.25rem;
      line-height: 1.7;
      opacity: 0.9;
      margin-bottom: var(--space-8);
      max-width: 90%;
    }

    .hero-actions {
      display: flex;
      gap: var(--space-4);
      margin-bottom: var(--space-12);
    }

    .hero-stats {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-8);
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: var(--space-1);
    }

    .stat-label {
      font-size: 0.875rem;
      opacity: 0.8;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .hero-visual {
      position: relative;
      height: 600px;
    }

    .hero-card-stack {
      position: relative;
      height: 100%;
    }

    .hero-card {
      position: absolute;
      background: white;
      border-radius: var(--radius-2xl);
      box-shadow: var(--shadow-xl);
      padding: var(--space-6);
      backdrop-filter: blur(10px);
      animation: float 6s ease-in-out infinite;
    }

    .card-1 {
      top: 0;
      right: 0;
      width: 300px;
      animation-delay: 0s;
    }

    .card-2 {
      top: 40%;
      left: 0;
      width: 250px;
      animation-delay: 2s;
    }

    .card-3 {
      bottom: 0;
      right: 20%;
      width: 220px;
      animation-delay: 4s;
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-bottom: var(--space-4);
    }

    .instructor-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }

    .instructor-name {
      font-weight: 600;
      color: var(--neutral-800);
    }

    .course-rating {
      display: flex;
      align-items: center;
      gap: var(--space-1);
      font-size: 0.875rem;
      color: var(--neutral-600);
    }

    .course-rating i {
      color: #fbbf24;
    }

    .course-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--neutral-800);
      margin-bottom: var(--space-4);
    }

    .course-progress {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }

    .progress-bar {
      flex: 1;
      height: 6px;
      background: var(--neutral-200);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }

    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, var(--primary-500), var(--primary-600));
      border-radius: var(--radius-lg);
      transition: width var(--transition-slow);
    }

    .progress-text {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--neutral-600);
    }

    .achievement-icon {
      width: 60px;
      height: 60px;
      background: linear-gradient(135deg, #fbbf24, #f59e0b);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--space-4);
      color: white;
      font-size: 1.5rem;
    }

    .achievement-title {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--neutral-800);
      margin-bottom: var(--space-2);
    }

    .achievement-text {
      color: var(--neutral-600);
      margin-bottom: var(--space-3);
    }

    .achievement-badge {
      background: var(--secondary-100);
      color: var(--secondary-700);
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-lg);
      font-size: 0.75rem;
      font-weight: 500;
      display: inline-block;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4);
    }

    .mini-stat {
      text-align: center;
    }

    .mini-number {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-600);
      margin-bottom: var(--space-1);
    }

    .mini-label {
      font-size: 0.75rem;
      color: var(--neutral-600);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    @keyframes float {
      0%, 100% {
        transform: translateY(0px);
      }
      50% {
        transform: translateY(-20px);
      }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-content {
        grid-template-columns: 1fr;
        gap: var(--space-8);
        text-align: center;
      }

      .hero-title {
        font-size: 2.5rem;
      }

      .hero-description {
        max-width: 100%;
      }

      .hero-actions {
        flex-direction: column;
        align-items: center;
      }

      .hero-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: var(--space-4);
      }

      .hero-visual {
        height: 400px;
      }

      .hero-card {
        position: relative;
        width: 100% !important;
        margin-bottom: var(--space-4);
      }

      .card-1, .card-2, .card-3 {
        position: relative;
        top: auto;
        left: auto;
        right: auto;
        bottom: auto;
      }
    }

    @media (max-width: 480px) {
      .hero-title {
        font-size: 2rem;
      }

      .hero-description {
        font-size: 1rem;
      }

      .hero-actions {
        gap: var(--space-3);
      }

      .btn-lg {
        padding: var(--space-3) var(--space-6);
        font-size: 14px;
      }
    }
  `]
})
export class HeroComponent {}