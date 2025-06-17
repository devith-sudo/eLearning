import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-student-discount',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="student-discount-page">
      <div class="discount-header">
        <div class="container">
          <div class="header-content">
            <div class="header-text">
              <h1 class="page-title">Student Discount Program</h1>
              <p class="page-description">
                Get 50% off on all courses with our student discount program. 
                Invest in your education without breaking the bank.
              </p>
              <div class="discount-badge">
                <span class="discount-text">50% OFF</span>
                <span class="discount-subtitle">for verified students</span>
              </div>
            </div>
            <div class="header-visual">
              <div class="discount-card">
                <div class="card-header">
                  <i class="fas fa-graduation-cap"></i>
                  <span>Student Discount</span>
                </div>
                <div class="price-comparison">
                  <div class="original-price">
                    <span class="price-label">Regular Price</span>
                    <span class="price-value">\$99.99</span>
                  </div>
                  <div class="discounted-price">
                    <span class="price-label">Student Price</span>
                    <span class="price-value">\$49.99</span>
                  </div>
                </div>
                <div class="savings">
                  <span>You save \$50.00!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="discount-content">
        <div class="container">
          <div class="eligibility-section">
            <h2 class="section-title">Who's Eligible?</h2>
            <div class="eligibility-grid">
              <div class="eligibility-card">
                <div class="eligibility-icon">
                  <i class="fas fa-university"></i>
                </div>
                <h3>University Students</h3>
                <p>Currently enrolled undergraduate or graduate students at accredited universities worldwide.</p>
              </div>
              <div class="eligibility-card">
                <div class="eligibility-icon">
                  <i class="fas fa-school"></i>
                </div>
                <h3>High School Students</h3>
                <p>Students in their final year of high school preparing for college or career advancement.</p>
              </div>
              <div class="eligibility-card">
                <div class="eligibility-icon">
                  <i class="fas fa-chalkboard-teacher"></i>
                </div>
                <h3>Educators</h3>
                <p>Teachers, professors, and educational staff at recognized educational institutions.</p>
              </div>
              <div class="eligibility-card">
                <div class="eligibility-icon">
                  <i class="fas fa-user-graduate"></i>
                </div>
                <h3>Recent Graduates</h3>
                <p>Graduates within 12 months of completion from accredited educational institutions.</p>
              </div>
            </div>
          </div>
          
          <div class="verification-section">
            <h2 class="section-title">How to Verify Your Status</h2>
            <div class="verification-steps">
              <div class="step-item">
                <div class="step-number">1</div>
                <div class="step-content">
                  <h3>Create Account</h3>
                  <p>Sign up for a WeLearn account using your educational email address (.edu, .ac.uk, etc.)</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">2</div>
                <div class="step-content">
                  <h3>Upload Documents</h3>
                  <p>Provide proof of enrollment such as student ID, transcript, or enrollment letter</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">3</div>
                <div class="step-content">
                  <h3>Get Verified</h3>
                  <p>Our team will review your documents within 24-48 hours and approve your discount</p>
                </div>
              </div>
              <div class="step-item">
                <div class="step-number">4</div>
                <div class="step-content">
                  <h3>Start Learning</h3>
                  <p>Enjoy 50% off on all courses and start building your skills at an affordable price</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="benefits-section">
            <h2 class="section-title">What's Included</h2>
            <div class="benefits-grid">
              <div class="benefit-item">
                <i class="fas fa-percentage"></i>
                <div>
                  <h4>50% Off All Courses</h4>
                  <p>Significant savings on our entire course catalog</p>
                </div>
              </div>
              <div class="benefit-item">
                <i class="fas fa-infinity"></i>
                <div>
                  <h4>Lifetime Access</h4>
                  <p>Keep access to purchased courses forever</p>
                </div>
              </div>
              <div class="benefit-item">
                <i class="fas fa-certificate"></i>
                <div>
                  <h4>Certificates</h4>
                  <p>Earn completion certificates for your portfolio</p>
                </div>
              </div>
              <div class="benefit-item">
                <i class="fas fa-mobile-alt"></i>
                <div>
                  <h4>Mobile Access</h4>
                  <p>Learn on any device, anywhere, anytime</p>
                </div>
              </div>
              <div class="benefit-item">
                <i class="fas fa-users"></i>
                <div>
                  <h4>Community Access</h4>
                  <p>Join student discussions and study groups</p>
                </div>
              </div>
              <div class="benefit-item">
                <i class="fas fa-headset"></i>
                <div>
                  <h4>Priority Support</h4>
                  <p>Get faster response times for technical issues</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="faq-section">
            <h2 class="section-title">Frequently Asked Questions</h2>
            <div class="faq-list">
              <div class="faq-item">
                <div class="faq-question" (click)="toggleFAQ('1')">
                  <h4>How long does verification take?</h4>
                  <i class="fas fa-chevron-down" [class.rotated]="expandedFAQ === '1'"></i>
                </div>
                <div class="faq-answer" [class.expanded]="expandedFAQ === '1'">
                  <p>Verification typically takes 24-48 hours. You'll receive an email confirmation once approved.</p>
                </div>
              </div>
              
              <div class="faq-item">
                <div class="faq-question" (click)="toggleFAQ('2')">
                  <h4>What documents do I need to provide?</h4>
                  <i class="fas fa-chevron-down" [class.rotated]="expandedFAQ === '2'"></i>
                </div>
                <div class="faq-answer" [class.expanded]="expandedFAQ === '2'">
                  <p>You can provide a student ID, current transcript, enrollment letter, or any official document showing your student status.</p>
                </div>
              </div>
              
              <div class="faq-item">
                <div class="faq-question" (click)="toggleFAQ('3')">
                  <h4>How long is the discount valid?</h4>
                  <i class="fas fa-chevron-down" [class.rotated]="expandedFAQ === '3'"></i>
                </div>
                <div class="faq-answer" [class.expanded]="expandedFAQ === '3'">
                  <p>The discount is valid for one year from verification. You'll need to re-verify annually to maintain the discount.</p>
                </div>
              </div>
              
              <div class="faq-item">
                <div class="faq-question" (click)="toggleFAQ('4')">
                  <h4>Can I share my discount with others?</h4>
                  <i class="fas fa-chevron-down" [class.rotated]="expandedFAQ === '4'"></i>
                </div>
                <div class="faq-answer" [class.expanded]="expandedFAQ === '4'">
                  <p>No, the student discount is personal and non-transferable. Each person must verify their own student status.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="cta-section">
            <div class="cta-card">
              <h2>Ready to Start Learning?</h2>
              <p>Join thousands of students who are already saving 50% on their education with WeLearn.</p>
              <div class="cta-buttons">
                <button class="btn btn-primary btn-lg" routerLink="/courses">Apply for Student Discount</button>
                <button class="btn btn-outline btn-lg" routerLink="/courses">Browse Courses</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .student-discount-page {
      min-height: 100vh;
      padding-top: 80px;
    }

    .discount-header {
      background: linear-gradient(135deg, var(--secondary-500) 0%, var(--secondary-700) 100%);
      color: white;
      padding: var(--space-20) 0;
    }

    .header-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-16);
      align-items: center;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: var(--space-4);
    }

    .page-description {
      font-size: 1.25rem;
      opacity: 0.9;
      margin-bottom: var(--space-8);
      line-height: 1.7;
    }

    .discount-badge {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      background: rgba(255, 255, 255, 0.2);
      padding: var(--space-6);
      border-radius: var(--radius-xl);
      backdrop-filter: blur(10px);
    }

    .discount-text {
      font-size: 2rem;
      font-weight: 700;
      color: var(--accent-300);
    }

    .discount-subtitle {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .discount-card {
      background: white;
      color: var(--neutral-900);
      padding: var(--space-8);
      border-radius: var(--radius-2xl);
      box-shadow: var(--shadow-xl);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-bottom: var(--space-6);
      font-weight: 600;
      color: var(--secondary-600);
    }

    .card-header i {
      font-size: 1.5rem;
    }

    .price-comparison {
      display: flex;
      justify-content: space-between;
      margin-bottom: var(--space-4);
    }

    .original-price,
    .discounted-price {
      text-align: center;
    }

    .price-label {
      display: block;
      font-size: 0.875rem;
      color: var(--neutral-600);
      margin-bottom: var(--space-2);
    }

    .original-price .price-value {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--neutral-400);
      text-decoration: line-through;
    }

    .discounted-price .price-value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--secondary-600);
    }

    .savings {
      text-align: center;
      background: var(--accent-100);
      color: var(--accent-700);
      padding: var(--space-3);
      border-radius: var(--radius-lg);
      font-weight: 600;
    }

    .discount-content {
      padding: var(--space-20) 0;
      background: var(--neutral-50);
    }

    .section-title {
      font-size: 2rem;
      font-weight: 700;
      color: var(--neutral-900);
      margin-bottom: var(--space-8);
      text-align: center;
    }

    .eligibility-section {
      margin-bottom: var(--space-20);
    }

    .eligibility-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-6);
    }

    .eligibility-card {
      background: white;
      padding: var(--space-8);
      border-radius: var(--radius-xl);
      text-align: center;
      box-shadow: var(--shadow-md);
      transition: transform var(--transition-normal);
    }

    .eligibility-card:hover {
      transform: translateY(-4px);
    }

    .eligibility-icon {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, var(--secondary-500), var(--secondary-600));
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto var(--space-6);
      color: white;
      font-size: 2rem;
    }

    .eligibility-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-3);
    }

    .eligibility-card p {
      color: var(--neutral-600);
      line-height: 1.6;
    }

    .verification-section {
      margin-bottom: var(--space-20);
    }

    .verification-steps {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: var(--space-8);
    }

    .step-item {
      display: flex;
      gap: var(--space-4);
      align-items: flex-start;
    }

    .step-number {
      width: 40px;
      height: 40px;
      background: var(--secondary-600);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      flex-shrink: 0;
    }

    .step-content h3 {
      font-size: 1.125rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-2);
    }

    .step-content p {
      color: var(--neutral-600);
      line-height: 1.6;
    }

    .benefits-section {
      margin-bottom: var(--space-20);
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-6);
    }

    .benefit-item {
      display: flex;
      gap: var(--space-4);
      background: white;
      padding: var(--space-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-sm);
    }

    .benefit-item i {
      color: var(--secondary-500);
      font-size: 1.5rem;
      margin-top: var(--space-1);
      flex-shrink: 0;
    }

    .benefit-item h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-2);
    }

    .benefit-item p {
      color: var(--neutral-600);
      font-size: 0.875rem;
      line-height: 1.5;
    }

    .faq-section {
      margin-bottom: var(--space-20);
    }

    .faq-list {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-item {
      background: white;
      border-radius: var(--radius-xl);
      margin-bottom: var(--space-4);
      box-shadow: var(--shadow-sm);
      overflow: hidden;
    }

    .faq-question {
      padding: var(--space-6);
      cursor: pointer;
      display: flex;
      justify-content: space-between;
      align-items: center;
      transition: background-color var(--transition-fast);
    }

    .faq-question:hover {
      background: var(--neutral-50);
    }

    .faq-question h4 {
      font-size: 1rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin: 0;
    }

    .faq-question i {
      color: var(--secondary-500);
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
      padding: 0 var(--space-6) var(--space-6);
      margin: 0;
      color: var(--neutral-600);
      line-height: 1.6;
    }

    .cta-section {
      text-align: center;
    }

    .cta-card {
      background: linear-gradient(135deg, var(--primary-600), var(--primary-800));
      color: white;
      padding: var(--space-16);
      border-radius: var(--radius-2xl);
      max-width: 600px;
      margin: 0 auto;
    }

    .cta-card h2 {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: var(--space-4);
    }

    .cta-card p {
      font-size: 1.125rem;
      opacity: 0.9;
      margin-bottom: var(--space-8);
      line-height: 1.7;
    }

    .cta-buttons {
      display: flex;
      gap: var(--space-4);
      justify-content: center;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .header-content {
        grid-template-columns: 1fr;
        text-align: center;
      }

      .page-title {
        font-size: 2.25rem;
      }

      .verification-steps {
        grid-template-columns: 1fr;
      }

      .step-item {
        flex-direction: column;
        text-align: center;
      }

      .benefits-grid {
        grid-template-columns: 1fr;
      }

      .cta-buttons {
        flex-direction: column;
      }
    }
  `]
})
export class StudentDiscountComponent {
  expandedFAQ: string | null = null;

  toggleFAQ(faqId: string) {
    this.expandedFAQ = this.expandedFAQ === faqId ? null : faqId;
  }
}