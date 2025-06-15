import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accessibility',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="accessibility-page">
      <div class="accessibility-header">
        <div class="container">
          <h1 class="page-title">Accessibility Statement</h1>
          <p class="page-description">
            WeLearn is committed to ensuring digital accessibility for people with disabilities. 
            We continually improve the user experience for everyone.
          </p>
        </div>
      </div>
      
      <div class="accessibility-content">
        <div class="container">
          <div class="content-layout">
            <div class="main-content">
              <div class="accessibility-section">
                <h2>Our Commitment</h2>
                <p>
                  WeLearn is committed to providing an inclusive learning environment for all users, 
                  regardless of their abilities or disabilities. We believe that education should be 
                  accessible to everyone, and we work continuously to ensure our platform meets the 
                  highest accessibility standards.
                </p>
                <p>
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA 
                  standards and follow best practices in web accessibility to ensure our platform is 
                  usable by people with various disabilities.
                </p>
              </div>
              
              <div class="accessibility-section">
                <h2>Accessibility Features</h2>
                <p>
                  Our platform includes numerous accessibility features designed to support users with 
                  different needs:
                </p>
                
                <h3>Visual Accessibility</h3>
                <ul>
                  <li>High contrast color schemes for better visibility</li>
                  <li>Scalable text that can be enlarged up to 200% without loss of functionality</li>
                  <li>Alternative text for all images and graphics</li>
                  <li>Clear visual focus indicators for keyboard navigation</li>
                  <li>Consistent and logical page layouts</li>
                </ul>
                
                <h3>Audio and Video Accessibility</h3>
                <ul>
                  <li>Closed captions for all video content</li>
                  <li>Audio descriptions for visual content when applicable</li>
                  <li>Transcript downloads for audio and video materials</li>
                  <li>Adjustable playback speeds</li>
                  <li>Volume controls and mute options</li>
                </ul>
                
                <h3>Navigation and Interaction</h3>
                <ul>
                  <li>Full keyboard navigation support</li>
                  <li>Skip links to main content areas</li>
                  <li>Logical tab order throughout the platform</li>
                  <li>Clear and descriptive link text</li>
                  <li>Consistent navigation structure</li>
                </ul>
                
                <h3>Content Structure</h3>
                <ul>
                  <li>Proper heading hierarchy for screen readers</li>
                  <li>Semantic HTML markup</li>
                  <li>Clear and simple language</li>
                  <li>Descriptive page titles</li>
                  <li>Organized content with clear sections</li>
                </ul>
              </div>
              
              <div class="accessibility-section">
                <h2>Assistive Technology Support</h2>
                <p>
                  Our platform is designed to work with various assistive technologies:
                </p>
                <ul>
                  <li><strong>Screen Readers:</strong> Compatible with JAWS, NVDA, VoiceOver, and TalkBack</li>
                  <li><strong>Voice Recognition:</strong> Works with Dragon NaturallySpeaking and similar software</li>
                  <li><strong>Keyboard Navigation:</strong> Full functionality available without a mouse</li>
                  <li><strong>Magnification Software:</strong> Compatible with ZoomText and similar tools</li>
                  <li><strong>Switch Navigation:</strong> Support for switch-based navigation devices</li>
                </ul>
              </div>
              
              <div class="accessibility-section">
                <h2>Mobile Accessibility</h2>
                <p>
                  Our mobile applications include accessibility features for iOS and Android devices:
                </p>
                <ul>
                  <li>VoiceOver and TalkBack screen reader support</li>
                  <li>Voice Control and Switch Control compatibility</li>
                  <li>Dynamic text sizing</li>
                  <li>High contrast and reduced motion options</li>
                  <li>Gesture-based navigation alternatives</li>
                </ul>
              </div>
              
              <div class="accessibility-section">
                <h2>Ongoing Improvements</h2>
                <p>
                  We continuously work to improve accessibility across our platform:
                </p>
                <ul>
                  <li>Regular accessibility audits and testing</li>
                  <li>User feedback integration and response</li>
                  <li>Staff training on accessibility best practices</li>
                  <li>Collaboration with disability advocacy groups</li>
                  <li>Implementation of new accessibility technologies</li>
                </ul>
              </div>
              
              <div class="accessibility-section">
                <h2>Known Limitations</h2>
                <p>
                  While we strive for full accessibility, we acknowledge some current limitations:
                </p>
                <ul>
                  <li>Some third-party content may not meet our accessibility standards</li>
                  <li>Certain interactive elements are being updated for better compatibility</li>
                  <li>Legacy course content is being progressively updated</li>
                </ul>
                <p>
                  We are actively working to address these limitations and welcome feedback on 
                  accessibility barriers you may encounter.
                </p>
              </div>
              
              <div class="accessibility-section">
                <h2>Feedback and Support</h2>
                <p>
                  We welcome your feedback on the accessibility of our platform. If you encounter 
                  any accessibility barriers or have suggestions for improvement, please contact us:
                </p>
                <div class="contact-info">
                  <p><strong>Accessibility Team:</strong> accessibility&#64;welearn.com</p>
                  <p><strong>Phone:</strong> +1 (555) 123-4567 (TTY available)</p>
                  <p><strong>Response Time:</strong> We aim to respond within 2 business days</p>
                </div>
                <p>
                  When reporting accessibility issues, please include:
                </p>
                <ul>
                  <li>Description of the accessibility barrier</li>
                  <li>The page or feature where you encountered the issue</li>
                  <li>Your operating system and browser information</li>
                  <li>Assistive technology you were using (if applicable)</li>
                </ul>
              </div>
              
              <div class="accessibility-section">
                <h2>Alternative Formats</h2>
                <p>
                  If you need course materials in alternative formats, we can provide:
                </p>
                <ul>
                  <li>Large print versions of text materials</li>
                  <li>Audio versions of written content</li>
                  <li>Braille materials (upon request)</li>
                  <li>Electronic formats compatible with assistive technology</li>
                </ul>
                <p>
                  Please contact our support team to request alternative formats, allowing 5-7 
                  business days for preparation.
                </p>
              </div>
            </div>
            
            <div class="sidebar">
              <div class="quick-access-card">
                <h3>Quick Access</h3>
                <div class="access-options">
                  <button class="access-btn" (click)="toggleHighContrast()">
                    <i class="fas fa-adjust"></i>
                    <span>High Contrast</span>
                  </button>
                  <button class="access-btn" (click)="increaseFontSize()">
                    <i class="fas fa-search-plus"></i>
                    <span>Increase Text Size</span>
                  </button>
                  <button class="access-btn" (click)="decreaseFontSize()">
                    <i class="fas fa-search-minus"></i>
                    <span>Decrease Text Size</span>
                  </button>
                  <button class="access-btn" (click)="toggleReducedMotion()">
                    <i class="fas fa-pause"></i>
                    <span>Reduce Motion</span>
                  </button>
                </div>
              </div>
              
              <div class="standards-card">
                <h3>Standards Compliance</h3>
                <div class="standards-list">
                  <div class="standard-item">
                    <i class="fas fa-check-circle"></i>
                    <div>
                      <strong>WCAG 2.1 Level AA</strong>
                      <span>Web Content Accessibility Guidelines</span>
                    </div>
                  </div>
                  <div class="standard-item">
                    <i class="fas fa-check-circle"></i>
                    <div>
                      <strong>Section 508</strong>
                      <span>US Federal Accessibility Standards</span>
                    </div>
                  </div>
                  <div class="standard-item">
                    <i class="fas fa-check-circle"></i>
                    <div>
                      <strong>ADA Compliance</strong>
                      <span>Americans with Disabilities Act</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="resources-card">
                <h3>Accessibility Resources</h3>
                <div class="resource-links">
                  <a href="#" class="resource-link">
                    <i class="fas fa-book"></i>
                    <span>Accessibility Guide</span>
                  </a>
                  <a href="#" class="resource-link">
                    <i class="fas fa-keyboard"></i>
                    <span>Keyboard Shortcuts</span>
                  </a>
                  <a href="#" class="resource-link">
                    <i class="fas fa-cog"></i>
                    <span>Accessibility Settings</span>
                  </a>
                  <a href="#" class="resource-link">
                    <i class="fas fa-question-circle"></i>
                    <span>Help & Support</span>
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
    .accessibility-page {
      min-height: 100vh;
      padding-top: 80px;
    }

    .accessibility-header {
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
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .accessibility-content {
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

    .accessibility-section {
      margin-bottom: var(--space-12);
    }

    .accessibility-section:last-child {
      margin-bottom: 0;
    }

    .accessibility-section h2 {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-6);
      padding-bottom: var(--space-3);
      border-bottom: 2px solid var(--primary-100);
    }

    .accessibility-section h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-800);
      margin: var(--space-6) 0 var(--space-4);
    }

    .accessibility-section p {
      color: var(--neutral-700);
      line-height: 1.7;
      margin-bottom: var(--space-4);
    }

    .accessibility-section ul {
      margin: var(--space-4) 0;
      padding-left: var(--space-6);
    }

    .accessibility-section li {
      color: var(--neutral-700);
      line-height: 1.6;
      margin-bottom: var(--space-2);
    }

    .contact-info {
      background: var(--neutral-50);
      padding: var(--space-6);
      border-radius: var(--radius-lg);
      margin: var(--space-4) 0;
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

    .quick-access-card,
    .standards-card,
    .resources-card {
      background: white;
      padding: var(--space-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
    }

    .quick-access-card h3,
    .standards-card h3,
    .resources-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-6);
    }

    .access-options {
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
    }

    .access-btn {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3);
      border: 2px solid var(--neutral-200);
      border-radius: var(--radius-lg);
      background: white;
      color: var(--neutral-700);
      cursor: pointer;
      transition: all var(--transition-fast);
      text-align: left;
      width: 100%;
    }

    .access-btn:hover {
      border-color: var(--primary-300);
      background: var(--primary-50);
      color: var(--primary-700);
    }

    .access-btn i {
      color: var(--primary-500);
      width: 16px;
    }

    .standards-list {
      display: flex;
      flex-direction: column;
      gap: var(--space-4);
    }

    .standard-item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
    }

    .standard-item i {
      color: var(--secondary-500);
      font-size: 1.25rem;
      margin-top: 2px;
      flex-shrink: 0;
    }

    .standard-item div {
      display: flex;
      flex-direction: column;
      gap: var(--space-1);
    }

    .standard-item strong {
      color: var(--neutral-900);
      font-size: 0.875rem;
    }

    .standard-item span {
      color: var(--neutral-600);
      font-size: 0.75rem;
      line-height: 1.4;
    }

    .resource-links {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }

    .resource-link {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3);
      border-radius: var(--radius-lg);
      text-decoration: none;
      color: var(--neutral-700);
      transition: all var(--transition-fast);
    }

    .resource-link:hover {
      background: var(--primary-50);
      color: var(--primary-600);
    }

    .resource-link i {
      color: var(--primary-500);
      width: 16px;
    }

    /* High contrast mode */
    .high-contrast {
      filter: contrast(150%);
    }

    /* Reduced motion */
    .reduced-motion * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
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

      .accessibility-section h2 {
        font-size: 1.25rem;
      }
    }
  `]
})
export class AccessibilityComponent {
  private fontSize = 16;
  private highContrast = false;
  private reducedMotion = false;

  toggleHighContrast() {
    this.highContrast = !this.highContrast;
    if (this.highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }

  increaseFontSize() {
    this.fontSize = Math.min(this.fontSize + 2, 24);
    document.documentElement.style.fontSize = `${this.fontSize}px`;
  }

  decreaseFontSize() {
    this.fontSize = Math.max(this.fontSize - 2, 12);
    document.documentElement.style.fontSize = `${this.fontSize}px`;
  }

  toggleReducedMotion() {
    this.reducedMotion = !this.reducedMotion;
    if (this.reducedMotion) {
      document.body.classList.add('reduced-motion');
    } else {
      document.body.classList.remove('reduced-motion');
    }
  }
}