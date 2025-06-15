import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="careers-page">
      <div class="hero-section">
        <div class="container">
          <h1 class="hero-title">Join Our Mission</h1>
          <p class="hero-description">
            Help us transform education and make learning accessible to millions worldwide. 
            Build your career while making a meaningful impact.
          </p>
          <button class="btn btn-primary btn-lg">View Open Positions</button>
        </div>
      </div>
      
      <div class="why-join-section">
        <div class="container">
          <h2 class="section-title text-center">Why Join WeLearn?</h2>
          <div class="benefits-grid">
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-heart"></i>
              </div>
              <h3 class="benefit-title">Meaningful Work</h3>
              <p class="benefit-description">
                Make a real impact on millions of learners worldwide and help democratize education.
              </p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-users"></i>
              </div>
              <h3 class="benefit-title">Amazing Team</h3>
              <p class="benefit-description">
                Work with passionate, talented individuals who are committed to excellence.
              </p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h3 class="benefit-title">Growth Opportunities</h3>
              <p class="benefit-description">
                Accelerate your career with continuous learning and development opportunities.
              </p>
            </div>
            <div class="benefit-card">
              <div class="benefit-icon">
                <i class="fas fa-balance-scale"></i>
              </div>
              <h3 class="benefit-title">Work-Life Balance</h3>
              <p class="benefit-description">
                Flexible working arrangements and comprehensive benefits for your well-being.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="perks-section">
        <div class="container">
          <h2 class="section-title text-center">Perks & Benefits</h2>
          <div class="perks-grid">
            <div class="perk-item">
              <i class="fas fa-laptop"></i>
              <span>Latest tech equipment</span>
            </div>
            <div class="perk-item">
              <i class="fas fa-home"></i>
              <span>Remote work options</span>
            </div>
            <div class="perk-item">
              <i class="fas fa-graduation-cap"></i>
              <span>Learning stipend</span>
            </div>
            <div class="perk-item">
              <i class="fas fa-medkit"></i>
              <span>Health insurance</span>
            </div>
            <div class="perk-item">
              <i class="fas fa-plane"></i>
              <span>Unlimited PTO</span>
            </div>
            <div class="perk-item">
              <i class="fas fa-coffee"></i>
              <span>Free meals & snacks</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="positions-section">
        <div class="container">
          <h2 class="section-title text-center">Open Positions</h2>
          <div class="positions-list">
            <div class="position-card">
              <div class="position-header">
                <h3 class="position-title">Senior Frontend Developer</h3>
                <span class="position-type">Full-time</span>
              </div>
              <p class="position-description">
                Join our frontend team to build beautiful, responsive user interfaces using React, TypeScript, and modern web technologies.
              </p>
              <div class="position-details">
                <span class="detail-item">
                  <i class="fas fa-map-marker-alt"></i>
                  San Francisco, CA / Remote
                </span>
                <span class="detail-item">
                  <i class="fas fa-clock"></i>
                  Posted 2 days ago
                </span>
              </div>
              <button class="btn btn-primary">Apply Now</button>
            </div>
            
            <div class="position-card">
              <div class="position-header">
                <h3 class="position-title">Product Manager</h3>
                <span class="position-type">Full-time</span>
              </div>
              <p class="position-description">
                Lead product strategy and development for our learning platform, working closely with engineering and design teams.
              </p>
              <div class="position-details">
                <span class="detail-item">
                  <i class="fas fa-map-marker-alt"></i>
                  New York, NY / Remote
                </span>
                <span class="detail-item">
                  <i class="fas fa-clock"></i>
                  Posted 1 week ago
                </span>
              </div>
              <button class="btn btn-primary">Apply Now</button>
            </div>
            
            <div class="position-card">
              <div class="position-header">
                <h3 class="position-title">UX Designer</h3>
                <span class="position-type">Full-time</span>
              </div>
              <p class="position-description">
                Design intuitive and engaging learning experiences that delight our users and improve educational outcomes.
              </p>
              <div class="position-details">
                <span class="detail-item">
                  <i class="fas fa-map-marker-alt"></i>
                  Austin, TX / Remote
                </span>
                <span class="detail-item">
                  <i class="fas fa-clock"></i>
                  Posted 3 days ago
                </span>
              </div>
              <button class="btn btn-primary">Apply Now</button>
            </div>
            
            <div class="position-card">
              <div class="position-header">
                <h3 class="position-title">Data Scientist</h3>
                <span class="position-type">Full-time</span>
              </div>
              <p class="position-description">
                Analyze learning data to improve course recommendations and personalize the learning experience for our users.
              </p>
              <div class="position-details">
                <span class="detail-item">
                  <i class="fas fa-map-marker-alt"></i>
                  Seattle, WA / Remote
                </span>
                <span class="detail-item">
                  <i class="fas fa-clock"></i>
                  Posted 5 days ago
                </span>
              </div>
              <button class="btn btn-primary">Apply Now</button>
            </div>
          </div>
        </div>
      </div>
      
      <div class="cta-section">
        <div class="container">
          <div class="cta-card">
            <h2 class="cta-title">Don't See Your Role?</h2>
            <p class="cta-description">
              We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute.
            </p>
            <button class="btn btn-outline btn-lg">Send Your Resume</button>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .careers-page {
      min-height: 100vh;
      padding-top: 80px;
    }

    .hero-section {
      background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
      color: white;
      padding: var(--space-24) 0;
      text-align: center;
    }

    .hero-title {
      font-size: 3.5rem;
      font-weight: 700;
      margin-bottom: var(--space-6);
    }

    .hero-description {
      font-size: 1.25rem;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto var(--space-8);
      line-height: 1.7;
    }

    .why-join-section {
      padding: var(--space-24) 0;
      background: white;
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--neutral-900);
      margin-bottom: var(--space-16);
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-8);
    }

    .benefit-card {
      text-align: center;
      padding: var(--space-8);
      border-radius: var(--radius-xl);
      transition: transform var(--transition-normal);
    }

    .benefit-card:hover {
      transform: translateY(-4px);
    }

    .benefit-icon {
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

    .benefit-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-4);
    }

    .benefit-description {
      color: var(--neutral-600);
      line-height: 1.6;
    }

    .perks-section {
      padding: var(--space-24) 0;
      background: var(--neutral-50);
    }

    .perks-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-6);
      margin-top: var(--space-16);
    }

    .perk-item {
      display: flex;
      align-items: center;
      gap: var(--space-4);
      background: white;
      padding: var(--space-6);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      font-weight: 500;
      color: var(--neutral-700);
    }

    .perk-item i {
      color: var(--primary-500);
      font-size: 1.25rem;
      width: 24px;
    }

    .positions-section {
      padding: var(--space-24) 0;
      background: white;
    }

    .positions-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-6);
      margin-top: var(--space-16);
    }

    .position-card {
      background: white;
      border: 2px solid var(--neutral-200);
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      transition: all var(--transition-normal);
    }

    .position-card:hover {
      border-color: var(--primary-300);
      box-shadow: var(--shadow-lg);
    }

    .position-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-4);
    }

    .position-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--neutral-900);
    }

    .position-type {
      background: var(--primary-100);
      color: var(--primary-700);
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-lg);
      font-size: 0.875rem;
      font-weight: 500;
    }

    .position-description {
      color: var(--neutral-600);
      line-height: 1.6;
      margin-bottom: var(--space-6);
    }

    .position-details {
      display: flex;
      gap: var(--space-6);
      margin-bottom: var(--space-6);
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: 0.875rem;
      color: var(--neutral-500);
    }

    .detail-item i {
      color: var(--primary-500);
    }

    .cta-section {
      padding: var(--space-24) 0;
      background: var(--neutral-50);
    }

    .cta-card {
      background: linear-gradient(135deg, var(--secondary-500), var(--secondary-600));
      color: white;
      padding: var(--space-16);
      border-radius: var(--radius-2xl);
      text-align: center;
      max-width: 600px;
      margin: 0 auto;
    }

    .cta-title {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: var(--space-4);
    }

    .cta-description {
      font-size: 1.125rem;
      opacity: 0.9;
      margin-bottom: var(--space-8);
      line-height: 1.7;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .hero-title {
        font-size: 2.5rem;
      }

      .benefits-grid {
        grid-template-columns: 1fr;
      }

      .position-header {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-2);
      }

      .position-details {
        flex-direction: column;
        gap: var(--space-2);
      }
    }
  `]
})
export class CareersComponent {}