import { Component, OnInit  } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseService } from "../../services/course.service";
import { Instructor } from "../../models/course.model";
import { TeamMember } from "../../models/course.model";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-page">
      <div class="hero-section">
        <div class="container">
          <h1 class="hero-title">About Code Hunter</h1>
          <p class="hero-description">
            Empowering millions of learners worldwide with premium education and
            transformative learning experiences.
          </p>
        </div>
      </div>

      <div class="mission-section">
        <div class="container">
          <div class="mission-content">
            <div class="mission-text">
              <h2 class="section-title">Our Mission</h2>
              <p class="mission-description">
                At Code Hunter, we believe that education is the key to unlocking
                human potential. Our mission is to make high-quality education
                accessible to everyone, everywhere. We're democratizing learning
                by connecting students with world-class instructors and
                cutting-edge content.
              </p>
              <div class="mission-points">
                <div class="point-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Accessible education for all</span>
                </div>
                <div class="point-item">
                  <i class="fas fa-check-circle"></i>
                  <span>World-class instructors</span>
                </div>
                <div class="point-item">
                  <i class="fas fa-check-circle"></i>
                  <span>Cutting-edge technology</span>
                </div>
              </div>
            </div>
            <div class="mission-image">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Students learning"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="stats-section">
        <div class="container">
          <h2 class="section-title text-center">Our Impact</h2>
          <div class="stats-grid">
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-users"></i>
              </div>
              <div class="stat-number">10M+</div>
              <div class="stat-label">Students Worldwide</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-play-circle"></i>
              </div>
              <div class="stat-number">5,000+</div>
              <div class="stat-label">Courses Available</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-graduation-cap"></i>
              </div>
              <div class="stat-number">500+</div>
              <div class="stat-label">Expert Instructors</div>
            </div>
            <div class="stat-card">
              <div class="stat-icon">
                <i class="fas fa-globe"></i>
              </div>
              <div class="stat-number">190+</div>
              <div class="stat-label">Countries Reached</div>
            </div>
          </div>
        </div>
      </div>

      <div class="values-section">
        <div class="container">
          <h2 class="section-title text-center">Our Values</h2>
          <div class="values-grid">
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-lightbulb"></i>
              </div>
              <h3 class="value-title">Innovation</h3>
              <p class="value-description">
                We continuously innovate to create the best learning experiences
                using cutting-edge technology.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-heart"></i>
              </div>
              <h3 class="value-title">Passion</h3>
              <p class="value-description">
                We're passionate about education and committed to helping every
                student achieve their goals.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-handshake"></i>
              </div>
              <h3 class="value-title">Community</h3>
              <p class="value-description">
                We foster a supportive learning community where students and
                instructors thrive together.
              </p>
            </div>
            <div class="value-card">
              <div class="value-icon">
                <i class="fas fa-star"></i>
              </div>
              <h3 class="value-title">Excellence</h3>
              <p class="value-description">
                We maintain the highest standards in content quality and
                educational excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="team-section">
        <div class="container">
          <h2 class="section-title text-center">Leadership Team</h2>
          <div class="team-grid">
            <div *ngFor="let member of TeamMembers" class="team-member">
              <div class="member-image">
                <img [src]="member.image" [alt]="member.alt" loading="lazy" />
              </div>
              <h3 class="member-name">{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .about-page {
        min-height: 100vh;
        padding-top: 80px;
      }

      .hero-section {
        background: linear-gradient(
          135deg,
          var(--primary-600) 0%,
          var(--primary-800) 100%
        );
        color: white;
        padding: var(--space-20) 0;
        text-align: center;
      }

      .hero-title {
        font-size: 3.5rem;
        font-weight: 700;
        margin-bottom: var(--space-6);
      }

      .hero-description {
        font-size: 1.25rem;
        opacity: 0.9;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.7;
      }

      .mission-section {
        padding: var(--space-24) 0;
        background: white;
      }

      .mission-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: var(--space-16);
        align-items: center;
      }

      .section-title {
        font-size: 2.5rem;
        font-weight: 700;
        color: var(--neutral-900);
        margin-bottom: var(--space-6);
      }

      .mission-description {
        font-size: 1.125rem;
        line-height: 1.7;
        color: var(--neutral-600);
        margin-bottom: var(--space-8);
      }

      .mission-points {
        display: flex;
        flex-direction: column;
        gap: var(--space-4);
      }

      .point-item {
        display: flex;
        align-items: center;
        gap: var(--space-3);
        font-weight: 500;
        color: var(--neutral-700);
      }

      .point-item i {
        color: var(--secondary-500);
        font-size: 1.25rem;
      }

      .mission-image {
        border-radius: var(--radius-2xl);
        overflow: hidden;
        box-shadow: var(--shadow-xl);
      }

      .mission-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .stats-section {
        padding: var(--space-24) 0;
        background: var(--neutral-50);
      }

      .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--space-8);
        margin-top: var(--space-16);
      }

      .stat-card {
        background: white;
        padding: var(--space-8);
        border-radius: var(--radius-xl);
        text-align: center;
        box-shadow: var(--shadow-md);
        transition: transform var(--transition-normal);
      }

      .stat-card:hover {
        transform: translateY(-4px);
      }

      .stat-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(
          135deg,
          var(--primary-500),
          var(--primary-600)
        );
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto var(--space-6);
        color: white;
        font-size: 2rem;
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

      .values-section {
        padding: var(--space-24) 0;
        background: white;
      }

      .values-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: var(--space-8);
        margin-top: var(--space-16);
      }

      .value-card {
        text-align: center;
        padding: var(--space-8);
      }

      .value-icon {
        width: 80px;
        height: 80px;
        background: linear-gradient(
          135deg,
          var(--accent-500),
          var(--accent-600)
        );
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto var(--space-6);
        color: white;
        font-size: 2rem;
      }

      .value-title {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--neutral-900);
        margin-bottom: var(--space-4);
      }

      .value-description {
        color: var(--neutral-600);
        line-height: 1.6;
      }

      .team-section {
        padding: var(--space-24) 0;
        background: var(--neutral-50);
      }

      .team-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: var(--space-8);
        margin-top: var(--space-16);
      }

      .team-member {
        background: white;
        padding: var(--space-8);
        border-radius: var(--radius-xl);
        text-align: center;
        box-shadow: var(--shadow-md);
        transition: transform var(--transition-normal);
      }

      .team-member:hover {
        transform: translateY(-4px);
      }

      .member-image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto var(--space-6);
        box-shadow: var(--shadow-lg);
      }

      .member-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .member-name {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--neutral-900);
        margin-bottom: var(--space-2);
      }

      .member-role {
        color: var(--primary-600);
        font-weight: 500;
        margin-bottom: var(--space-4);
      }

      .member-bio {
        color: var(--neutral-600);
        line-height: 1.6;
      }

      /* Responsive Design */
      @media (max-width: 768px) {
        .hero-title {
          font-size: 2.5rem;
        }

        .mission-content {
          grid-template-columns: 1fr;
          gap: var(--space-8);
        }

        .section-title {
          font-size: 2rem;
        }

        .stats-grid,
        .values-grid,
        .team-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class AboutComponent implements OnInit {
  TeamMembers: TeamMember[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadTeamMembers();
  }

  loadTeamMembers(): void {
    this.courseService.getTeamMembers().subscribe((members: TeamMember[]) => {
      this.TeamMembers = members;
    });
  }
  getTeamMembers(): TeamMember[] {
    return this.TeamMembers;
  }

}
