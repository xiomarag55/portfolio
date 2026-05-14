import { Component, AfterViewInit, ElementRef, QueryList, ViewChildren, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills implements AfterViewInit {
  lang = inject(LanguageService);
  @ViewChildren('skillBar') skillBars!: QueryList<ElementRef>;

  skillCategories = [
    {
      titleKey: 'skills.frontend',
      icon: '🎨',
      color: '#00d4ff',
      skills: [
        { name: 'Angular', level: 80 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 90 }
      ]
    },
    {
      titleKey: 'skills.backend',
      icon: '⚙️',
      color: '#8b5cf6',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'NestJS', level: 85 },
        { name: 'Express.js', level: 70 },
        { name: 'GraphQL', level: 75 },
        { name: 'REST APIs', level: 95 },
      ]
    },
    {
      titleKey: 'skills.db',
      icon: '🗄️',
      color: '#10ffa0',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 70 },
        { name: 'MySQL', level: 85 }
      ]
    },
    {
      titleKey: 'skills.devops',
      icon: '☁️',
      color: '#f472b6',
      skills: [
        { name: 'Docker', level: 80 },
        { name: 'AWS', level: 72 },
        { name: 'CI/CD', level: 78 },
        { name: 'Git & GitHub', level: 93 },
        { name: 'Linux', level: 75 },
      ]
    },
  ];

  tools = [
    'VS Code', 'Figma', 'Postman', 'Jira', 'Slack',
    'Nginx', 'Jest', 'Cypress', 'Webpack', 'Vite',
    'GitHub Actions', 'Kubernetes',
  ];

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const width = el.getAttribute('data-width');
            if (width) el.style.width = width + '%';
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.3 }
    );

    setTimeout(() => {
      this.skillBars.forEach(bar => observer.observe(bar.nativeElement));
    }, 100);
  }
}
