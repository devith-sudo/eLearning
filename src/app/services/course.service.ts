import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Course, Category, Instructor, TeamMember } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[] = [
    {
      id: '1',
      title: 'Complete Web Development Bootcamp',
      description: 'Learn HTML, CSS, JavaScript, React, Node.js, and more in this comprehensive bootcamp.',
      instructor: 'Dul Devith',
      instructorAvatar: 'assets/images/instructor/Devith.jpg',
      price: 89.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviewCount: 12450,
      duration: '52 hours',
      level: 'Beginner',
      category: 'Web Development',
      thumbnail: 'assets/images/courses/node.jpeg',
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
      instructorAvatar: 'assets/images/instructor/Theng.JPG',
      price: 79.99,
      originalPrice: 159.99,
      rating: 4.9,
      reviewCount: 8920,
      duration: '35 hours',
      level: 'Advanced',
      category: 'React',
      thumbnail: 'assets/images/courses/react.webp',
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
      instructorAvatar: 'assets/images/instructor/Filit.jpg',
      price: 69.99,
      originalPrice: 139.99,
      rating: 4.7,
      reviewCount: 6780,
      duration: '28 hours',
      level: 'Beginner',
      category: 'Design',
      thumbnail: 'assets/images/courses/uxui.jpeg',
      lessons: 75,
      students: 18900,
      tags: ['Figma', 'Design', 'UX'],
      bestseller: true
    },
    {
      id: '4',
      title: 'Python for Data Science',
      description: 'Master Python programming for data analysis, visualization, and machine learning.',
      instructor: 'Dul Devith',
      instructorAvatar: 'assets/images/instructor/Devith.jpg',
      price: 94.99,
      originalPrice: 179.99,
      rating: 4.8,
      reviewCount: 9340,
      duration: '45 hours',
      level: 'Intermediate',
      category: 'Data Science',
      thumbnail: 'assets/images/courses/python.jpeg',
      lessons: 120,
      students: 31200,
      tags: ['Python', 'Data Science', 'ML'],
      featured: true
    },
    {
      id: '5',
      title: 'Digital Marketing Mastery',
      description: 'Complete digital marketing course covering SEO, social media, and advertising.',
      instructor: 'Panha Votey',
      instructorAvatar: 'assets/images/instructor/Votey.jpg',
      price: 59.99,
      originalPrice: 119.99,
      rating: 4.6,
      reviewCount: 5670,
      duration: '32 hours',
      level: 'Beginner',
      category: 'Marketing',
      thumbnail: 'assets/images/courses/marketing.webp',
      lessons: 85,
      students: 15600,
      tags: ['SEO', 'Social Media', 'Ads']
    },
    {
      id: '6',
      title: 'Mobile App Development with Flutter',
      description: 'Build beautiful cross-platform mobile apps using Flutter and Dart.',
      instructor: 'Sim Lykeang',
      instructorAvatar: 'assets/images/instructor/Keang.jpg',
      price: 84.99,
      originalPrice: 169.99,
      rating: 4.7,
      reviewCount: 4230,
      duration: '38 hours',
      level: 'Intermediate',
      category: 'Mobile Development',
      thumbnail: 'assets/images/courses/mobile.webp',
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
    { id: '8', name: 'Music', icon: 'fas fa-music', courseCount: 45 },
    { id: '9', name: 'Health & Fitness', icon: 'fas fa-heartbeat', courseCount: 82 },
    { id: '10', name: 'Personal Development', icon: 'fas fa-user-plus', courseCount: 110 },
    { id: '11', name: 'IT & Software', icon: 'fas fa-laptop-code', courseCount: 200 },
    { id: '12', name: 'Languages', icon: 'fas fa-language', courseCount: 90 }
  ];

  private instructors: Instructor[] = [
    {
      id: '1',
      name: 'Panha Votey',
      title: 'Full Stack Developer & Tech Lead',
      avatar: 'assets/images/instructor/Votey.jpg',
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
      avatar: 'assets/images/instructor/Filit.jpg',
      bio: 'Award-winning designer with expertise in user experience and interface design. Former design lead at Apple and Airbnb, specializing in design systems.',
      rating: 4.7,
      students: 28000,
      courses: 6
    },
    {
      id: '4',
      name: 'Lim Kimtheng',
      title: 'Data Scientist & ML Engineer',
      avatar: 'assets/images/instructor/Theng.JPG',
      bio: 'PhD in Computer Science with specialization in machine learning and data analysis. Former researcher at Stanford AI Lab and data scientist at Netflix.',
      rating: 4.8,
      students: 31200,
      courses: 10
    },
    {
      id: '5',
      name: 'Sim Lykeang',
      title: 'Digital Marketing Strategist',
      avatar: 'assets/images/instructor/Keang.jpg',
      bio: 'Marketing expert with 8+ years of experience in digital marketing and growth hacking. Former marketing director at several successful startups.',
      rating: 4.6,
      students: 15600,
      courses: 7
    },
    {
      id: '6',
      name: 'Kong Samnang',
      title: 'Mobile App Developer',
      avatar: 'assets/images/instructor/Samnang.jpg',
      bio: 'Mobile development specialist with expertise in Flutter, React Native, and native iOS/Android development. Published multiple apps with millions of downloads.',
      rating: 4.7,
      students: 12800,
      courses: 5
    }
  ];

  private teamMembers: TeamMember[] = [
    {
      name: 'Deth Filit',
      role: 'Chief Executive Officer',
      bio: 'Former VP of Education at Google with 15+ years in EdTech.',
      image: 'assets/images/instructor/Filit.jpg',
      alt: 'CTO'
    },
    {
      name: 'Dul Devith',
      role: 'Chief Technology Officer',
      bio: 'Tech leader with expertise in scalable learning platforms.',
      image: 'assets/images/instructor/Devith.jpg',
      alt: 'CEO'
    },
    {
      name: 'Lim Kimtheng',
      role: 'Chief Product Officer',
      bio: 'Product visionary focused on learner-centric experiences.',
      image: 'assets/images/instructor/Theng.JPG',
      alt: 'CPO'
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

  getTeamMembers(): Observable<TeamMember[]> {
    return of(this.teamMembers);
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