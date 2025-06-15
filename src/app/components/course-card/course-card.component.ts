import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="course-card">
      <div class="card-image">
        <img [src]="course.thumbnail" [alt]="course.title" loading="lazy">
        <div class="card-badges">
          <span *ngIf="course.bestseller" class="badge badge-bestseller">Bestseller</span>
          <span *ngIf="course.featured" class="badge badge-featured">Featured</span>
        </div>
        <div class="card-overlay">
          <button class="btn btn-primary">
            <i class="fas fa-play"></i>
            Preview
          </button>
        </div>
      </div>
      
      <div class="card-content">
        <div class="course-meta">
          <span class="course-category">{{ course.category }}</span>
          <span class="course-level">{{ course.level }}</span>
        </div>
        
        <h3 class="course-title">{{ course.title }}</h3>
        <p class="course-description">{{ course.description }}</p>
        
        <div class="instructor-info">
          <img [src]="course.instructorAvatar" [alt]="course.instructor" class="instructor-avatar">
          <span class="instructor-name">{{ course.instructor }}</span>
        </div>
        
        <div class="course-stats">
          <div class="rating">
            <div class="stars">
              <i *ngFor="let star of getStarsArray()" 
                 class="fas fa-star" 
                 [class.filled]="star <= course.rating"></i>
            </div>
            <span class="rating-text">{{ course.rating }} ({{ formatNumber(course.reviewCount) }})</span>
          </div>
          
          <div class="course-info">
            <span class="info-item">
              <i class="fas fa-clock"></i>
              {{ course.duration }}
            </span>
            <span class="info-item">
              <i class="fas fa-users"></i>
              {{ formatNumber(course.students) }}
            </span>
          </div>
        </div>
        
        <div class="course-footer">
          <div class="pricing">
            <span class="current-price">\${{ course.price }}</span>
            <span *ngIf="course.originalPrice" class="original-price">\${{ course.originalPrice }}</span>
          </div>
          
          <button class="btn btn-primary btn-enroll">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .course-card {
      background: white;
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-normal);
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .course-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl);
    }

    .card-image {
      position: relative;
      aspect-ratio: 16/9;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform var(--transition-slow);
    }

    .course-card:hover .card-image img {
      transform: scale(1.05);
    }

    .card-badges {
      position: absolute;
      top: var(--space-4);
      left: var(--space-4);
      display: flex;
      gap: var(--space-2);
    }

    .badge {
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-lg);
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .badge-bestseller {
      background: var(--accent-500);
      color: white;
    }

    .badge-featured {
      background: var(--secondary-500);
      color: white;
    }

    .card-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-normal);
    }

    .course-card:hover .card-overlay {
      opacity: 1;
    }

    .card-content {
      padding: var(--space-6);
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .course-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--space-3);
    }

    .course-category {
      background: var(--primary-100);
      color: var(--primary-700);
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-lg);
      font-size: 0.75rem;
      font-weight: 500;
    }

    .course-level {
      background: var(--neutral-100);
      color: var(--neutral-600);
      padding: var(--space-1) var(--space-3);
      border-radius: var(--radius-lg);
      font-size: 0.75rem;
      font-weight: 500;
    }

    .course-title {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-3);
      line-height: 1.3;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .course-description {
      color: var(--neutral-600);
      font-size: 0.875rem;
      line-height: 1.5;
      margin-bottom: var(--space-4);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .instructor-info {
      display: flex;
      align-items: center;
      gap: var(--space-3);
      margin-bottom: var(--space-4);
    }

    .instructor-avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      object-fit: cover;
    }

    .instructor-name {
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--neutral-700);
    }

    .course-stats {
      margin-bottom: var(--space-6);
    }

    .rating {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      margin-bottom: var(--space-3);
    }

    .stars {
      display: flex;
      gap: var(--space-1);
    }

    .stars i {
      color: var(--neutral-300);
      font-size: 0.875rem;
    }

    .stars i.filled {
      color: #fbbf24;
    }

    .rating-text {
      font-size: 0.875rem;
      color: var(--neutral-600);
    }

    .course-info {
      display: flex;
      gap: var(--space-4);
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: var(--space-1);
      font-size: 0.75rem;
      color: var(--neutral-500);
    }

    .info-item i {
      font-size: 0.75rem;
    }

    .course-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
    }

    .pricing {
      display: flex;
      align-items: center;
      gap: var(--space-2);
    }

    .current-price {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--primary-600);
    }

    .original-price {
      font-size: 0.875rem;
      color: var(--neutral-400);
      text-decoration: line-through;
    }

    .btn-enroll {
      padding: var(--space-2) var(--space-4);
      font-size: 0.875rem;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .card-content {
        padding: var(--space-4);
      }

      .course-title {
        font-size: 1.125rem;
      }

      .course-footer {
        flex-direction: column;
        gap: var(--space-3);
      }

      .btn-enroll {
        width: 100%;
      }
    }
  `]
})
export class CourseCardComponent {
  @Input() course!: Course;

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
}