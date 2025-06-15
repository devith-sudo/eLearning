import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "../../services/course.service";
import { Instructor } from "../../models/course.model";

@Component({
  selector: "app-instructors",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="instructors-page">
      <div class="page-header">
        <div class="container">
          <h1 class="page-title">Meet Our Expert Instructors</h1>
          <p class="page-description">
            Learn from industry professionals and experienced educators who are
            passionate about sharing their knowledge.
          </p>
        </div>
      </div>

      <div class="instructors-content">
        <div class="container">
          <div class="stats-section">
            <div class="stats-grid">
              <div class="stat-card">
                <div class="stat-number">500+</div>
                <div class="stat-label">Expert Instructors</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">15+</div>
                <div class="stat-label">Years Average Experience</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">4.8</div>
                <div class="stat-label">Average Rating</div>
              </div>
              <div class="stat-card">
                <div class="stat-number">2M+</div>
                <div class="stat-label">Students Taught</div>
              </div>
            </div>
          </div>

          <div class="instructors-grid">
            <div *ngFor="let instructor of instructors" class="instructor-card">
              <div class="instructor-image">
                <img
                  [src]="instructor.avatar"
                  [alt]="instructor.name"
                  loading="lazy"
                />
                <div class="instructor-overlay">
                  <div class="social-links">
                    <a href="#" class="social-link">
                      <i class="fab fa-facebook"></i>
                    </a>
                    <a href="#" class="social-link">
                      <i class="fab fa-telegram"></i>
                    </a>
                    <a href="#" class="social-link">
                      <i class="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div class="instructor-info">
                <h3 class="instructor-name">{{ instructor.name }}</h3>
                <p class="instructor-title">{{ instructor.title }}</p>
                <p class="instructor-bio">{{ instructor.bio }}</p>

                <div class="instructor-stats">
                  <div class="stat-item">
                    <i class="fas fa-star"></i>
                    <span>{{ instructor.rating }} Rating</span>
                  </div>
                  <div class="stat-item">
                    <i class="fas fa-users"></i>
                    <span
                      >{{ formatNumber(instructor.students) }} Students</span
                    >
                  </div>
                  <div class="stat-item">
                    <i class="fas fa-play-circle"></i>
                    <span>{{ instructor.courses }} Courses</span>
                  </div>
                </div>

                <button class="btn btn-primary">View Courses</button>
              </div>
            </div>
          </div>

          <div class="join-section">
            <div class="join-card">
              <h2 class="join-title">Become an Instructor</h2>
              <p class="join-description">
                Share your expertise with millions of students worldwide. Join
                our community of passionate educators and make a difference.
              </p>
              <div class="join-benefits">
                <div class="benefit-item">
                  <i class="fas fa-dollar-sign"></i>
                  <span>Earn money teaching</span>
                </div>
                <div class="benefit-item">
                  <i class="fas fa-users"></i>
                  <span>Reach global audience</span>
                </div>
                <div class="benefit-item">
                  <i class="fas fa-tools"></i>
                  <span>Professional tools</span>
                </div>
              </div>
              <button class="btn btn-primary btn-lg">
                Start Teaching Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .instructors-page {
        min-height: 100vh;
        padding-top: 80px;
      }

      .page-header {
        background: linear-gradient(
          135deg,
          var(--primary-600) 0%,
          var(--primary-800) 100%
        );
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

      .instructors-content {
        padding: var(--space-20) 0;
        background: var(--neutral-50);
      }

      .stats-section {
        margin-bottom: var(--space-20);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: var(--space-6);
      }

      .stat-card {
        background: white;
        padding: var(--space-8);
        border-radius: var(--radius-xl);
        text-align: center;
        box-shadow: var(--shadow-md);
      }

      .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--primary-600);
        margin-bottom: var(--space-2);
      }

      .stat-label {
        color: var(--neutral-600);
        font-weight: 500;
      }

      .instructors-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: var(--space-8);
        margin-bottom: var(--space-20);
      }

      .instructor-card {
        background: white;
        border-radius: var(--radius-xl);
        overflow: hidden;
        box-shadow: var(--shadow-md);
        transition: all var(--transition-normal);
      }

      .instructor-card:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-xl);
      }

      .instructor-image {
        position: relative;
        aspect-ratio: 4/3;
        overflow: hidden;
      }

      .instructor-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform var(--transition-slow);
      }

      .instructor-card:hover .instructor-image img {
        transform: scale(1.05);
      }

      .instructor-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity var(--transition-normal);
      }

      .instructor-card:hover .instructor-overlay {
        opacity: 1;
      }

      .social-links {
        display: flex;
        gap: var(--space-4);
      }

      .social-link {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        text-decoration: none;
        transition: all var(--transition-normal);
      }

      .social-link:hover {
        background: var(--primary-600);
        transform: translateY(-2px);
      }

      .instructor-info {
        padding: var(--space-6);
      }

      .instructor-name {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--neutral-900);
        margin-bottom: var(--space-2);
      }

      .instructor-title {
        color: var(--primary-600);
        font-weight: 500;
        margin-bottom: var(--space-4);
      }

      .instructor-bio {
        color: var(--neutral-600);
        line-height: 1.6;
        margin-bottom: var(--space-6);
      }

      .instructor-stats {
        display: flex;
        flex-direction: column;
        gap: var(--space-3);
        margin-bottom: var(--space-6);
      }

      .stat-item {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        font-size: 0.875rem;
        color: var(--neutral-600);
      }

      .stat-item i {
        color: var(--primary-500);
        width: 16px;
      }

      .join-section {
        text-align: center;
      }

      .join-card {
        background: linear-gradient(
          135deg,
          var(--primary-600),
          var(--primary-800)
        );
        color: white;
        padding: var(--space-16);
        border-radius: var(--radius-2xl);
        max-width: 800px;
        margin: 0 auto;
      }

      .join-title {
        font-size: 2.5rem;
        font-weight: 700;
        margin-bottom: var(--space-4);
      }

      .join-description {
        font-size: 1.125rem;
        opacity: 0.9;
        margin-bottom: var(--space-8);
        line-height: 1.7;
      }

      .join-benefits {
        display: flex;
        justify-content: center;
        gap: var(--space-8);
        margin-bottom: var(--space-8);
      }

      .benefit-item {
        display: flex;
        align-items: center;
        gap: var(--space-2);
        font-weight: 500;
      }

      .benefit-item i {
        color: var(--accent-400);
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .page-title {
          font-size: 2.25rem;
        }

        .instructors-grid {
          grid-template-columns: 1fr;
        }

        .join-benefits {
          flex-direction: column;
          gap: var(--space-4);
        }

        .join-title {
          font-size: 2rem;
        }
      }
    `,
  ],
})
export class InstructorsComponent implements OnInit {
  instructors: Instructor[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService.getInstructors().subscribe((instructors) => {
      this.instructors = instructors;
    });
  }

  formatNumber(num: number): string {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  }
}
