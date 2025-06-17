import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { HeaderComponent } from './app/components/header/header.component';
import { FooterComponent } from './app/components/footer/footer.component';
import { HomeComponent } from './app/pages/home/home.component';
import { CoursesComponent } from './app/pages/courses/courses.component';
import { InstructorsComponent } from './app/pages/instructors/instructors.component';
import { AboutComponent } from './app/pages/about/about.component';
import { CareersComponent } from './app/pages/careers/careers.component';
import { CourseDetailComponent } from './app/pages/course-detail/course-detail.component';
import { BlogComponent } from './app/pages/blog/blog.component';
import { PressComponent } from './app/pages/press/press.component';
import { HelpCenterComponent } from './app/pages/help-center/help-center.component';
import { TermsComponent } from './app/pages/terms/terms.component';
import { PrivacyComponent } from './app/pages/privacy/privacy.component';
import { StudentDiscountComponent } from './app/pages/student-discount/student-discount.component';
import { AccessibilityComponent } from './app/pages/accessibility/accessibility.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CategoriesComponent } from './app/components/categories/categories.component';

const routes = [
  { path: '', component: HomeComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'course/:id', component: CourseDetailComponent },
  { path: 'instructors', component: InstructorsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'press', component: PressComponent },
  { path: 'help', component: HelpCenterComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'student-discount', component: StudentDiscountComponent },
  { path: 'accessibility', component: AccessibilityComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'categories/:id', component: CoursesComponent },
  { path: 'student-discount', component: StudentDiscountComponent },
  { path: '404', component: HomeComponent }, // Placeholder for 404 page
  { path: '500', component: HomeComponent }, // Placeholder for 500 page
  { path: '**', redirectTo: '' }
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app">
      <app-header></app-header>
      <main class="main-content">
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .app {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    .main-content {
      flex: 1;
    }
  `]
})
export class App {}

bootstrapApplication(App, {
  providers: [
    provideRouter(routes)
  ]
});