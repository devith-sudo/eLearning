import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="privacy-page">
      <div class="privacy-header">
        <div class="container">
          <h1 class="page-title">Privacy Policy</h1>
          <p class="page-description">
            Last updated: March 15, 2024
          </p>
        </div>
      </div>
      
      <div class="privacy-content">
        <div class="container">
          <div class="content-layout">
            <div class="main-content">
              <div class="privacy-section">
                <h2>1. Information We Collect</h2>
                <p>
                  We collect information you provide directly to us, such as when you create an account, 
                  enroll in courses, or contact us for support.
                </p>
                
                <h3>Personal Information</h3>
                <ul>
                  <li>Name and email address</li>
                  <li>Profile information and preferences</li>
                  <li>Payment and billing information</li>
                  <li>Communications with us</li>
                </ul>
                
                <h3>Usage Information</h3>
                <ul>
                  <li>Course progress and completion data</li>
                  <li>Learning preferences and behavior</li>
                  <li>Device and browser information</li>
                  <li>IP address and location data</li>
                </ul>
              </div>
              
              <div class="privacy-section">
                <h2>2. How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul>
                  <li>Deliver courses and educational content</li>
                  <li>Process payments and manage subscriptions</li>
                  <li>Personalize your learning experience</li>
                  <li>Send important updates and notifications</li>
                  <li>Provide customer support</li>
                  <li>Analyze usage patterns to improve our platform</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </div>
              
              <div class="privacy-section">
                <h2>3. Information Sharing</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. We may share 
                  your information in the following circumstances:
                </p>
                
                <h3>Service Providers</h3>
                <p>
                  We work with trusted third-party service providers who help us operate our platform, 
                  such as payment processors, hosting providers, and analytics services.
                </p>
                
                <h3>Legal Requirements</h3>
                <p>
                  We may disclose your information if required by law or in response to valid legal requests 
                  from government authorities.
                </p>
                
                <h3>Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be 
                  transferred as part of the transaction.
                </p>
              </div>
              
              <div class="privacy-section">
                <h2>4. Data Security</h2>
                <p>
                  We implement appropriate technical and organizational measures to protect your personal 
                  information against unauthorized access, alteration, disclosure, or destruction:
                </p>
                <ul>
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and updates</li>
                  <li>Access controls and authentication measures</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
              </div>
              
              <div class="privacy-section">
                <h2>5. Your Rights and Choices</h2>
                <p>
                  You have certain rights regarding your personal information:
                </p>
                
                <h3>Access and Correction</h3>
                <p>
                  You can access and update your account information at any time through your profile settings.
                </p>
                
                <h3>Data Portability</h3>
                <p>
                  You can request a copy of your personal data in a structured, machine-readable format.
                </p>
                
                <h3>Deletion</h3>
                <p>
                  You can request deletion of your account and personal information, subject to certain 
                  legal and contractual obligations.
                </p>
                
                <h3>Marketing Communications</h3>
                <p>
                  You can opt out of marketing emails by clicking the unsubscribe link or updating your 
                  communication preferences.
                </p>
              </div>
              
              <div class="privacy-section">
                <h2>6. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to enhance your experience on our platform:
                </p>
                
                <h3>Essential Cookies</h3>
                <p>
                  These cookies are necessary for the platform to function properly and cannot be disabled.
                </p>
                
                <h3>Analytics Cookies</h3>
                <p>
                  We use analytics cookies to understand how users interact with our platform and improve 
                  our services.
                </p>
                
                <h3>Preference Cookies</h3>
                <p>
                  These cookies remember your preferences and settings to provide a personalized experience.
                </p>
              </div>
              
              <div class="privacy-section">
                <h2>7. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your data during international 
                  transfers, including:
                </p>
                <ul>
                  <li>Adequacy decisions by relevant authorities</li>
                  <li>Standard contractual clauses</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
              </div>
              
              <div class="privacy-section">
                <h2>8. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If we become aware that we have 
                  collected such information, we will take steps to delete it promptly.
                </p>
              </div>
              
              <div class="privacy-section">
                <h2>9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material 
                  changes by posting the new policy on our website and updating the "Last updated" date. 
                  Your continued use of our services after such changes constitutes acceptance of the 
                  updated policy.
                </p>
              </div>
              
              <div class="privacy-section">
                <h2>10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div class="contact-info">
                  <p><strong>Email:</strong> privacy&#64;Code Hunter.com</p>
                  <p><strong>Address:</strong> In ur Heart</p>
                  <p><strong>Phone:</strong> 092 498 933</p>
                </div>
              </div>
            </div>
            
            <div class="sidebar">
              <div class="summary-card">
                <h3>Privacy Summary</h3>
                <div class="summary-items">
                  <div class="summary-item">
                    <i class="fas fa-shield-alt"></i>
                    <div>
                      <strong>Data Protection</strong>
                      <span>We use industry-standard security measures</span>
                    </div>
                  </div>
                  <div class="summary-item">
                    <i class="fas fa-user-check"></i>
                    <div>
                      <strong>Your Control</strong>
                      <span>You control your personal information</span>
                    </div>
                  </div>
                  <div class="summary-item">
                    <i class="fas fa-ban"></i>
                    <div>
                      <strong>No Selling</strong>
                      <span>We never sell your data to third parties</span>
                    </div>
                  </div>
                  <div class="summary-item">
                    <i class="fas fa-eye"></i>
                    <div>
                      <strong>Transparency</strong>
                      <span>Clear information about data usage</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="rights-card">
                <h3>Your Rights</h3>
                <div class="rights-list">
                  <div class="right-item">
                    <i class="fas fa-download"></i>
                    <span>Download your data</span>
                  </div>
                  <div class="right-item">
                    <i class="fas fa-edit"></i>
                    <span>Correct your information</span>
                  </div>
                  <div class="right-item">
                    <i class="fas fa-trash"></i>
                    <span>Delete your account</span>
                  </div>
                  <div class="right-item">
                    <i class="fas fa-envelope-open"></i>
                    <span>Opt out of emails</span>
                  </div>
                </div>
                <button class="btn btn-primary">Manage Privacy Settings</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .privacy-page {
      min-height: 100vh;
      padding-top: 80px;
    }

    .privacy-header {
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

    .privacy-content {
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

    .privacy-section {
      margin-bottom: var(--space-12);
    }

    .privacy-section:last-child {
      margin-bottom: 0;
    }

    .privacy-section h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-6);
      padding-bottom: var(--space-3);
      border-bottom: 2px solid var(--primary-100);
    }

    .privacy-section h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-800);
      margin: var(--space-6) 0 var(--space-4);
    }

    .privacy-section p {
      color: var(--neutral-700);
      line-height: 1.7;
      margin-bottom: var(--space-4);
    }

    .privacy-section ul {
      margin: var(--space-4) 0;
      padding-left: var(--space-6);
    }

    .privacy-section li {
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

    .summary-card,
    .rights-card {
      background: white;
      padding: var(--space-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
      position: sticky;
      top: 100px;
    }

    .summary-card h3,
    .rights-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-6);
    }

    .summary-items {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .summary-item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
    }

    .summary-item i {
      color: var(--primary-500);
      font-size: 1.25rem;
      margin-top: 2px;
      flex-shrink: 0;
    }

    .summary-item div {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    .summary-item strong {
      color: var(--neutral-900);
      font-size: 0.875rem;
    }

    .summary-item span {
      color: var(--neutral-600);
      font-size: 0.75rem;
      line-height: 1.4;
    }

    .rights-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      margin-bottom: var(--space-6);
    }

    .right-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3);
      border-radius: var(--radius-lg);
      background: var(--neutral-50);
    }

    .right-item i {
      color: var(--primary-500);
      width: 16px;
    }

    .right-item span {
      color: var(--neutral-700);
      font-size: 0.875rem;
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

      .privacy-section h2 {
        font-size: 1.25rem;
      }

      .summary-card,
      .rights-card {
        position: static;
      }
    }
  `]
})
export class PrivacyComponent {}