import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { CourseCardComponent } from '../../components/course-card/course-card.component';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  template: `
    <div class="courses-page">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">All Courses</h1>
          <p class="page-description">
            Explore our comprehensive collection of courses and find the perfect learning path for your goals.
          </p>
        </div>
      </div>
      
      <div class="courses-content">
        <div class="container">
          <div class="filters-section">
            <div class="search-filters">
              <div class="search-bar">
                <i class="fas fa-search search-icon"></i>
                <input type="text" placeholder="Search courses..." class="search-input" (input)="onSearchChange($event)">
              </div>
              
              <div class="filter-buttons">
                <button class="filter-btn" [class.active]="selectedFilter === 'all'" (click)="setFilter('all')">
                  All Courses
                </button>
                <button class="filter-btn" [class.active]="selectedFilter === 'featured'" (click)="setFilter('featured')">
                  Featured
                </button>
                <button class="filter-btn" [class.active]="selectedFilter === 'bestseller'" (click)="setFilter('bestseller')">
                  Bestsellers
                </button>
              </div>
            </div>
          </div>
          
          <div class="courses-grid">
            <app-course-card 
              *ngFor="let course of filteredCourses" 
              [course]="course">
            </app-course-card>
          </div>
          
          <div *ngIf="filteredCourses.length === 0" class="no-results">
            <div class="no-results-content">
              <i class="fas fa-search no-results-icon"></i>
              <h3 class="no-results-title">No courses found</h3>
              <p class="no-results-text">Try adjusting your search or filter criteria.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .courses-page {
      min-height: 100vh;
      padding-top: 80px;
    }

    .page-header {
      background: linear-gradient(135deg, var(--primary-600) 0%, var(--primary-800) 100%);
      color: white;
      padding: var(--space-20) 0;
    }

    .page-title {
      font-size: 3rem;
      font-weight: 700;
      margin-bottom: var(--space-4);
      text-align: center;
    }

    .page-description {
      font-size: 1.25rem;
      text-align: center;
      opacity: 0.9;
      max-width: 600px;
      margin: 0 auto;
    }

    .courses-content {
      padding: var(--space-20) 0;
      background: var(--neutral-50);
    }

    .filters-section {
      margin-bottom: var(--space-16);
    }

    .search-filters {
      background: white;
      padding: var(--space-8);
      border-radius: var(--radius-xl);
      box-shadow: var(--shadow-md);
    }

    .search-bar {
      position: relative;
      margin-bottom: var(--space-6);
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
      padding: var(--space-4) var(--space-4) var(--space-4) var(--space-10);
      border: 2px solid var(--neutral-200);
      border-radius: var(--radius-lg);
      font-size: 16px;
      transition: all var(--transition-normal);
    }

    .search-input:focus {
      outline: none;
      border-color: var(--primary-500);
      box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
    }

    .filter-buttons {
      display: flex;
      gap: var(--space-4);
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: var(--space-3) var(--space-6);
      border: 2px solid var(--neutral-200);
      border-radius: var(--radius-lg);
      background: white;
      color: var(--neutral-600);
      font-weight: 500;
      cursor: pointer;
      transition: all var(--transition-normal);
    }

    .filter-btn:hover {
      border-color: var(--primary-300);
      color: var(--primary-600);
    }

    .filter-btn.active {
      background: var(--primary-600);
      border-color: var(--primary-600);
      color: white;
    }

    .courses-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: var(--space-8);
    }

    .no-results {
      text-align: center;
      padding: var(--space-20) 0;
    }

    .no-results-content {
      max-width: 400px;
      margin: 0 auto;
    }

    .no-results-icon {
      font-size: 4rem;
      color: var(--neutral-300);
      margin-bottom: var(--space-6);
    }

    .no-results-title {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--neutral-700);
      margin-bottom: var(--space-3);
    }

    .no-results-text {
      color: var(--neutral-500);
      line-height: 1.6;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
      .page-title {
        font-size: 2.25rem;
      }

      .page-description {
        font-size: 1rem;
      }

      .courses-content {
        padding: var(--space-16) 0;
      }

      .search-filters {
        padding: var(--space-6);
      }

      .filter-buttons {
        justify-content: center;
      }

      .courses-grid {
        grid-template-columns: 1fr;
        gap: var(--space-6);
      }
    }
  `]
})
export class CoursesComponent implements OnInit {
  allCourses: Course[] = [];
  filteredCourses: Course[] = [];
  selectedFilter: string = 'all';
  searchQuery: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getAllCourses().subscribe(courses => {
      this.allCourses = courses;
      this.filteredCourses = courses;
    });
  }

  setFilter(filter: string) {
    this.selectedFilter = filter;
    this.applyFilters();
  }

  onSearchChange(event: any) {
    this.searchQuery = event.target.value;
    this.applyFilters();
  }

  private applyFilters() {
    let filtered = this.allCourses;

    // Apply search filter
    if (this.searchQuery.trim()) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }

    // Apply category filter
    switch (this.selectedFilter) {
      case 'featured':
        filtered = filtered.filter(course => course.featured);
        break;
      case 'bestseller':
        filtered = filtered.filter(course => course.bestseller);
        break;
      default:
        // 'all' - no additional filtering
        break;
    }

    this.filteredCourses = filtered;
  }
}