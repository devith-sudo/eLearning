import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="course-detail-page" *ngIf="course">
      <div class="course-header">
        <div class="container">
          <div class="header-content">
            <div class="course-info">
              <div class="breadcrumb">
                <span>Courses</span>
                <i class="fas fa-chevron-right"></i>
                <span>{{ course.category }}</span>
                <i class="fas fa-chevron-right"></i>
                <span>{{ course.title }}</span>
              </div>
              
              <h1 class="course-title">{{ course.title }}</h1>
              <p class="course-description">{{ course.description }}</p>
              
              <div class="course-meta">
                <div class="rating">
                  <div class="stars">
                    <i *ngFor="let star of getStarsArray()" 
                       class="fas fa-star" 
                       [class.filled]="star <= course.rating"></i>
                  </div>
                  <span class="rating-text">{{ course.rating }} ({{ formatNumber(course.reviewCount) }} reviews)</span>
                </div>
                
                <div class="meta-items">
                  <span class="meta-item">
                    <i class="fas fa-users"></i>
                    {{ formatNumber(course.students) }} students
                  </span>
                  <span class="meta-item">
                    <i class="fas fa-clock"></i>
                    {{ course.duration }}
                  </span>
                  <span class="meta-item">
                    <i class="fas fa-signal"></i>
                    {{ course.level }}
                  </span>
                </div>
              </div>
              
              <div class="instructor-info">
                <img [src]="course.instructorAvatar" [alt]="course.instructor" class="instructor-avatar">
                <div class="instructor-details">
                  <span class="instructor-label">Created by</span>
                  <span class="instructor-name">{{ course.instructor }}</span>
                </div>
              </div>
            </div>
            
            <div class="course-preview">
              <div class="preview-card">
                <div class="preview-image">
                  <img [src]="course.thumbnail" [alt]="course.title" loading="lazy">
                  <div class="play-button">
                    <i class="fas fa-play"></i>
                  </div>
                </div>
                
                <div class="preview-content">
                  <div class="pricing">
                    <span class="current-price">\${{ course.price }}</span>
                    <span *ngIf="course.originalPrice" class="original-price">\${{ course.originalPrice }}</span>
                    <span *ngIf="course.originalPrice" class="discount">
                      {{ getDiscountPercentage() }}% off
                    </span>
                  </div>
                  
                  <button class="btn btn-primary btn-lg enroll-btn">
                    <i class="fas fa-shopping-cart"></i>
                    Enroll Now
                  </button>
                  
                  <button class="btn btn-outline btn-lg">
                    <i class="fas fa-heart"></i>
                    Add to Wishlist
                  </button>
                  
                  <div class="course-includes">
                    <h4>This course includes:</h4>
                    <ul class="includes-list">
                      <li>
                        <i class="fas fa-play-circle"></i>
                        {{ course.duration }} on-demand video
                      </li>
                      <li>
                        <i class="fas fa-file-alt"></i>
                        {{ course.lessons }} lessons
                      </li>
                      <li>
                        <i class="fas fa-mobile-alt"></i>
                        Access on mobile and TV
                      </li>
                      <li>
                        <i class="fas fa-infinity"></i>
                        Full lifetime access
                      </li>
                      <li>
                        <i class="fas fa-certificate"></i>
                        Certificate of completion
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="course-content">
        <div class="container">
          <div class="content-layout">
            <div class="main-content">
              <div class="section">
                <h2 class="section-title">What you'll learn</h2>
                <div class="learning-objectives">
                  <div class="objective-item">
                    <i class="fas fa-check"></i>
                    <span>Build modern web applications using the latest technologies</span>
                  </div>
                  <div class="objective-item">
                    <i class="fas fa-check"></i>
                    <span>Master fundamental programming concepts and best practices</span>
                  </div>
                  <div class="objective-item">
                    <i class="fas fa-check"></i>
                    <span>Create responsive and interactive user interfaces</span>
                  </div>
                  <div class="objective-item">
                    <i class="fas fa-check"></i>
                    <span>Deploy applications to production environments</span>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <h2 class="section-title">Course content</h2>
                <div class="curriculum">
                  <div class="curriculum-stats">
                    <span>{{ course.lessons }} lectures</span>
                    <span>•</span>
                    <span>{{ course.duration }} total length</span>
                  </div>
                  
                  <div class="curriculum-sections">
                    <div class="curriculum-section">
                      <div class="section-header">
                        <h3 class="section-name">
                          <i class="fas fa-chevron-down"></i>
                          Introduction to Web Development
                        </h3>
                        <span class="section-info">8 lectures • 45min</span>
                      </div>
                      <div class="section-lessons">
                        <div class="lesson-item">
                          <i class="fas fa-play-circle"></i>
                          <span class="lesson-title">Course Introduction</span>
                          <span class="lesson-duration">5:30</span>
                        </div>
                        <div class="lesson-item">
                          <i class="fas fa-play-circle"></i>
                          <span class="lesson-title">Setting up Development Environment</span>
                          <span class="lesson-duration">12:45</span>
                        </div>
                        <div class="lesson-item">
                          <i class="fas fa-file-alt"></i>
                          <span class="lesson-title">Course Resources</span>
                          <span class="lesson-duration">2 pages</span>
                        </div>
                      </div>
                    </div>
                    
                    <div class="curriculum-section">
                      <div class="section-header">
                        <h3 class="section-name">
                          <i class="fas fa-chevron-down"></i>
                          HTML & CSS Fundamentals
                        </h3>
                        <span class="section-info">12 lectures • 1hr 30min</span>
                      </div>
                    </div>
                    
                    <div class="curriculum-section">
                      <div class="section-header">
                        <h3 class="section-name">
                          <i class="fas fa-chevron-down"></i>
                          JavaScript Essentials
                        </h3>
                        <span class="section-info">15 lectures • 2hr 15min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="section">
                <h2 class="section-title">Requirements</h2>
                <ul class="requirements-list">
                  <li>Basic computer skills and internet access</li>
                  <li>No prior programming experience required</li>
                  <li>Willingness to learn and practice</li>
                  <li>A computer with any operating system</li>
                </ul>
              </div>
              
              <div class="section">
                <h2 class="section-title">Description</h2>
                <div class="course-description-full">
                  <p>
                    This comprehensive course will take you from a complete beginner to a confident web developer. 
                    You'll learn the fundamental technologies that power the modern web, including HTML, CSS, and JavaScript.
                  </p>
                  <p>
                    Throughout the course, you'll build real-world projects that you can add to your portfolio. 
                    By the end, you'll have the skills and confidence to create your own websites and web applications.
                  </p>
                  <p>
                    The course is designed for complete beginners, so no prior experience is required. 
                    We'll start with the basics and gradually build up to more advanced topics.
                  </p>
                </div>
              </div>
            </div>
            
            <div class="sidebar">
              <div class="sticky-card">
                <h3>Related Courses</h3>
                <div class="related-courses">
                  <div class="related-course">
                    <img src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Related course" loading="lazy">
                    <div class="related-info">
                      <h4>Advanced React Development</h4>
                      <span class="related-price">\$79.99</span>
                    </div>
                  </div>
                  <div class="related-course">
                    <img src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Related course" loading="lazy">
                    <div class="related-info">
                      <h4>UI/UX Design Fundamentals</h4>
                      <span class="related-price">\$69.99</span>
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
    .course-detail-page {
      min-height: 100vh;
      padding-top: 80px;
    }

    .course-header {
      background: var(--neutral-900);
      color: white;
      padding: var(--space-12) 0;
    }

    .header-content {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--space-16);
      align-items: start;
    }

    .breadcrumb {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: 0.875rem;
      opacity: 0.8;
      margin-bottom: var(--space-4);
    }

    .breadcrumb i {
      font-size: 0.75rem;
    }

    .course-title {
      font-size: 2.5rem;
      font-weight: 700;
      margin-bottom: var(--space-4);
      line-height: 1.2;
    }

    .course-description {
      font-size: 1.125rem;
      opacity: 0.9;
      margin-bottom: var(--space-6);
      line-height: 1.6;
    }

    .course-meta {
      margin-bottom: var(--space-6);
    }

    .rating {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-bottom: var(--space-4);
    }

    .stars {
      display: flex;
      gap: var(--space-1);
    }

    .stars i {
      color: rgba(255, 255, 255, 0.3);
      font-size: 1rem;
    }

    .stars i.filled {
      color: #fbbf24;
    }

    .rating-text {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .meta-items {
      display: flex;
      gap: var(--space-6);
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .instructor-info {
      display: flex;
      align-items: center;
      gap: var(--space-3);
    }

    .instructor-avatar {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      object-fit: cover;
    }

    .instructor-details {
      display: flex;
      flex-direction: column;
    }

    .instructor-label {
      font-size: 0.875rem;
      opacity: 0.8;
    }

    .instructor-name {
      font-weight: 600;
      color: var(--accent-400);
    }

    .preview-card {
      background: white;
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-xl);
      position: sticky;
      top: 100px;
    }

    .preview-image {
      position: relative;
      aspect-ratio: 16/9;
      overflow: hidden;
    }

    .preview-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 60px;
      height: 60px;
      background: rgba(0, 0, 0, 0.8);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.5rem;
      cursor: pointer;
      transition: all var(--transition-normal);
    }

    .play-button:hover {
      background: var(--primary-600);
      transform: translate(-50%, -50%) scale(1.1);
    }

    .preview-content {
      padding: var(--space-6);
    }

    .pricing {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-bottom: var(--space-6);
    }

    .current-price {
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-600);
    }

    .original-price {
      font-size: 1.125rem;
      color: var(--neutral-400);
      text-decoration: line-through;
    }

    .discount {
      background: var(--accent-500);
      color: white;
      padding: var(--space-1) var(--space-2);
      border-radius: var(--radius-md);
      font-size: 0.75rem;
      font-weight: 600;
    }

    .enroll-btn {
      width: 100%;
      margin-bottom: var(--space-4);
    }

    .course-includes {
      margin-top: var(--space-6);
      padding-top: var(--space-6);
      border-top: 1px solid var(--neutral-200);
    }

    .course-includes h4 {
      font-size: 1rem;
      font-weight: 600;
      margin-bottom: var(--space-4);
    }

    .includes-list {
      list-style: none;
      padding: 0;
    }

    .includes-list li {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-bottom: var(--space-3);
      font-size: 0.875rem;
      color: var(--neutral-600);
    }

    .includes-list i {
      color: var(--primary-500);
      width: 16px;
    }

    .course-content {
      padding: var(--space-20) 0;
      background: var(--neutral-50);
    }

    .content-layout {
      display: grid;
      grid-template-columns: 2fr 1fr;
      gap: var(--space-16);
    }

    .section {
      background: white;
      padding: var(--space-8);
      border-radius: var(--radius-xl);
      margin-bottom: var(--space-8);
      box-shadow: var(--shadow-sm);
    }

    .section-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-6);
    }

    .learning-objectives {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: var(--space-4);
    }

    .objective-item {
      display: flex;
      align-items: flex-start;
      gap: var(--space-3);
    }

    .objective-item i {
      color: var(--secondary-500);
      margin-top: 2px;
      flex-shrink: 0;
    }

    .curriculum-stats {
      font-size: 0.875rem;
      color: var(--neutral-600);
      margin-bottom: var(--space-6);
    }

    .curriculum-section {
      border: 1px solid var(--neutral-200);
      border-radius: var(--radius-lg);
      margin-bottom: var(--space-4);
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: var(--space-4);
      background: var(--neutral-50);
      cursor: pointer;
    }

    .section-name {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      font-size: 1rem;
      font-weight: 600;
    }

    .section-info {
      font-size: 0.875rem;
      color: var(--neutral-600);
    }

    .section-lessons {
      padding: var(--space-4);
    }

    .lesson-item {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-3) 0;
      border-bottom: 1px solid var(--neutral-100);
    }

    .lesson-item:last-child {
      border-bottom: none;
    }

    .lesson-item i {
      color: var(--primary-500);
      width: 16px;
    }

    .lesson-title {
      flex: 1;
      font-size: 0.875rem;
    }

    .lesson-duration {
      font-size: 0.75rem;
      color: var(--neutral-500);
    }

    .requirements-list {
      list-style: none;
      padding: 0;
    }

    .requirements-list li {
      padding: var(--space-2) 0;
      border-bottom: 1px solid var(--neutral-100);
    }

    .requirements-list li:last-child {
      border-bottom: none;
    }

    .course-description-full p {
      margin-bottom: var(--space-4);
      line-height: 1.7;
      color: var(--neutral-600);
    }

    .sticky-card {
      background: white;
      padding: var(--space-6);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-sm);
      position: sticky;
      top: 100px;
    }

    .sticky-card h3 {
      font-size: 1.25rem;
      font-weight: 600;
      margin-bottom: var(--space-6);
    }

    .related-course {
      display: flex;
      gap: var(--space-3);
      padding: var(--space-4) 0;
      border-bottom: 1px solid var(--neutral-100);
    }

    .related-course:last-child {
      border-bottom: none;
    }

    .related-course img {
      width: 60px;
      height: 40px;
      object-fit: cover;
      border-radius: var(--radius-md);
    }

    .related-info h4 {
      font-size: 0.875rem;
      font-weight: 500;
      margin-bottom: var(--space-1);
      line-height: 1.3;
    }

    .related-price {
      font-size: 0.875rem;
      font-weight: 600;
      color: var(--primary-600);
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .header-content {
        grid-template-columns: 1fr;
        gap: var(--space-8);
      }

      .course-title {
        font-size: 2rem;
      }

      .meta-items {
        flex-direction: column;
        gap: var(--space-2);
      }

      .content-layout {
        grid-template-columns: 1fr;
      }

      .learning-objectives {
        grid-template-columns: 1fr;
      }

      .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: var(--space-2);
      }
    }
  `]
})
export class CourseDetailComponent implements OnInit {
  course: Course | undefined;

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit() {
    const courseId = this.route.snapshot.paramMap.get('id');
    if (courseId) {
      this.courseService.getCourseById(courseId).subscribe(course => {
        this.course = course;
      });
    }
  }

  getStarsArray(): number[] {
    return [1, 2, 3, 4, 5];
  }

  formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  }

  getDiscountPercentage(): number {
    if (this.course?.originalPrice && this.course?.price) {
      return Math.round(((this.course.originalPrice - this.course.price) / this.course.originalPrice) * 100);
    }
    return 0;
  }
}