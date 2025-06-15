import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course, Category, Instructor } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp.',
      instructor: 'Sarah Johnson',
      instructorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: 89.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviewCount: 12450,
      duration: '52 hours',
      level: 'Beginner',
      category: 'Web Development',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      lessons: 156,
      students: 45230,
      tags: ['HTML', 'CSS', 'JavaScript', 'React'],
      featured: true,
      bestseller: true
    },
    {
      id: '2',
      title: 'Advanced React and Redux',
      description: 'Master React and Redux with real-world projects and modern development practices.',
      instructor: 'Lim Kimtheng',
      instructorAvatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: 79.99,
      originalPrice: 159.99,
      rating: 4.9,
      reviewCount: 8920,
      duration: '35 hours',
      level: 'Advanced',
      category: 'React',
      thumbnail: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      lessons: 98,
      students: 23400,
      tags: ['React', 'Redux', 'JavaScript'],
      featured: true
    },
    {
      id: '3',
      title: 'UI/UX Design Fundamentals',
      description: 'Learn design principles, Figma, user research, and create stunning interfaces.',
      instructor: 'Deth Filit',
      instructorAvatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: 69.99,
      originalPrice: 139.99,
      rating: 4.7,
      reviewCount: 6780,
      duration: '28 hours',
      level: 'Beginner',
      category: 'Design',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      lessons: 75,
      students: 18900,
      tags: ['Figma', 'Design', 'UX'],
      bestseller: true
    },
    {
      id: '4',
      title: 'Python for Data Science',
      description: 'Master Python programming for data analysis, visualization, and machine learning.',
      instructor: 'Davith Dul',
      instructorAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: 94.99,
      originalPrice: 179.99,
      rating: 4.8,
      reviewCount: 9340,
      duration: '45 hours',
      level: 'Intermediate',
      category: 'Data Science',
      thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
      lessons: 120,
      students: 31200,
      tags: ['Python', 'Data Science', 'ML'],
      featured: true
    },
    {
      id: '5',
      title: 'Digital Marketing Mastery',
      description: 'Complete digital marketing course covering SEO, social media, and advertising.',
      instructor: 'Lisa Anderson',
      instructorAvatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: 59.99,
      originalPrice: 119.99,
      rating: 4.6,
      reviewCount: 5670,
      duration: '32 hours',
      level: 'Beginner',
      category: 'Marketing',
      thumbnail: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      lessons: 85,
      students: 15600,
      tags: ['SEO', 'Social Media', 'Ads']
    },
    {
      id: '6',
      title: 'Mobile App Development with Flutter',
      description: 'Build beautiful cross-platform mobile apps using Flutter and Dart.',
      instructor: 'Alex Thompson',
      instructorAvatar: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      price: 84.99,
      originalPrice: 169.99,
      rating: 4.7,
      reviewCount: 4230,
      duration: '38 hours',
      level: 'Intermediate',
      category: 'Mobile Development',
      thumbnail: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      lessons: 102,
      students: 12800,
      tags: ['Flutter', 'Dart', 'Mobile']
    }
  ];

  private categories: Category[] = [
    { id: '1', name: 'Web Development', icon: 'fas fa-code', courseCount: 245 },
    { id: '2', name: 'Data Science', icon: 'fas fa-chart-bar', courseCount: 156 },
    { id: '3', name: 'Design', icon: 'fas fa-paint-brush', courseCount: 189 },
    { id: '4', name: 'Marketing', icon: 'fas fa-bullhorn', courseCount: 98 },
    { id: '5', name: 'Mobile Development', icon: 'fas fa-mobile-alt', courseCount: 78 },
    { id: '6', name: 'Business', icon: 'fas fa-briefcase', courseCount: 134 },
    { id: '7', name: 'Photography', icon: 'fas fa-camera', courseCount: 67 },
    { id: '8', name: 'Music', icon: 'fas fa-music', courseCount: 45 }
  ];

  private instructors: Instructor[] = [
    {
      id: '1',
      name: 'Panha Votey',
      title: 'Full Stack Developer & Tech Lead',
      avatar: '',
      bio: 'Senior developer with 10+ years of experience in web technologies. Former tech lead at Google and Microsoft, passionate about teaching modern web development.',
      rating: 4.9,
      students: 50000,
      courses: 12
    },
    {
      id: '2',
      name: 'Dul Devith',
      title: 'React Specialist & Frontend Architect',
      avatar: 'assets/images/instructor/Devith.jpg',
      bio: 'Expert React developer and technical trainer with extensive experience in building scalable frontend applications. Contributor to open-source projects.',
      rating: 4.8,
      students: 135000,
      courses: 35
    },
    {
      id: '3',
      name: 'Delth Filit',
      title: 'Senior UX/UI Designer',
      avatar: '',
      bio: 'Award-winning designer with expertise in user experience and interface design. Former design lead at Apple and Airbnb, specializing in design systems.',
      rating: 4.7,
      students: 28000,
      courses: 6
    },
    {
      id: '4',
      name: 'Lim Kimtheng',
      title: 'Data Scientist & ML Engineer',
      avatar: '',
      bio: 'PhD in Computer Science with specialization in machine learning and data analysis. Former researcher at Stanford AI Lab and data scientist at Netflix.',
      rating: 4.8,
      students: 31200,
      courses: 10
    },
    {
      id: '5',
      name: 'Sim Lykeang',
      title: 'Digital Marketing Strategist',
      avatar: '',
      bio: 'Marketing expert with 8+ years of experience in digital marketing and growth hacking. Former marketing director at several successful startups.',
      rating: 4.6,
      students: 15600,
      courses: 7
    },
    {
      id: '6',
      name: 'Kong Samnang',
      title: 'Mobile App Developer',
      avatar: '',
      bio: 'Mobile development specialist with expertise in Flutter, React Native, and native iOS/Android development. Published multiple apps with millions of downloads.',
      rating: 4.7,
      students: 12800,
      courses: 5
    }
  ];

  getAllCourses(): Observable<Course[]> {
    return of(this.courses);
  }

  getFeaturedCourses(): Observable<Course[]> {
    return of(this.courses.filter(course => course.featured));
  }

  getCourseById(id: string): Observable<Course | undefined> {
    return of(this.courses.find(course => course.id === id));
  }

  getCategories(): Observable<Category[]> {
    return of(this.categories);
  }

  getInstructors(): Observable<Instructor[]> {
    return of(this.instructors);
  }

  getCoursesByCategory(categoryId: string): Observable<Course[]> {
    const category = this.categories.find(cat => cat.id === categoryId);
    if (!category) return of([]);
    
    return of(this.courses.filter(course => course.category === category.name));
  }

  searchCourses(query: string): Observable<Course[]> {
    const filtered = this.courses.filter(course =>
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase()) ||
      course.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
    );
    return of(filtered);
  }
}