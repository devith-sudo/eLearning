import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Category } from '../../models/course.model';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="categories">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Explore Categories</h2>
          <p class="section-description">
            Choose from hundreds of courses across various categories and start your learning journey today.
          </p>
        </div>
        
        <div class="categories-grid">
          <div *ngFor="let category of categories" class="category-card">
            <div class="category-icon">
              <i [class]="category.icon"></i>
            </div>
            <h3 class="category-name">{{ category.name }}</h3>
            <p class="category-count">{{ category.courseCount }} courses</p>
            <div class="category-overlay">
              <button class="btn btn-primary">
                Explore Courses
                <i class="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .categories {
      padding: var(--space-24) 0;
      background: var(--neutral-50);
    }

    .section-header {
      text-align: center;
      margin-bottom: var(--space-16);
    }

    .section-title {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--neutral-900);
      margin-bottom: var(--space-4);
    }

    .section-description {
      font-size: 1.125rem;
      color: var(--neutral-600);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
    }

    .categories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: var(--space-6);
    }

    .category-card {
      position: relative;
      background: white;
      border-radius: var(--radius-xl);
      padding: var(--space-8);
      text-align: center;
      box-shadow: var(--shadow-md);
      transition: all var(--transition-normal);
      cursor: pointer;
      overflow: hidden;
    }

    .category-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl);
    }

    .category-icon {
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
      transition: all var(--transition-normal);
    }

    .category-card:hover .category-icon {
      transform: scale(1.1);
      background: linear-gradient(135deg, var(--primary-600), var(--primary-700));
    }

    .category-name {
      font-size: 1.25rem;
      font-weight: 600;
      color: var(--neutral-900);
      margin-bottom: var(--space-2);
    }

    .category-count {
      color: var(--neutral-600);
      font-size: 0.875rem;
      margin-bottom: var(--space-4);
    }

    .category-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(59, 130, 246, 0.95);
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition: opacity var(--transition-normal);
    }

    .category-card:hover .category-overlay {
      opacity: 1;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .categories {
        padding: var(--space-16) 0;
      }

      .section-title {
        font-size: 2rem;
      }

      .section-description {
        font-size: 1rem;
      }

      .categories-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--space-4);
      }

      .category-card {
        padding: var(--space-6);
      }

      .category-icon {
        width: 60px;
        height: 60px;
        font-size: 1.5rem;
      }
    }

    @media (max-width: 480px) {
      .categories-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }
}