import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="terms-page">
      <div class="terms-header">
        <div class="container">
          <h1 class="page-title">Terms of Service</h1>
          <p class="page-description">
            Last updated: March 15, 2024
          </p>
        </div>
      </div>
      
      <div class="terms-content">
        <div class="container">
          <div class="content-layout">
            <div class="main-content">
              <div class="terms-section">
                <h2>1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Code Hunter's services, you accept and agree to be bound by the terms and 
                  provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </div>
              
              <div class="terms-section">
                <h2>2. Description of Service</h2>
                <p>
                  Code Hunter provides an online learning platform that offers educational courses, tutorials, and 
                  related materials. Our service includes:
                </p>
                <ul>
                  <li>Access to online courses and educational content</li>
                  <li>Interactive learning tools and resources</li>
                  <li>Progress tracking and certification</li>
                  <li>Community features and discussion forums</li>
                  <li>Mobile application access</li>
                </ul>
              </div>
              
              <div class="terms-section">
                <h2>3. User Accounts</h2>
                <p>
                  To access certain features of our service, you must create an account. You are responsible for:
                </p>
                <ul>
                  <li>Maintaining the confidentiality of your account credentials</li>
                  <li>All activities that occur under your account</li>
                  <li>Providing accurate and complete information</li>
                  <li>Updating your information to keep it current</li>
                </ul>
                <p>
                  You must notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
              </div>
              
              <div class="terms-section">
                <h2>4. Payment and Billing</h2>
                <p>
                  Course fees are clearly displayed before purchase. By enrolling in a paid course, you agree to pay 
                  all applicable fees. Payment terms include:
                </p>
                <ul>
                  <li>All payments are processed securely through our payment partners</li>
                  <li>Prices are subject to change with notice</li>
                  <li>Refunds are available within 30 days of purchase</li>
                  <li>Subscription services renew automatically unless cancelled</li>
                </ul>
              </div>
              
              <div class="terms-section">
                <h2>5. Intellectual Property</h2>
                <p>
                  All content on Code Hunter, including courses, videos, text, graphics, logos, and software, is the 
                  property of Code Hunter or its content suppliers and is protected by copyright and other intellectual 
                  property laws.
                </p>
                <p>
                  You may not:
                </p>
                <ul>
                  <li>Copy, distribute, or reproduce course content without permission</li>
                  <li>Share your account access with others</li>
                  <li>Use content for commercial purposes without authorization</li>
                  <li>Reverse engineer or attempt to extract source code</li>
                </ul>
              </div>
              
              <div class="terms-section">
                <h2>6. User Conduct</h2>
                <p>
                  You agree to use our service responsibly and not to:
                </p>
                <ul>
                  <li>Violate any applicable laws or regulations</li>
                  <li>Harass, abuse, or harm other users</li>
                  <li>Post inappropriate, offensive, or illegal content</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of the service</li>
                  <li>Use automated systems to access the service</li>
                </ul>
              </div>
              
              <div class="terms-section">
                <h2>7. Privacy Policy</h2>
                <p>
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                  your information when you use our service. By using Code Hunter, you agree to the collection and 
                  use of information in accordance with our Privacy Policy.
                </p>
              </div>
              
              <div class="terms-section">
                <h2>8. Disclaimers</h2>
                <p>
                  Code Hunter provides the service "as is" without any warranties, expressed or implied. We do not 
                  guarantee that:
                </p>
                <ul>
                  <li>The service will be uninterrupted or error-free</li>
                  <li>All content is accurate or up-to-date</li>
                  <li>The service will meet your specific requirements</li>
                  <li>Any defects will be corrected</li>
                </ul>
              </div>
              
              <div class="terms-section">
                <h2>9. Limitation of Liability</h2>
                <p>
                  In no event shall Code Hunter be liable for any indirect, incidental, special, consequential, or 
                  punitive damages, including without limitation, loss of profits, data, use, goodwill, or other 
                  intangible losses, resulting from your use of the service.
                </p>
              </div>
              
              <div class="terms-section">
                <h2>10. Termination</h2>
                <p>
                  We may terminate or suspend your account and access to the service immediately, without prior 
                  notice or liability, for any reason, including if you breach these Terms of Service.
                </p>
                <p>
                  Upon termination, your right to use the service will cease immediately, but provisions that by 
                  their nature should survive termination will remain in effect.
                </p>
              </div>
              
              <div class="terms-section">
                <h2>11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. We will notify users of any material 
                  changes via email or through our service. Your continued use of the service after such 
                  modifications constitutes acceptance of the updated terms.
                </p>
              </div>
              
              <div class="terms-section">
                <h2>12. Contact Information</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div class="contact-info">
                  <p><strong>Email:</strong> Devith&#64;Code Hunter.com</p>
                  <p><strong>Address:</strong> In ur Heart</p>
                  <p><strong>Phone:</strong> 092 498 933</p>
                </div>
              </div>
            </div>
            
            <div class="sidebar">
              <div class="toc-card">
                <h3>Table of Contents</h3>
                <nav class="toc-nav">
                  <a href="#acceptance" class="toc-link">1. Acceptance of Terms</a>
                  <a href="#service" class="toc-link">2. Description of Service</a>
                  <a href="#accounts" class="toc-link">3. User Accounts</a>
                  <a href="#payment" class="toc-link">4. Payment and Billing</a>
                  <a href="#ip" class="toc-link">5. Intellectual Property</a>
                  <a href="#conduct" class="toc-link">6. User Conduct</a>
                  <a href="#privacy" class="toc-link">7. Privacy Policy</a>
                  <a href="#disclaimers" class="toc-link">8. Disclaimers</a>
                  <a href="#liability" class="toc-link">9. Limitation of Liability</a>
                  <a href="#termination" class="toc-link">10. Termination</a>
                  <a href="#changes" class="toc-link">11. Changes to Terms</a>
                  <a href="#contact" class="toc-link">12. Contact Information</a>
                </nav>
              </div>
              
              <div class="related-card">
                <h3>Related Documents</h3>
                <div class="related-links">
                  <a href="/privacy" class="related-link">
                    <i class="fas fa-shield-alt"></i>
                    <span>Privacy Policy</span>
                  </a>
                  <a href="/accessibility" class="related-link">
                    <i class="fas fa-universal-access"></i>
                    <span>Accessibility Statement</span>
                  </a>
                  <a href="/help" class="related-link">
                    <i class="fas fa-question-circle"></i>
                    <span>Help Center</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .terms-page {
      min-height: 100vh;
      padding-top: 80px;
    }

    .terms-header {
      background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
      color: white;
      padding: var(--space-16) 0;
      text-align: center;
    }

    .page-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: var(--space-4);
    }

    .page-description {
      font-size: 1.125rem;
      opacity: 0.9;
    }

    .terms-content {
      padding: var(--space-20) 0;
      background: var(--neutral-50);
    }

    .content-layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--space-16);
    }

    .main-content {
      background: white;
      padding: var(--space-12);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
    }

    .terms-section {
      margin-bottom: var(--space-12);
    }

    .terms-section:last-child {
      margin-bottom: 0;
    }

    .terms-section h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-6);
      padding-bottom: var(--space-3);
      border-bottom: 2px solid var(--primary-100);
    }

    .terms-section p {
      color: var(--neutral-700);
      line-height: 1.7;
      margin-bottom: var(--space-4);
    }

    .terms-section ul {
      margin: var(--space-4) 0;
      padding-left: var(--space-6);
    }

    .terms-section li {
      color: var(--neutral-700);
      line-height: 1.6;
      margin-bottom: var(--space-2);
    }

    .contact-info {
      background: var(--neutral-50);
      padding: var(--space-6);
      border-radius: var(--radius-lg);
      margin-top: var(--space-4);
    }

    .contact-info p {
      margin-bottom: var(--space-2);
    }

    .contact-info strong {
      color: var(--neutral-900);
    }

    .sidebar {
      display: flex;
      flex-direction: column;
      gap: var(--space-8);
    }

    .toc-card,
    .related-card {
      background: white;
      padding: var(--space-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
      position: sticky;
      top: 100px;
    }

    .toc-card h3,
    .related-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-6);
    }

    .toc-nav {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    .toc-link {
      padding: var(--space-2) var(--space-3);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--neutral-600);
      font-size: 0.875rem;
      transition: all var(--transition-fast);
    }

    .toc-link:hover {
      background: var(--primary-50);
      color: var(--primary-600);
    }

    .related-links {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .related-link {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--neutral-700);
      transition: all var(--transition-fast);
    }

    .related-link:hover {
      background: var(--primary-50);
      color: var(--primary-600);
    }

    .related-link i {
      color: var(--primary-500);
      width: 16px;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2rem;
      }

      .content-layout {
        grid-template-columns: 1fr;
      }

      .main-content {
        padding: var(--space-8);
      }

      .terms-section h2 {
        font-size: 1.25rem;
      }

      .toc-card,
      .related-card {
        position: static;
      }
    }
  `]
})
export class TermsComponent {}