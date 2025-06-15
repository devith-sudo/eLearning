import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturedCoursesComponent } from '../../components/featured-courses/featured-courses.component';
import { CategoriesComponent } from '../../components/categories/categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroComponent, FeaturedCoursesComponent, CategoriesComponent],
  template: `
    <div class="home-page">
      <app-hero></app-hero>
      <app-featured-courses></app-featured-courses>
      <app-categories></app-categories>
    </div>
  `,
  styles: [`
    .home-page {
      min-height: 100vh;
    }
  `]
})
export class HomeComponent {}