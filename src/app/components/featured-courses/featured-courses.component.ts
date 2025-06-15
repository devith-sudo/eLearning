import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "../../services/course.service";
import { CourseCardComponent } from "../course-card/course-card.component";
import { Course } from "../../models/course.model";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-featured-courses",
  standalone: true,
  imports: [CommonModule, CourseCardComponent, RouterModule],
  template: `
    <section class="featured-courses">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Courses</h2>
          <p class="section-description">
            Discover our most popular and highly-rated courses, carefully
            selected by our experts.
          </p>
        </div>

        <div class="courses-grid">
          <app-course-card
            *ngFor="let course of featuredCourses"
            [course]="course"
          >
          </app-course-card>
        </div>

<div class="section-footer">
  <a routerLink="/courses" routerLinkActive="active" class="btn btn-outline btn-lg">
    View All Courses
    <i class="fas fa-arrow-right"></i>
  </a>
</div>

      </div>
    </section>
  `,
  styles: [
    `
      .featured-courses {
        padding: var(--space-24) 0;
        background: white;
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

      .courses-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--space-8);
        margin-bottom: var(--space-16);
      }

      .section-footer {
        text-align: center;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .featured-courses {
          padding: var(--space-16) 0;
        }

        .section-title {
          font-size: 2rem;
        }

        .section-description {
          font-size: 1rem;
        }

        .courses-grid {
          grid-template-columns: 1fr;
          gap: var(--space-6);
        }

        .section-header {
          margin-bottom: var(--space-12);
        }

        .section-footer {
          margin-top: var(--space-12);
        }
      }

      @media (max-width: 480px) {
        .courses-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class FeaturedCoursesComponent implements OnInit {
  featuredCourses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getFeaturedCourses().subscribe((courses) => {
      this.featuredCourses = courses;
    });
  }
}
